# antd form的Upload显示上传进度

```typescript jsx
  const uploadRequest = async (options: any) => {
    let { file, onProgress, onSuccess } = options;
    const params = new FormData();
    params.append('FileData', file);
    UploadFile(params, {
      onUploadProgress: ({ total, loaded }: { total: number; loaded: number }) => {
        onProgress({ percent: ((loaded / total) * 100).toFixed(2) }, file);
      },
    })
    .then((res) => {
      if (res.ErrorCode === 0) {
        file = {
          ...file,
          ...res.Body,
          uid: file.uid,
          name: res.Body.FileName,
          url: res.Body.FilePath,
        };
        onSuccess(res, file);
      }
    });
  };

  useImperativeHandle(ref, () => {
    return {
      handleOpen(record: any) {
        setVisible(true);
        if (record) {
          setValues(record);
          const row = { ...record, FileName: record.File?.FileName };
          if (record.File?.FilePath) {
            const file = {
              ...record.File,
              uid: record.File.FileName,
              name: record.File.FileName,
              url: record.File.FilePath,
              status: 'done',
            };
            row.file = [file];  // 回显文件列表
          }
          form.setFieldsValue(row);
        }
      },
    };
  });

<Form form={form}>
  <Form.Item
    label="File Upload"
    name="file"
    valuePropName="fileList"
    getValueFromEvent={(e) => {
      if (Array.isArray(e)) {
        return e;
      }
      return e && e.fileList;
    }}
  >
    <Upload.Dragger
      action=""
      maxCount={1}
      progress={{ showInfo: true }}
      customRequest={uploadRequest}
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
    </Upload.Dragger>
  </Form.Item>
</Form>
```
