# antd pro显示二级菜单的icon

修改gapp.tsx中的layout函数

```tsx jsx
menuItemRender: (menuItemProps, defaultDom) => {
  if (menuItemProps.isUrl || !menuItemProps.path) {
    return defaultDom;
  }
  return (
    <Link to={menuItemProps.path}>
      {menuItemProps.pro_layout_parentKeys
      && menuItemProps.pro_layout_parentKeys.length > 0 &&
      menuItemProps.icon}{defaultDom}
    </Link>
  )
}
```