# react批量处理unstable_batchedUpdates

`unstable_batchedUpdates` 可用于手动批量更新`state`，可以指定多个`setState`合并为一个更新请求


```typescript jsx
function handleInputChange(e) {
    const keyword = e.target.value
    unstable_batchedUpdates(() => {
      setQuery((prevState) => ({ ...prevState, keyword }))
      setPagination((prevState) => ({ ...prevState, page: 1 }))
    }) 
}