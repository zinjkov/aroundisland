import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Gallery from '@/components/Gallery'
import About from '@/components/About'
import Tracker from '@/components/Tracker'
import Admin from '@/components/Admin'
import Analytics from '@/components/admin/Analytics.vue'
import WaypointEditor from '@/components/admin/WaypointEditor.vue'
import AdminTracker from '@/components/admin/AdminTracker.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: Gallery,
    },
    {
      path: '/tracker',
      name: 'tracker',
      component: Tracker
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
      children: [
        {
          path: '/admin/analytics',
          name: 'analytics',
          component: Analytics
        },
        {
          path: '/admin/waypointeditor',
          name: 'waypointeditor',
          component: WaypointEditor
        },
        {
          path: '/admin/tracker',
          name: 'admintracker',
          component: AdminTracker
        },
      ]
    },
  ]
})
