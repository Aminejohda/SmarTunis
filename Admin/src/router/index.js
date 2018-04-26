import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'

import Charts from '@/views/Charts'
import Culture from '@/views/Culture/CultureSpace'
import ProjectStats from '@/views/project/ProjectStats'
import Users from '@/views/Users/Users'

Vue.use(Router)

export default new Router({
  mode: 'hash', // Demo is living in GitHub.io, so required!
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'charts',
          name: 'Charts',
          component: Charts
        },
        {
          path: 'Culture',
          name: 'Culture',
          component: Culture
        },
        {
          path: 'ProjectStats',
          name: 'ProjectStats',
          component: ProjectStats
        },
        {
          path: 'Users',
          name: 'user',
          component: Users
        }
      ]
    }
  ]
})
