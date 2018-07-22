/**
 * Store module actions file.
 * Demo/actions
 */
// Use application custom & remote API modules
import { apiDemo } from '@/api/demo/'
import { apiOrg } from 'dms-base/api/org/'

export default {
  demoAction1({ commit, getters }, { param1 }) {
    return new Promise((resolve, reject) => {
      // Use custom API module
      apiDemo.request1(param1).then(response => {
        // Save data to the Store
        commit(response.data)
        // Return results
        resolve(response)
      }).catch(error => {
        console.warn(error)
        reject(error)
      })
    })
  },
  
  demoAction2({ commit, getters }, { param1 }) {
    return new Promise((resolve, reject) => {
      // Use remote API module
      apiOrg.request2(param1).then(response => {
        // Save data to the Store
        commit(response.data)
        // Return results
        resolve(response)
      }).catch(error => {
        console.warn(error)
        reject(error)
      })
    })
  }
}
