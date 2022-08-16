import Vue from 'vue';
import LoadingSpinnerItem from '../../components/LoadingSpinnerItem/LoadingSpinnerItem.vue';
import NavbarItem from '../../components/NavbarItem/NavbarItem.vue';
import CardItem from '../../components/CardItem/CardItem.vue';

import axios from 'axios';
import { Card } from '../../types/Card';

export default Vue.extend({
  name: 'HomeView',
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
    const { data } = await axios.get('https://memory-api.dev-scapp.swisscom.com/cards');
    this.cards = data.sort(() => 0.5 - Math.random()).slice(0, 8);
    // Duplicating cards
    this.cards.push(...JSON.parse(JSON.stringify(this.cards)));
    // Shuffling cards
    this.cards = this.cards.sort(() => 0.5 - Math.random());
    // this.cards.forEach(card => console.log(JSON.stringify(card)));

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

      // this.cards = cards;
    },

    flippedCards() {
      // create new array of each card that is flipped
      return this.cards.filter(card => card.flipped);
    },

    sameFlippedCard() {
      const flippedCards = this.flippedCards();

      console.log(flippedCards);
      if (flippedCards.length == 2) {
        if (flippedCards[0].id == flippedCards[1].id) {
          return true;
        }
      }
    },

    setCardFounds() {
      // set found to true foreach flipped card in this.cards
      this.cards.forEach(card => {
        if (card.flipped) {
          card.found = true;
        }
      });
    },

    checkAllFound() {
      // create new array of each card that is found
      const foundCards = this.cards.filter(card => card.found);
      if (foundCards.length == this.cards.length) {
        return true;
      }
    },

    startGame() {
      this.started = true;
      // TODO: start timer
    },

    finishGame() {
      this.started = false;

      // TODO: calculate score
      this.showSplash = true;
    },

    flipCard(index: number) {
      //
      const card = this.cards[index];

      // if card is already flipped or found, return
      if (card.found || card.flipped) {
        return;
      }

      if (!this.started) {
        this.startGame();
      }

      const flipCount = this.flippedCards().length;
      console.log('flipCount: ', flipCount);
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
      // set each flipped card of array to false
      this.cards.map(card => (card.flipped = false));
    },

    clearFlipBackTimer() {
      clearTimeout(this.flipBackTimer);
      this.flipBackTimer = null;
    },
  },
});
