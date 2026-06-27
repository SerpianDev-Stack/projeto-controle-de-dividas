import { useState } from "react";
import type { Client } from "./types/clients";
import type { Transaction } from "./types/clients";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

function App() {
  const [clients, setClients] = useState<Client[]>([]);

  const addClient = (name: string, value: number) => {
    const firstTransaction: Transaction = {
      id: Date.now(),
      value,
      type: "debt",
      description: "Dívida inicial",
      date: new Date().toISOString(),
    };

    const newClient: Client = {
      id: Date.now(),
      name,
      value,
      paid: false,
      transactions: [firstTransaction],
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

  const addTransaction = (client: Client, transaction: Transaction): Client => {
    const updatedTransactions = [...client.transactions, transaction];

    const totalDebt = updatedTransactions.reduce((total, item) => {
      if (item.type === "debt") {
        return total + item.value;
      }

      return total - item.value;
    }, 0);

    return {
      ...client,
      value: totalDebt,
      paid: totalDebt <= 0,
      transactions: updatedTransactions,
    };
  };

  const handleTransaction = (clientId: number, transaction: Transaction) => {
    setClients((prev) =>
      prev.map((client) =>
        client.id === clientId ? addTransaction(client, transaction) : client,
      ),
    );
  };

  console.log(clients);

  return (
    <BrowserRouter>
      <AppRoutes
        clients={clients}
        onAddClient={addClient}
        onMarkAsPaid={markAsPaid}
        onDeleteClient={deleteClient}
        onUpdateValue={updateClientValue}
        onAddTransaction={handleTransaction}
        totalPending={totalPending}
        totalPaid={totalPaid}
      />
    </BrowserRouter>
  );
}

export default App;
