# GraphQUI

## GraphQL Implementation of UINames using AWS AppSync, uinames.com, & avatars.dicebear.com

![](https://imgur.com/LCjS0FX.jpg)

#### Request Mapping Template

```js
{
    "version": "2018-05-29",
    "method": "GET",
    "resourcePath": "/api/?ext"
}
```

#### Response Mapping Template

```js
#if($ctx.result.statusCode == 200)
    $ctx.result.body
#else
    $utils.appendError($ctx.result.body, $ctx.result.statusCode)
#end
```
