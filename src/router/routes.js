import AppWrapper from '@/components/AppWrapper2'

const fullRoutes = [
  {
    path: '/:cid/demo',
    name: 'demo',
    component: AppWrapper,
    redirect: '/:cid/demo/',
    children: [
      {
        path: '',
        name: 'demo.home',
        component: () => import('@/components/index')
      },
      {
        path: 'settings',
        name: 'demo.settings',
        component: () => import('@/components/settings')
      },
      {
        path: 'help',
        name: 'demo.help',
        component: () => import('@/components/help')
      }
    ]
  }
]

const childrenRoutes = [
  {
    path: 'index',
    name: 'demo.home',
    component: () => import('@/components/index')
  },
  {
    path: 'settings',
    name: 'demo.settings',
    component: () => import('@/components/settings')
  },
  {
    path: 'help',
    name: 'demo.help',
    component: () => import('@/components/help')
  }
]

export { fullRoutes, childrenRoutes }
