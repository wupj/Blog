# axios取消重复请求

```javascript
import axios from 'axios'

const excludeUrl = []

const httpMap = new Map()

const getHttpKey = config => {
  let { method, url, params, data } = config
  if (typeof params === 'string') {
    params = JSON.parse(params)
  }
  if (typeof data === 'string') {
    data = JSON.parse(data)
  }
  return [method, url, JSON.stringify(params), JSON.stringify(data)].join('&')
}

const addHttp = (config = {}) => {
  const key = getHttpKey(config)
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken(cancel => {
      if (!httpMap.has(key)) {
        httpMap.set(key, cancel)
      }
    })
}

const removeHttp = (config = {}, flag = true) => {
  const key = getHttpKey(config)
  if (httpMap.has(key)) {
    const cancelToken = httpMap.get(key)
    flag && cancelToken(key)
    httpMap.delete(key)
  }
}

axios.interceptors.request.use(
  config => {
    if (!excludeUrl.includes(config.url)) {
      removeHttp(config)
    }
    addHttp(config)
    return config
  },
  error => {
    httpMap.clear()
  }
)

axios.interceptors.response.use(
  response => {
    removeHttp(response.config, false)
    const res = response.data
  },
  error => {
    removeHttp(error.config, false)
    if (error && error?.__CANCEL__) {
      return error
    }
  }
)
```