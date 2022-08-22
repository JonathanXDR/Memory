import Vue from 'vue';
import LoadingSpinnerItem from '../../components/LoadingSpinnerItem/LoadingSpinnerItem.vue';
import NavbarItem from '../../components/NavbarItem/NavbarItem.vue';
import CardItem from '../../components/CardItem/CardItem.vue';

import { Card } from '../../types/Card';
import ApiService from '@/services/ApiService';

export default Vue.extend({
  name: 'HomeView',
  components: {
    LoadingSpinnerItem,
    NavbarItem,
    CardItem,
  },
  data() {
    return {
      loading: true,
      cards: [] as Card[],
      started: false,
      startTime: 0,
      turns: 0,
      timer: 0,
      time: 0,
      score: 0,
      userName: '',
      timeString: '--:--',
    };
  },
  async created() {
    await this.loadCards();
  },
  mounted() {
    this.loading = false;
  },
  methods: {
    async resetGame() {
      (this.$refs.modal as HTMLSdxDialogElement).close();
      clearInterval(this.timer);
      this.timeString = '--:--';
      this.turns = 0;
      this.started = false;
      this.startTime = 0;
      this.time = 0;
      await this.loadCards();
      this.score = 0;
    },
    userNameValid() {
      return this.userName.length;
    },
    // ApiService get cards
    async loadCards() {
      const data = await ApiService.getCards();
      const cards: Card[] = data
        .sort(() => 0.5 - Math.random())
        .slice(0, 8)
        .map(cardDTO => ({ ...cardDTO, flipped: false, found: false }));
      // Duplicating cards
      cards.push(...JSON.parse(JSON.stringify(cards)));
      // Shuffling cards
      cards.sort(() => 0.5 - Math.random());
      this.cards = cards;
    },

    flippedCards(): Card[] {
      // create new array of each card that is flipped
      return this.cards.filter(card => card.flipped);
    },

    sameFlippedCard(): boolean {
      const flippedCards = this.flippedCards();
      return flippedCards.length == 2 && flippedCards[0].id === flippedCards[1].id;
    },

    setCardFounds(): void {
      // set found to true foreach flipped card in this.cards
      this.cards = this.cards.map(card => {
        card.found = card.flipped || card.found;
        return card;
      });
    },

    checkAllFound(): boolean {
      // Check if array length of non found cards is equal to zero
      return this.cards.filter(card => !card.found).length === 0;
    },

    startGame(): void {
      this.started = true;

      this.timer = setInterval(() => {
        const date = new Date(0);

        date.setSeconds(this.time++);
        let dateString = date.toISOString().substring(14, 19);

        if (dateString === '59:59') {
          clearInterval(this.timer);
          dateString = '∞:∞';
        }

        this.timeString = dateString;
      }, 1000);
    },

    finishGame(): void {
      this.started = false;

      this.score =
        1000 -
        (this.time - this.startTime - this.cards.length * 5) * 3 -
        (this.turns - this.cards.length) * 5;

      if (this.score < 0) {
        this.score = 0;
      }

      clearInterval(this.timer);
      (this.$refs.modal as HTMLSdxDialogElement).open();

      ApiService.addScore({
        userName: this.userName,
        score: this.score,
      });
    },

    flipCard(index: number): void {
      const card = this.cards[index];

      // if card is already flipped or found, return
      if (card.found || card.flipped) {
        return;
      }

      if (!this.started) {
        this.startGame();
      }

      const flipCount = this.flippedCards().length;
      switch (flipCount) {
        case 0:
          card.flipped = !card.flipped;
          break;
        case 1: {
          card.flipped = !card.flipped;

          this.turns += 1;

          setTimeout(() => {
            this.clearFlips();
          }, 1000);
          // Cards matched
          if (this.sameFlippedCard()) {
            setTimeout(() => {
              this.setCardFounds();
              if (this.checkAllFound()) {
                this.finishGame();
              }
            }, 500);
            return;
          }
        }
      }
    },

    clearFlips(): void {
      // set each flipped card of array to false
      this.cards = this.cards.map(card => {
        card.flipped = false;
        return card;
      });
    },
  },
});
