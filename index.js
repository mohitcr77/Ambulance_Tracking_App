const fast2sms = require('fast-two-sms')

var options= { 
  authorization: 'P95SRFBpxKyXfMrj07miwbDJk4ZUuglAL2I3eG1NWnTztC6cQhESAF2lqaKixpks9b04yCgnXzZU6cjL',
  message : "test message",
  numbers : ['6307363841']
};

fast2sms.sendMessage(options)
.then((response) => {
  console.log(response)
})
  .catch((error) => {
    console.log(error)
  } )