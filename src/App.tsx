import { useState } from "react";
import "./App.css";

type Client = {
  id: number;
  name: string;
  value: number;
};

function App() {
  const [clients, setClients] = useState<Client[]>([]);

  const addClient = (name: string, value: number) => {
    const newClient: Client = {
      id: Date.now(),
      name,
      value,
    };

    setClients((prev) => [...prev, newClient]);
  };

  return (
    <>
      <h1>Controle de Dívidas</h1>

      {/* Componentes a serem adicionados aqui */}
    </>
  );
}

export default App;
