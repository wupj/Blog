# antd form监听特定字段

```typescript jsx
const [form] = Form.useForm();
const name = Form.useWatch('name', form);
```