# antd table表头增加图标提示

```typescript jsx
title: (
    <div>
      <span className={style.mr5}>操作</span>
      <BrTooltip placement="top" title="操作">
        <InfoCircleOutlined />
      </BrTooltip>
    </div>
)
```
