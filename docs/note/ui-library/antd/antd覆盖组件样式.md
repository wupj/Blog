# antd覆盖组件样式

```css
.customSelect {
  :global {
    .ant-select-selection {
      max-height: 51px;
      overflow: auto;
    }
  }
}
```

> 引入的`antd`组件类名没有被`CSS Modules`转化，所以被覆盖的类名`.ant-select-selection`必须放到`:global`中
> 因为上一条的关系，覆盖是全局性的。为了防止对其他`Select`组件造成影响，所以需要包裹额外的`className`限制样式的生效范围