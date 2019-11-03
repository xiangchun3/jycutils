## jycutils
common utils


## Example
### type
```js
type({}) // object
type('abc') // string
```


### formatDate(date, 'yyyy-MM-dd hh:mm:ss')
```js
formatDate(1572755606730, 'yyyy-MM-dd hh:mm:ss') // 2019-11-03 12:33:26
```

### check.isMobile(mobile)
```js
check.isMobile('13800138000') // true
```


### queryString(key)
```js
// http://www.feweb.top/detail?p=123
queryString('id') // 123
```
