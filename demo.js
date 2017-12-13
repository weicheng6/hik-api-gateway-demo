'use strict';

const co = require('co');

const {
  CONTENT_TYPE_FORM,
  Client
} = require('./');

// const client = new Client('APPKEY', 'APPSECRET');
const client = new Client('23967750', 'BZcz3VlqL1DVhWeF1boE');

co(function* () {
  var url = 'https://open8200.hikvision.com/artemis/api/artemis/v1/minus';

  var result = yield client.get(url, {
    query: {
      'a': 1,
      'b': 1
    },
    headers: {
      accept: 'application/json',
      'content-type':'text/plain;charset=UTF-8'
    }
    // signHeaders: {
    //   'a-header1': 'header1Value',
    //   'b-header2': 'header2Value'
    // }
  });

  console.log(JSON.stringify(result));
}).catch((error)=>{
  //请求错误信息
  console.log(JSON.stringify(error.message));
});

co(function* () {
  var url = 'https://open8200.hikvision.com/artemis/api/artemis/v1/plus';

  var result = yield client.post(url, {
    headers: {
      'content-type': "application/x-www-form-urlencoded;charset=UTF-8"
    },
    // signHeaders: {
    //   'a-header1': 'header1Value',
    //   'b-header2': 'header2Value'
    // },
    // query: {
    //   'a-query1': 'query1Value',
    //   'b-query2': 'query2Value'
    // },
    data: {
      'a': 1,
      'b': 1
    }
  });

  console.log(JSON.stringify(result));
}).catch((error)=>{
  //请求错误信息
  console.log(JSON.stringify(error.message));
});

// co(function* () {
//   var url = 'https://open8200.hikvision.com/delete';

//   var result = yield client.delete(url, {
//     headers: {
//       accept: 'application/json'
//     },
//     signHeaders: {
//       'a-header1': 'header1Value',
//       'b-header2': 'header2Value'
//     },
//     query: {
//       'a-query1': 'query1Value',
//       'b-query2': 'query2Value'
//     }
//   });

//   console.log(JSON.stringify(result));
// });


// co(function* () {
//   var url = 'https://open8200.hikvision.com/update';

//   var result = yield client.put(url, {
//     headers: {
//       accept: 'application/json',
//       'content-type': 'application/x-www-form-urlencoded'
//     },
//     data: {
//       pid: ''
//     }
//   });

//   console.log(JSON.stringify(result));
// });
