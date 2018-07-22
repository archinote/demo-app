# Маршрутизация приложения

Импорт маршрутизации в файле ```main.js```:
```js
main.js (фрагмент)
-------
// Из общего репозитория dms-base:
import router from 'dms-base/router/'
// Или собственного:
import router from './router/'
```

Собственная маршрутизация приложения строится на базовой из репозитория ```dms-base```.

Структура папки ```router``` приложения:
```
router
| - index.js      - 
| - routes.js     - список путей (маршрутов)
```

Пример файла ```index.js```

```js
// Импорт базовой маршрутизации
import router from 'dms-base/router/'

import { routes } from './routes'

// Добавление маршрутов приложения к базовому списку
router.addRoutes(routes)

export default router
```

Пример файла ```routes.js```

```js
import AppWrapper from '@/components/AppWrapper'

export const routes = [
  {
    // Базовый адрес приложения
    path: '/:cid/test',
    name: 'test',
    component: AppWrapper,
    redirect: '/:cid/test/index',
    // Дочерние адреса
    children: [
      {
        path: 'index',
        name: 'test.home',
        component: () => import('@/components/home')
      },
      {
        path: 'settings',
        name: 'test.settings',
        component: () => import('@/components/settings')
      },
      {
        path: 'help',
        name: 'test.help',
        component: () => import('@/components/help')
      }
    ]
  }
]
```