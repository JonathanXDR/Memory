import { CardDTO } from '@/dto/CardDTO';
import { ScoreBaseDTO } from '@/dto/ScoreBaseDTO';
import { ScoreGetDTO } from '@/dto/ScoreGetDTO';
import HttpService from '@/services/HttpService';

const ApiService = {
  async getCards(): Promise<CardDTO[]> {
    const { data } = await HttpService.get<CardDTO[]>('/cards');
    return data;
  },

  async getScores(): Promise<ScoreGetDTO[]> {
    const { data } = await HttpService.get<ScoreGetDTO[]>('/scores');
    return data;
  },

  async addScore(score: ScoreBaseDTO): Promise<ScoreGetDTO> {
    const { data } = await HttpService.post<ScoreGetDTO>('/scores', score);
    console.log(data);
    return data;
  },
};

export default ApiService;
