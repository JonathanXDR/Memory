import Vue from 'vue';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner.vue';
import Navbar from '../../components/Navbar/Navbar.vue';
import Card from '../../components/Card/Card.vue';
import axios from 'axios';
import moment from 'moment';

export default Vue.extend({
  name: 'Home',
  components: {
    LoadingSpinner,
    Navbar,
    Card,
  },
  data() {
    return {
      loading: true,
      showModal: false,
      cards: [] as any,
      started: false,
      startTime: 0 as any,
      turns: 0,
      flipBackTimer: null as any,
      timer: null as any,
      time: '--:--',
      score: 0,
    };
  },
  // TODO: Update axios with base url etc.
  async created() {
    const response = await axios.get('https://memory-api.dev-scapp.swisscom.com/cards');
    const cards = response.data.sort(() => 0.5 - Math.random()).slice(0, 8);
    this.cards = cards.concat(cards).sort(() => 0.5 - Math.random());
    this.resetGame();
  },
  mounted() {
    this.loading = false;
  },
  methods: {
    resetGame() {
      this.showModal = false;
      const cards = this.cards;
      this.turns = 0;
      this.score = 0;
      this.started = false;
      this.startTime = 0;

      cards.forEach((card: any) => {
        card.flipped = false;
        card.found = false;
      });

      this.cards = cards;
    },

    flippedCards() {
      return this.cards.filter((card: any) => card.flipped);
    },

    sameFlippedCard() {
      const flippedCards = this.flippedCards();
      if (flippedCards.length == 2) {
        if (flippedCards[0].id == flippedCards[1].id) {
          return true;
        }
      }
    },

    setCardFounds() {
      this.cards.forEach((card: any) => {
        if (card.flipped) {
          card.found = true;
        }
      });
    },

    checkAllFound() {
      const foundCards = this.cards.filter((card: any) => card.found);
      if (foundCards.length == this.cards.length) {
        return true;
      }
    },

    startGame() {
      this.started = true;
      this.startTime = moment();

      this.timer = setInterval(() => {
        this.time = moment(moment().diff(this.startTime)).format('mm:ss');
      }, 1000);
    },

    finishGame() {
      this.started = false;
      clearInterval(this.timer);
      const score =
        1000 -
        (moment().diff(this.startTime, 'seconds') - this.cards.length * 5) * 3 -
        (this.turns - this.cards.length) * 5;
      this.score = Math.max(score, 0);
      this.showModal = true;
    },

    flipCard(card: any) {
      if (card.found || card.flipped) {
        console.log('Card clicked!', card);
        return;
      }

      const flipCount = this.flippedCards().length;
      if (flipCount == 0) {
        card.flipped = !card.flipped; // set flipped to true
      } else if (flipCount == 1) {
        card.flipped = !card.flipped; // set flipped to true
        this.turns += 1;

        if (this.sameFlippedCard()) {
          // Match!
          this.flipBackTimer = setTimeout(() => {
            this.clearFlipBackTimer();
            this.setCardFounds();
            this.clearFlips();

            if (this.checkAllFound()) {
              this.finishGame();
            }
          }, 200);

          console.log('Match!');
        } else {
          // Wrong match
          this.flipBackTimer = setTimeout(() => {
            this.clearFlipBackTimer();
            this.clearFlips();
          }, 1000);

          console.log('Wrong match!');
        }
      }
    },

    clearFlips() {
      this.cards.map((card: any) => (card.flipped = false));
    },

    clearFlipBackTimer() {
      clearTimeout(this.flipBackTimer);
      this.flipBackTimer = null;
    },
  },
});
