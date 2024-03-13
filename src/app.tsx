import "./app.css";
import { MQContextProvider, MenuContextProvider } from "./components";

import Temporal from "./temporal";

function App() {
  return (
    <MQContextProvider>
      <MenuContextProvider>
        <Temporal />
      </MenuContextProvider>
    </MQContextProvider>
  );
}

export default App;
