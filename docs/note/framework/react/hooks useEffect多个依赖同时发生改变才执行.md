# hooks useEffect多个依赖同时发生改变才执行

## useRef

```typescript jsx
const [a, setA] = useState(0)
const [b, setB] = useState(0)
const ref = useRef({ a, b })

useEffect(() => {
let { a: prevA, b: prevB } = ref.current
console.log('更新前:', prevA, prevB)
console.log('更新后:', a, b)

if (prevA !== a && prevB !== b) {
  console.log('update!')
  ref.current = { a, b }
}
}, [a, b])
```

## debounce

```typescript jsx
import { useRef } from 'react'
import { debounce } from 'lodash-es'

export function useDebounce<T extends Function>(fn: T, wait = 1000) {
  const func = useRef(fn);
  func.current = fn
  const debounceWrapper = useRef(debounce((args) => func.current?.(args), wait))
  return (debounceWrapper.current as unknown) as T
}
```

```typescript jsx
export function useBatchEffect(effect: EffectCallback, deps?: DependencyList, wait = 0) {
  const fn = useDebounce(effect, wait)
  useEffect(fn, deps)
}
```

```typescript jsx
useBatchEffect(() => {
    getData()
}, [type, status])
```

