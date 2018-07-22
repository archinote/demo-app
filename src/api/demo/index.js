/**
 * API module
 * TEST module.
 */
import { ApiModule } from 'dms-base/api/api-module'
import routes from './routes'

class ApiDemo extends ApiModule {
  request1(param1) {
    console.log("Demo API module, request1()")

    this.http.get(routes.demo1, { params: { param1 } }).then(response => {
      resolve(response)
    }).catch(error => {
      console.warn(error)
      reject(error)
    })
  }
}

// Create and export module class instance.
const apiDemo = new ApiDemo('demo')
export { apiDemo }
