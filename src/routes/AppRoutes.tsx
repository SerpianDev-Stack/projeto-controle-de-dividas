import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ClientTransactions from "../pages/ClientTransactions";
import type { Client, Transaction } from "../types/clients";

type Props = {
  clients: Client[];
  onAddClient: (name: string, value: number) => void;
  onMarkAsPaid: (id: number) => void;
  onDeleteClient: (id: number) => void;
  onUpdateValue: (id: number, newValue: number) => void;
  onAddTransaction: (clientId: number, transaction: Transaction) => void;
  totalPending: number;
  totalPaid: number;
};

const AppRoutes = ({
  clients,
  onAddClient,
  onMarkAsPaid,
  onDeleteClient,
  onUpdateValue,
  onAddTransaction,
  totalPending,
  totalPaid,
}: Props) => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            clients={clients}
            onAddClient={onAddClient}
            onMarkAsPaid={onMarkAsPaid}
            onDeleteClient={onDeleteClient}
            onUpdateValue={onUpdateValue}
            onAddTransaction={onAddTransaction}
            totalPending={totalPending}
            totalPaid={totalPaid}
          />
        }
      />

      <Route
        path="/clientes/:id"
        element={<ClientTransactions clients={clients} />}
      />
    </Routes>
  );
};

export default AppRoutes;
