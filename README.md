# WebSockets with React and Socket.IO

## Index

1. [Projects inside this repo](#other-projects)
2. [Introduction](#websockets)
3. [What is Full-Duplex?](#what-is-full-duplex)
4. [Why Use Sockets?](#why-use-sockets)
5. [How Does WebSockets Work?](#how-does-websockets-work)
6. [Glossary](#glossary)
7. [Things I Learned about React](#things-i-learned)
8. [Credits](#credits)

## Projects inside this repo

Here’s a table linking to other related projects:

| **Project Name**                      | **Description**                               | **Project Link to video & code** _(click the image)_                                          |
|---------------------------------------|-----------------------------------------------|--------------------------------------------------------------|
| **Socket.IO Real-Time Band Votes**      | A real-time voting  application using Socket.IO. | [![Got to the repo](https://raw.githubusercontent.com/raulpenate/WebSockets-React/main/img/1-bandvotes.png)](https://github.com/raulpenate/WebSockets-React/tree/main/03-band-refactor)       |
| **Socket.IO Real-Time Ticket Queues App**      | Ticket queues in real time  | [![Got to the repo](https://raw.githubusercontent.com/raulpenate/WebSockets-React/main/img/2-ticketqueues.png)](https://github.com/raulpenate/WebSockets-React/tree/main/04-ticket-app)   
| **Socket.IO Real-Time Maps**      | Real-Time maps using socket.IO (in progress). | [![Got to the repo](https://raw.githubusercontent.com/raulpenate/WebSockets-React/main/img/3-maps.png)](https://github.com/raulpenate/WebSockets-React/tree/main/05-real-time-map)   
| **Socket.IO Chat**      | The mythical chat app using socket.IO (in progress). | [![Got to the repo](https://raw.githubusercontent.com/raulpenate/WebSockets-React/main/img/4-chatapp.png)]()   

## WebSockets

WebSockets is a technology that allows establishing a continuous `full-duplex` connection between the client and server. But first.

### What is Full-Duplex?

`Full-duplex` is like having a real-time, uninterrupted conversation with another person face-to-face. In this context, both the client and server can send and receive messages simultaneously.

![full-duplex](https://raw.githubusercontent.com/raulpenate/WebSockets-React/main/img/full-duplex.png)

### Why Use Sockets?

Let's compare this with [`REST` (_Representational State Transfer_)](https://www.ibm.com/topics/rest-apis).

![rest](https://raw.githubusercontent.com/raulpenate/WebSockets-React/main/img/rest.png)

1. Pedro starts the app and sends a new message to a new person.
2. The server receives the message and informs Pedro that it was sent.
3. If a new user sends a message to Pedro, we typically use `setInterval` on Pedro's side to repeatedly check the server for new messages.
4. The problem is that most of the time, `setInterval` will tell Pedro, "Hey, there are no messages," until a message arrives.

Now, imagine this process with thousands or millions of users—it would stress the server and cost money.

### How Does WebSockets Work?

When Pedro wants to talk to Ana, he starts his application, which establishes a `full-duplex` connection with the server. The server will also establish a `full-duplex` connection with Ana. This is why most modern chat apps keep running in the background.

![how-it-works](https://raw.githubusercontent.com/raulpenate/WebSockets-React/main/img/how-it-works.png)

### Glossary

- **Server**: Backend in Node.js.
- **Socket**: Identifier of the connection to a client.
- **Client**: Device connected to a full-duplex server.
- **Emit**: Action where the client sends an event.
- **Event**: Action that the client or server triggers.
- **Listen**: Receiving information from an event.

### Things I Learned about React

- React recommends using multiple `useEffect` hooks instead of combining multiple functions in one, as they may have different dependency lists.
- A component **mounts** when it’s added to the screen.
- A component **updates** when it receives new props or state, usually in response to an interaction.
- A component **unmounts** when it’s removed from the screen.

```jsx
useEffect(() => {
  // This runs after every render
});

useEffect(() => {
  // This runs only on mount (when the component appears)
}, []);

useEffect(() => {
  // This runs on mount *and also* if either 'a' or 'b' have changed since the last render
}, [a, b]);
```

## Lifecycle of a Component

| **Phase**                 | **Description**                                                                 |
|---------------------------|---------------------------------------------------------------------------------|
| **Component Did Mount**    | The component is mounted for the first time.                                    |
| **Effect Sync**            | The effect (`useEffect`) is executed to synchronize with the current component state. |
| **Component Update**       | The component updates in response to changes in props or state.                |
| **Effect Cleanup**         | The effect cleans up any resources before re-executing or before unmounting the component. |
| **Component Will Unmount** | The component is unmounted, and any residual effects are cleaned up.            |
| **Re-Sync on Re-Mount**    | If the component is re-mounted, the effect syncs again.                        |

### Credits

[Fernando Herrera - Aplicaciones en tiempo real con socket-io](https://fernando-herrera.com/course/react-con-websockets)
