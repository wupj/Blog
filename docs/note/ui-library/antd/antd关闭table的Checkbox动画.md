# antd关闭table的Checkbox动画

```typescript jsx
<Table
    rowSelection={{
      animation: false
    }}
/>
```
或者，这样`Checkbox`组件也可以加上这个属性

```typescript jsx
<Table
    rowSelection={{
      getCheckboxProps: {
        animation: false
      }
    }}
/>
```

如果可以，`ConfigProvider`组件也加这个属性，我不想一个一个去改项目所有的Table

```typescript jsx
<ConfigProvider
    table={{
       rowSelection: {
         animation: false
       }
    }}
/>
<ConfigProvider
    table={{
       rowSelection: {
         getCheckboxProps: {
            animation: false
         }
       }
    }}
/>
```

也可以在需要的地方覆盖样式，外层套个 id 或 class 限制

```css
.ant-checkbox-checked .ant-checkbox-inner::after {
    transition: none;
}

.ant-checkbox-checked::after {
    animation: none;
}
```
