# vue中的事件穿透与禁止穿透

在开发过程中经常遇到的一个场景，就是，页面弹窗，弹窗上有一个确定或者关闭按钮

这时如果下方有一个按钮，那你点击弹窗的时候，也会触发弹窗下层的按钮事件，vue提供的解决方法就是直接在`click.stop`

```vue
//阻止单击事件继续传播
<a v-on:click.stop="doThis"></a>
```

```javascript
$('button').on('click', () => {
	event.stopPropagation()
})
```

还有一种情况就是，设计非要把蒙层放在最上层，明明遮住了按钮，他不管，他就觉得这么放好看，那怎么办？

好在前端足够强大，能够解决这个问题，就是css中的一个`pointer-event`s

```
//据网传，除了none/auto以外，其他都是用在svg项目中
pointer-events：auto | none | visiblepainted | visiblefill | visiblestroke | visible | painted | fill | stroke | all
```


```css
.cover{
  position: fixed;
  width: 100%;
  height: 110%;
  z-index: 999;
  //给遮罩层上添加这个属性即可，这是就可以穿透遮罩层，触发到确认按钮了
  pointer-events：none;
}
```

