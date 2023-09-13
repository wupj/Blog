# react点击组件外部的事件

```typescript jsx
const useClickOutside = (ref, callback) => {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback()
    }
  };
  React.useEffect(() => {
    document.addEventListener('click', handleClick)
    return () => {
      document.removeEventListener('click', handleClick)
    }
  })
}

const ClickBox = ({ onClickOutside }) => {
  const clickRef = React.useRef()
  useClickOutside(clickRef, onClickOutside)
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
      <p>Click out of this element</p>
    </div>
  )
}
```
