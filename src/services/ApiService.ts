import axios from 'axios';
import { CardDTO } from '@/dto/CardDTO';
import { ScoreDTO } from '@/dto/ScoreDTO';

const ApiService = {
  init(): void {
    axios.defaults.baseURL = 'https://memory-api.dev-scapp.swisscom.com';
  },

  async getCards(): Promise<CardDTO[]> {
    const { data } = await axios.get<CardDTO[]>('https://memory-api.dev-scapp.swisscom.com/cards');
    console.log(data);
    return data;
  },

  async getScores(): Promise<ScoreDTO[]> {
    const { data } = await axios.get<ScoreDTO[]>(
      'https://memory-api.dev-scapp.swisscom.com/scores',
    );
    return data;
  },

  async addScore(score: number, username: string): Promise<ScoreDTO> {
    const { data } = await axios.post<ScoreDTO>(
      'https://memory-api.dev-scapp.swisscom.com/scores',
      {
        id: Math.random().toString(36).substring(2, 24),
        username: username,
        score: score,
        timestamp: new Date().toISOString(),
      },
    );
    return data;
  },
};

export default ApiService;
