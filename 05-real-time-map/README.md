# Real-Time Map Application

This is a real-time map application built using React, Ant Design (Antd), TypeScript, and Socket.IO, allowing users to move markers in real-time between maps.

## Video Demonstration

Watch the video demonstration of the app:
[![Watch the video](https://raw.githubusercontent.com/raulpenate/WebSockets-React/main/img/3-maps-video.png)](https://youtu.be/YqXnGZ-dmmU)

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
cd WebSockets-React/05-map-app
```

### Installation

#### 1. Install dependencies for the frontend (Map App):

Navigate to the `map-frontend` folder and install the necessary packages using `pnpm`:

```bash
cd map-frontend
pnpm install
```

#### 2. Install dependencies for the backend (Map Server):

Navigate to the `map-server` folder and install the necessary packages using `pnpm`:

```bash
cd ../map-server
pnpm install
```

### Running the Application

#### 1. Start the backend server (Map Server):

In the `map-server` folder, run the following command to start the server:

```bash
pnpm run dev
```

#### 2. Start the frontend app (Map App):

In the `map-frontend` folder, run the following command to start the app:

```bash
pnpm run dev
```

### That's it! 🎉

Now you can open your browser and navigate to `http://localhost:5173` to start using the app and move markers between maps in real-time.