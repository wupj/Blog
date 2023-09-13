# hooks useState更新多个值


```typescript jsx
const [allValues, setAllValues] = useState({
   mobile: '',
   username: '',
   email: '',
   password: '',
   confirmPassword: ''
})

const changeHandler = e => {
   setAllValues(prevValues => {
    return { ...prevValues,[e.target.name]: e.target.value}
   })
}

return (
   <input type="text"
       className="form-control"
       id="mobile"
       name="mobile"
       placeholder="Enter a valid mobile number"
       onChange={changeHandler}
   />
)
```
