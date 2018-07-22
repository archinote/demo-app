/**
 * App router
 */
// Include dms-base routing
import router from 'dms-base/router/'

// Include module with app routes
// 1: Nested app routes (full SPA mode)
// import { childrenRoutes } from './routes'
// 2: Root app routes (app SPA mode)
import { fullRoutes } from './routes'

//
// 1 - add children routes to existing app root route
//
// let { routes } = router.options
// let routeData = routes.find(r => r.name === 'bpm')
// routeData.children = childrenRoutes
// router.addRoutes([routeData])

// 
// 2 - add app full routers
// 
router.addRoutes(fullRoutes)

export default router
