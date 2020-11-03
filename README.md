# What is this?

Proxy for mini programs to make PUT and DELETE calls.

# Installation

`npm i mini-program-proxy-js --save`

Then...

```
   import * as miniProgramProxy from 'miniprogram-proxy-js'

   let params = {
      username: 'Test',
      password: 'Password'
   }

   miniProgramProxy.request('http://localhost:4200', 'example/:id', 'PUT', params);

```

## Options

| Propery   | Type   | Required | Description                                                                                                            |
| --------- | ------ | -------- | ---------------------------------------------------------------------------------------------------------------------- |
| serverUrl | string | true     | Target server host url                                                                                                 |
| url       | string | true     | api url                                                                                                                |
| method    | string | true     | Only accept value of 'DELETE' or 'PUT'                                                                                 |
| data      | object | false    | Request parameters                                                                                                     |
| dataType  | string | false    | Expected format of the returned data. The following formats are supported: json text base64 The default format is json |
| headers   | Object | false    | Request headers The default is {"content-type": "application/json"}                                                    |
