/**
 * Store module getters file.
 * TEST/getters
 */
import { isEmpty } from 'lodash'

export default {
  demoGetter1: (state) => {
    return isEmpty(state.demo1) ? state.demo2 : state.demo3
  }
}
