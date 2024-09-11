# Ticket App

This is a real-time ticket queue application built using React, Antd, TypeScript, and Socket.IO.


## Video Demonstration

Watch the video demonstration of the app:
[![Watch the video](https://raw.githubusercontent.com/raulpenate/WebSockets-React/main/img/2-ticketqueues.png)](https://youtu.be/QKINT0ZB4ug)

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [pnpm](https://pnpm.io/) installed on your machine.

### Cloning the Repository

To get started, you'll need to clone the repository containing the project:

```bash
git clone https://github.com/raulpenate/WebSockets-React.git
```

Then, navigate to the specific folder where the projects are located:

```bash
cd WebSockets-React/04-ticket-app
```

### Installation

#### 1. Install dependencies for the frontend (Ticket Queues):

Navigate to the `ticket-queues` folder and install the necessary packages using `pnpm`:

```bash
cd ticket-queues
pnpm install
```

#### 2. Install dependencies for the backend (Ticket Server):

Navigate to the `ticket-server` folder and install the necessary packages using `pnpm`:

```bash
cd ../ticket-server
pnpm install
```

### Running the Application

#### 1. Start the backend server (Ticket Server):

In the `ticket-server` folder, run the following command to start the server:

```bash
pnpm run dev
```

#### 2. Start the frontend app (Ticket Queues):

In the `ticket-queues` folder, run the following command to start the app:

```bash
pnpm run dev
```

### That's it! 🎉

Now you can open your browser and navigate to `http://localhost:5173` to start using the app.