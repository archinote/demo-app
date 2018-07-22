/**
 * API module
 * Includes full App API
 */
import { ApiModule } from 'dms-base/api/api-module'
import { apiDemo } from './demo'


// Array of all nested API modules.
let modules = [
  apiDemo
]


// Create root Application API class
let api = new ApiModule('api')
api.addModules(modules)


// Export module class instance.
export { api }
