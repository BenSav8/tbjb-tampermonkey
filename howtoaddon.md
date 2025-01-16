# how to make TBJB addons?

(credit to dell-optiplex-790, the creator of TBJB, for the examples)  
making TBJB addons is quite simple if you know a bit of js (and/or css and html), addons are essentially JS code executed in trollbox
there's also a new function for addons that you can use in the following ways:

# addons.register()

you can use this in the following ways:

## messageSender

this is used for messages that are sent by you, using the textarea at the bottom, and the changes are reflected server-side  
(AFAIK) you can only edit data.msg
```
addons.register('messageSender', function(data) {
  data.msg = data.msg.replaceAll('test123', 'test124') // upon typing "test123", your message will be edited to "test124" server-side
});
```

## messageReciever

this is used for messages recieved by the client and show up on the trollbox-scroll, the changes are reflected client-side only, including those sent by you  
you can edit any value, however as previously mentioned they will only show client-side
```
addons.register('messageReciever', function(data) {
  data.msg = data.msg.replaceAll('test1234', 'test12345')
  data.nick = '!' + data.nick // prefix every nick with !
});
```

## userListener

this is used for nicknames in the joining / leaving messages sent by ~, channges are reflected client-side only  
```
addons.register('userListener', function(action, data) {
  data.nick = '!' + data.nick // prefix every nick with !
});
```

## userActionMessageSender

this is used to edit joining / leaving messages sent by ~ further, as you can directly edit the message itself  
dada is the data used while printing messages sent by ~
```
addons.register('userActionMessageSender', function(action, data, dada) {
  if(action === 'join') {
    dada.msg = printNick(data) + ' joined'
  } // joining

  if(action === 'leave') {
    dada.msg = printNick(data) + ' left'
  } // leaving
});
```

# other things

## how to make custom commands?

you have to use messageSender to make custom commands:
```
addons.register('messageSender', function(data) {
  if (data.msg == "/command") { // match the command
    data.msg = '' // clear data.msg
    printMsg({ date: Date.now(), nick: "~", color: "white", style: "opacity: 0.7;", home: 'local', msg: "You did the command" }); // imitate ~ messages
    // more logic
  }
  if (data.msg.startsWith == "/repeat ") { // match the command
    const arg = data.msg.slice(8).trim(); // change 8 to match the number of characters in the command, including "/" and an extra space, 8 in this case (you may use other logic to do arguments, this is just imitating how janken does it)
    data.msg = '' // clear data.msg
    printMsg({ date: Date.now(), nick: "~", color: "white", style: "opacity: 0.7;", home: 'local', msg: "Your argument:" + arg }); // imitate ~ messages
    // more logic
  }
});
```

## HTML in messages?

you can use html in messages edited with addons.register(), they won't be escaped unlike actual messages
```
addons.register('messageReciever', function(data) {
  data.msg = '<span style="color: orangered;">' + data.msg + '</span>'
});
```
