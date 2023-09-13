# react路由传参方式

## params
```typescript jsx
    <Route path="/list/:id" component={List} />
    <Link to="/list/2">跳转页面</Link>
    //页面跳转
    this.props.history.push('/list/2')
    //List页面接收
    console.log(this.props.match.params.id)//传递过来的所有参数
```

> 优点：页面刷新，参数不会丢失
>
> 缺点：传值太多不方便而且url会变的很长

## state
```typescript jsx
    <Route path="/sort" component={Sort} />
    <Link to={{ path: '/sort' , state: { name : 'sunny' }}}> 
    this.props.history.push({ pathname: '/sort', state: { name : 'sunny' }})
    //读取参数
    this.props.location.query.state
```

> 优点：传参优雅，传递参数可传对象
>
> 缺点：使用HashRouter的话，刷新页面，参数会丢失

## search
```typescript jsx
    <Route path="/web/departManange" component={DepartManange} />
    <link to="web/departManange?tenantId=12121212">xxx</link>
    this.props.history.push({ pathname: `/web/departManange?tenantId=${row.tenantId}`})
    // 读取参数
    this.props.location.search
```

> 优点：页面刷新，参数不会丢失
>
> 缺点：传值太多url也会变的很长

## query
```typescript jsx
    <Route path='/query' component={Query} />
    <Link to={{ path: '/query' , query: { name : 'sunny' }}}>
    this.props.history.push({ pathname: '/query', query: { name : 'sunny' }})
    //读取参数用
    this.props.location.query.name
```

> 优点：传参优雅，传递参数可传对象
> 缺点：刷新地址栏，参数丢失

