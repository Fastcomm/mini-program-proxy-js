# What is this?

Proxy for mini programs to make PUT and DELETE calls with docker proxy that can be found at https://github.com/Fastcomm/mini-program-proxy-elixir

# Installation

`npm i mini-program-proxy-js --save`

Then...

PUT example

```
   import * as miniProgramProxy from 'miniprogram-proxy-js'

   let requestObject = {
      serverUrl: 'http://localhost:4200',
      url: 'example/:id',
      data: {
         username: 'Test',
         password: 'Password'
      },
      method: 'PUT'
   }

   miniProgramProxy.request(requestObject).then((res) => {
      console.log("response", res);
   })


```

Delete example

```
   import * as miniProgramProxy from 'miniprogram-proxy-js'

     let requestObject = {
      serverUrl: 'http://localhost:4200',
      url: 'example/:id',
      method: 'DELETE'
   }

   miniProgramProxy.request(requestObject).then((res) => {
      console.log("response", res);
   })

```

## Response

Response will be that of what your host url returns.

## Request Object Options

| Propery   | Type   | Required | Description                                                                                                                           |
| --------- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| serverUrl | string | true     | Target server host url                                                                                                                |
| url       | string | true     | api url                                                                                                                               |
| method    | string | true     | Only accept value of 'DELETE' or 'PUT'                                                                                                |
| data      | object | false    | Request parameters                                                                                                                    |
| dataType  | string | false    | Expected format of the returned data.<br /> The following formats are supported: json, text, base64.<br /> The default format is json |
| headers   | object | false    | Request headers <br />The default is {"content-type": "application/json"}                                                             |
