# Модули API типового приложения DMS

В случае необходимости приложение может использовать свои модули API.

Структура папки API приложения:
```
api
| - index.js      - сборщик всех модулей API
| - test          - папка модуля
  | - index.js    - реализация класса API и его методов
  | - routes.js   - список путей (маршрутов) для использования в модуле API
```

Пример файла ```index.js``` модуля API приложения:
```js
import { ApiModule } from 'dms-base/api/api-module'
import routes from './routes'

class ApiTest extends ApiModule {
  // ... реализация методов класса

  // Пример одного метода: авторизация пользователя
  signIn(email, password) {
    return new Promise((resolve, reject) => {
      this.http.post(routes.signIn, {
        email,
        password
      }).then(response => {
        resolve(response)
      }).catch(error => {
        console.warn(error)
        reject(error)
      })
    })
  }
}

// Создание и экспорт экземпляра класса.
const apiTest = new ApiTest('test')
export { apiTest }
```

Пример файла ```routes.js``` модуля API приложения:
```js
import { baseURL } from 'dms-base/api//baseURLs'

let modulePrefix = '/x/account/v1'

export default {
  baseURL,
  
  signIn: modulePrefix + '/SignIn',
  signUp: modulePrefix + '/SignUp',
  signOut: modulePrefix + '/SignOut',
  companies: '/x/orgstructure/v1/companies-posts'
}
```

Пример файла ```index.js``` (сборщик модулей) API приложения:
```js
/**
 * API module
 * Includes full App API
 */
import { ApiModule } from 'dms-base/api/api-module'
import { apiTest } from './test'

// Array of all nested API modules.
let modules = [
  apiTest
]

// Create root API class
let api = new ApiModule('api')
api.addModules(modules)

// Export module class instance.
export { api }
```

Их импорт осуществляется там, где они используюся. Обычно это модули Хранилища (Store). 

Пример фрагмента файла ```mutations.js``` модуля Хранилища приложения:
```js
mutations.js (фрагмент)
-------

import { api } from '@/api/'
```
