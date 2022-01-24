import Vue from 'vue'
import App from './App.vue'
// import Routes from './routes'
// import Dashboard from './components/Dashboard.vue'
// import VueRouter from 'vue-router'

// Vue.use(VueRouter)


Vue.config.productionTip = false

// const router = new VueRouter({
//   routes: [
//     { path: '/dashboard', component: Dashboard }
//   ]   
// })

new Vue({
  // router:router,
  render: h => h(App),
}).$mount('#app')

