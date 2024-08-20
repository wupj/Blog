# iframe预览的使用

```html
<iframe width="100%" :src="url + '#view=FitH,top&type=accesspdf#scrollbars=0&toolbar=0&statusbar=0'" frameborder="0" style="width: 100%; height: 100%"></iframe> 
```

|   属性值  |   说明   |
|   ----   | ----  |
|   view   |   查看模式：Fit 适应屏幕 FitH 适应水平宽度 FitV 适应垂直高度 |
|   scrollbars   |   滚动条 0 隐藏 1 显示   |
|   toolbar   |   工具栏 0 隐藏 1 显示   |
|   menubar   |   菜单栏 0 隐藏 1 显示  |
|   statusbar   |   状态栏 0 隐藏 1 显示   |
|   navpanes   |   缩略图栏 0 隐藏 1 显示   |
|   Zoom   |   缩放，例如：#zoom=150表示将文件放大至150%   |
|   highlight   |   高亮搜索结果  0 不高亮 1 高亮   |
|   frameborder   |   边框 0 隐藏 1 显示   |
