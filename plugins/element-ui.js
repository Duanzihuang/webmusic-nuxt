import Vue from 'vue'

import {
  Button,
  Input,
  Carousel,
  CarouselItem,
  Pagination,
  Table,
  TableColumn,
  Tabs,
  TabPane,
  Loading
} from 'element-ui'

Vue.use(Button)
Vue.use(Input)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Pagination)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tabs)
Vue.use(TabPane)

Vue.use(Loading.directive)
Vue.prototype.$loading = Loading.service
