import { useState } from "react";
import { ModalProvider } from "./context/ModalProvider";
import HomePage from "./screens/HomePage";

function App() {
  const [showModal, setModal] = useState<boolean>(false);

  return (
    <ModalProvider.Provider value={{ showModal, setModal }}>
      <HomePage />;
    </ModalProvider.Provider>
  );
}

export default App;
