import LogoIcon from "@/components/icons/LogoIcon.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavBar",
  emits: ["updateAnimations"],
  components: {
    LogoIcon,
  },
  data() {
    return {
      items: [
        { name: "Home", route: "/" },
        { name: "Scoreboard", route: "/scoreboard" },
      ],
      themeDark: false,
      navOpen: false,
      navDisabled: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);

    if (localStorage.getItem("theme") === null) {
      const preferedTheme = window.matchMedia("(prefers-color-scheme: dark)");

      if (preferedTheme.matches) {
        this.storeTheme("dark");
      } else {
        this.storeTheme("light");
      }
    } else {
      if (localStorage.getItem("theme") === "dark") {
        this.storeTheme("dark");
      } else {
        this.storeTheme("light");
      }
    }
  },
  methods: {
    toggleTheme() {
      this.themeDark = !this.themeDark;
      if (this.themeDark) {
        this.storeTheme("dark");
      } else {
        this.storeTheme("light");
      }
      this.updateAnimations();
    },

    storeTheme(themeName: string): void {
      this.themeDark = themeName === "dark";
      localStorage.setItem("theme", themeName);
      document.documentElement.className = themeName;
    },

    toggleNav(): void {
      this.navOpen = !this.navOpen;
      this.checkboxTimeout();
    },

    checkboxTimeout(): void {
      this.navDisabled = true;
      setTimeout(() => {
        this.navDisabled = false;
      }, 1000);
    },

    handleScroll(): void {
      if ((this.navOpen = true && window.scrollY > 0)) {
        this.navOpen = false;
      }
    },

    updateAnimations(): void {
      const background = this.$refs["ac-ln-background"] as any;
      background.classList.remove("ac-ln-background-transition");
      setTimeout(() => {
        background.classList.add("ac-ln-background-transition");
      }, 500);
    },
  },
});
