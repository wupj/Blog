# axios下载文件

```javascript
request({
  url: this.exportUrl,
  method: 'post',
  responseType: 'blob',
  data
}).then(res => {
    if (res.data.code !== 200) {
         if ('download' in document.createElement('a')) {
            let url = window.URL.createObjectURL(new Blob([res.data]))
            if ('download' in document.createElement('a')) {
            let a = document.createElement('a')
            a.href = url
            a.style.display = 'none'
            a.setAttribute('download', `export.${this.fileType}`)
            document.body.appendChild(a)
            a.click()
            a.remove()
         } else { // IE10+下载
            navigator.msSaveBlob(new Blob([res.data]), fileName)
         }
    }
})
```