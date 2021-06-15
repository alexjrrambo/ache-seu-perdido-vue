import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import pt from 'vuetify/es5/locale/pt'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { pt },
    current: 'pt'
  },
  theme: {
    themes: {
      light: {
        primary: '#66B33B',
        secondary: '#F3F2F1',
        accent: '#66B33B',
        error: '#b71c1c'
      }
    }
  }
})
