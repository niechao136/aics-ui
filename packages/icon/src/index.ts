import { App } from 'vue-demi'
import AicsIcon from './AicsIcon.vue'
import AicsSvg from './AicsSvg.vue'

const install = (app: App) => {
  app.component('AicsIcon', AicsIcon)
  app.component('AicsSvg', AicsSvg)
}

export { AicsIcon, AicsSvg, install }

export * from './model'
