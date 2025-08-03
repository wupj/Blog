# antd form的datePicker转为日期字符串


## 使用 normalize

```typescript jsx
<Form form={form}>
  <Form.Item
    label="日期"
    name="date"
    rules={[{ required: true, message: "请选择日期" }]}
    getValueProps={(value) => ({ value: value && dayjs(value) })}
    normalize={(value) => value && dayjs(value).format('YYYY-MM-DD')}
  >
    <DatePicker format="YYYY-MM-DD" style={{ width: "100%" }} />
  </Form.Item>
</Form>
```

## 使用 getValueFromEvent

```typescript jsx
<Form form={form}>
  <Form.Item
    label="日期"
    name="date"
    rules={[{ required: true, message: "请选择日期" }]}
    getValueFromEvent={(...[, dateString]) => dateString}
    getValueProps={(value) => ({ value: value && dayjs(value) })}
  >
    <DatePicker format="YYYY-MM-DD" style={{ width: "100%" }} />
  </Form.Item>
</Form>
```