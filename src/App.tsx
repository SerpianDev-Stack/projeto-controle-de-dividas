import { useState } from "react";
import CustumerForm from "./components/custumerForm/CustumerForm";
import ClientList from "./components/listaClientes/ClientList";
import "./App.css";

export type Client = {
  id: number;
  name: string;
  value: number;
  paid: boolean;
};

function App() {
  const [clients, setClients] = useState<Client[]>([]);

  const addClient = (name: string, value: number) => {
    const newClient: Client = {
      id: Date.now(),
      name,
      value,
      paid: false,
    };

    setClients((prev) => [...prev, newClient]);
  };

  const markAsPaid = (id: number) => {
    setClients((prev) => {
      return prev.map((client) =>
        client.id === id ? { ...client, paid: true } : client,
      );
    });
  };

  const deleteClient = (id: number) => {
    setClients((prev) => prev.filter((client) => client.id !== id));
  };

  const updateClientValue = (id: number, newValue: number) => {
    setClients((prev) =>
      prev.map((client) =>
        client.id === id ? { ...client, value: newValue } : client,
      ),
    );
  };

  const totalPending = clients.reduce((acc, client) => {
    if (!client.paid) {
      return acc + client.value;
    }
    return acc;
  }, 0);

  const totalPaid = clients.reduce((acc, client) => {
    if (client.paid) {
      return acc + client.value;
    }
    return acc;
  }, 0);

  console.log(clients);

  return (
    <>
      <h1>Controle de Dívidas</h1>

      <CustumerForm onAddClient={addClient} />
      <ClientList
        clients={clients}
        onMarkAsPaid={markAsPaid}
        onDeleteClient={deleteClient}
        onUpdateValue={updateClientValue}
      />
      <h2>Total a receber: R$ {totalPending.toFixed(2)}</h2>
      <h2>Total recebido: R$ {totalPaid.toFixed(2)}</h2>
    </>
  );
}

export default App;
