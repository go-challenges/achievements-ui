import { createI18n } from "vue-i18n";

const i18n = createI18n({
  legacy: false,
  locale: "ru",
  messages: {
    en: {
      challenge: {
        form: {
          name: "Name",
        },
      },
    },
    ru: {
      challenge: {
        form: {
          name: "Имя",
        },
      },
    },
  },
});
export default i18n;
