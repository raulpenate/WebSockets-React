# WebSockets
WebSockets is a technology that makes posible stablish a continuos connection `full-duplex`, between client and server. But what is `full-duplex`? 

## Why use sockets?
Let's understand that with [`REST` (_Representational State Transfer_)](https://www.ibm.com/topics/rest-apis).
![rest](https://raw.githubusercontent.com/raulpenate/WebSockets-React/main/img/rest.png)
- Pedro starts the app and sends a sends a new message to a new person.
- Server receives the message and answers to Pedro that it was sended.
- Let's say a new user sends a message to Pedro.
- Now we've to use a `setInterval` from Pedro's side to do a lot petitions to the server to check if there are available messages.
- The issue is that almost all the time `setInterval` is going to answer to Pedro, "Hey, there're no messages' over and over, until Pedro gets one.
- Now think about that with thousands or millions of user, that would stress the server and cost money.

## Full-duplex
`Full-duplex` is like having a communication with another person face to face, real time no interruptions. We can talk directly to the server and the server can talk directly to us in case someone send us a message.
![rest](https://raw.githubusercontent.com/raulpenate/WebSockets-React/main/img/full-duplex.png)

## How it works?
If Pedro wants to talk to Ana, Pedro have a to start his application and this one is going to start a `full-duplex` communication to the server, and the server will also start a `full-duplex` communication with Ana. That's why most modern chat apps keep running in the background.
![rest](https://raw.githubusercontent.com/raulpenate/WebSockets-React/main/img/how-it-works.png)

## Glossary
- __Server__: Backend in Node.
- __Socket__: Identifier of the connection to a client.
- __Client__: Device connected to a full-duplex server.
- __Emit__: Client that emits an event.
- __Event__: Action that the client or server trigger.
- __Listen__: Get the information of an event.


## Credits
[Fernado Herrera - Aplicaciones en tiempo real con socket-io](https://fernando-herrera.com/course/react-con-websockets)
