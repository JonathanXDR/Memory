import Vue from 'vue';
import LoadingSpinnerItem from '../../components/LoadingSpinnerItem/LoadingSpinnerItem.vue';
import NavbarItem from '../../components/NavbarItem/NavbarItem.vue';
import CardItem from '../../components/CardItem/CardItem.vue';

import axios from 'axios';
import { Card } from '../../types/Card';

export default Vue.extend({
  name: 'Home',
  components: {
    LoadingSpinnerItem,
    NavbarItem,
    CardItem,
  },
  data() {
    return {
      loading: true as boolean,
      showSplash: false as boolean,
      cards: [] as Card[],
      started: false as boolean,
      startTime: 0,
      turns: 0 as number,
      flipBackTimer: null as any,
      timer: null as any,
      time: '--:--' as string,
      score: 0 as number,
    };
  },
  async created() {
    const response = await axios.get('https://memory-api.dev-scapp.swisscom.com/cards');
    this.cards = response.data.sort(() => 0.5 - Math.random()).slice(0, 8);
    this.cards.push(...JSON.parse(JSON.stringify(this.cards)));
    this.resetGame();
  },
  mounted() {
    this.loading = false;
  },
  methods: {
    resetGame() {
      this.showSplash = false;
      const cards = this.cards;

      this.turns = 0;
      this.score = 0;
      this.started = false;
      this.startTime = 0;

      cards.forEach(card => {
        card.flipped = false;
        card.found = false;
      });

      this.cards = cards;
    },

    flippedCards() {
      return this.cards.filter(card => card.flipped);
    },

    sameFlippedCard() {
      const flippedCards = this.flippedCards();
      if (flippedCards.length == 2) {
        if (flippedCards[0].title == flippedCards[1].title) {
          return true;
        }
      }
    },

    setCardFounds() {
      this.cards.forEach(card => {
        if (card.flipped) {
          card.found = true;
        }
      });
    },

    checkAllFound() {
      const foundCards = this.cards.filter(card => card.found);
      if (foundCards.length == this.cards.length) {
        return true;
      }
    },

    startGame() {
      this.started = true;
      // TODO: start timer
      // this.startTime = moment();

      // this.timer = setInterval(() => {
      //   this.time = moment(moment().diff(this.startTime)).format('mm:ss');
      // }, 1000);
    },

    finishGame() {
      this.started = false;
      clearInterval(this.timer);

      // TODO: calculate score
      // const score =
      //   1000 -
      //   (moment().diff(this.startTime, 'seconds') - this.cards.length * 5) * 3 -
      //   (this.turns - this.cards.length) * 5;
      // this.score = Math.max(score, 0);
      this.showSplash = true;
    },

    flipCard(card: Card) {
      if (card.found || card.flipped) {
        return;
      }

      if (!this.started) {
        this.startGame();
      }

      const flipCount = this.flippedCards().length;
      if (flipCount == 0) {
        card.flipped = !card.flipped;
      } else if (flipCount == 1) {
        card.flipped = !card.flipped;
        this.turns += 1;

        if (this.sameFlippedCard()) {
          this.flipBackTimer = setTimeout(() => {
            this.clearFlipBackTimer();
            this.setCardFounds();
            this.clearFlips();

            console.log('Match!');

            if (this.checkAllFound()) {
              this.finishGame();
            }
          }, 200);
        } else {
          this.flipBackTimer = setTimeout(() => {
            this.clearFlipBackTimer();
            this.clearFlips();
          }, 1000);

          console.log('Wrong match!');
        }
      }
    },

    clearFlips() {
      this.cards.map(card => (card.flipped = false));
    },

    clearFlipBackTimer() {
      clearTimeout(this.flipBackTimer);
      this.flipBackTimer = null;
    },
  },
});
