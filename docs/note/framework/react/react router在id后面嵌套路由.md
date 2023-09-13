# react router在id后面嵌套路由

```typescript jsx
<Route path="endpoints/:uuid" component={PointDetail} />
<Route path="endpoints/:uuid/connect_test" component={Connect_test} />
```

```typescript jsx
<Route path="endpoints/:uuid" component={PointDetail}>
  <Route path="connect_test" component={Connect_test} />
</Route>
```