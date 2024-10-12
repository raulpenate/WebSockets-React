import { SocketProvider } from "./context/SocketContext";
import MapsPage from "./pages/MapsPage";

const MapsApp = () => {
  return (
    <SocketProvider>
      <MapsPage />
    </SocketProvider>
  );
};

export default MapsApp;
