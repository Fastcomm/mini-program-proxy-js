# What is this?

Proxy for mini-programs to make PUT and DELETE calls with docker proxy that can be found at https://github.com/Fastcomm/mini-program-proxy-elixir or https://github.com/Fastcomm/mini-program-proxy-ruby

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

   miniProgramProxy.request({requestObject,
      success: (res) => {
         console.log("response",res);
      },
      fail: (res) => {
         console.log("response", res);
      }
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

   miniProgramProxy.request({requestObject,
      success: (res) => {
         console.log("response",res);
      },
      fail: (res) => {
         console.log("response", res);
      }
   })

```

## Request Object Options

| Property  | Type   | Required | Description                                                                                                                           |
| --------- | ------ | -------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| serverUrl | string | true     | Target server host url                                                                                                                |
| url       | string | true     | Api url                                                                                                                               |
| method    | string | false    | Accepted values: 'PUT' , 'GET', 'DELETE', 'POST' <br /> The default will be 'GET'                                                     |
| data      | object | false    | Request parameters                                                                                                                    |
| dataType  | string | false    | Expected format of the returned data.<br /> The following formats are supported: json, text, base64.<br /> The default format is json |
| headers   | object | false    | Request headers <br />The default is {"content-type": "application/json"}                                                             |

## Response CallbackFn

Ensure you add success and fail callbacks functions to your parameters when calling the request function to handle the response.
