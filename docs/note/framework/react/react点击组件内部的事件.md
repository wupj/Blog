# react点击组件内部的事件

```typescript jsx
const useClickInside = (ref, callback) => {
  const handleClick = e => {
    if (ref.current && ref.current.contains(e.target)) {
      callback()
    }
  }
  React.useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}

const ClickBox = ({ onClickInside }) => {
  const clickRef = React.useRef()
  useClickInside(clickRef, onClickInside)
  return (
    <div
      className="click-box"
      ref={clickRef}
      style={{
        border: '2px dashed orangered',
        height: 200,
        width: 400,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <p>Click inside this element</p>
    </div>
  )
}
```
