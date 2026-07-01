import CustumerForm from "../../components/custumerForm/custumerForm";
import ClientList from "../../components/listaClientes/clientList";
import type { Client, Transaction } from "../../types/clients";

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

const Home = ({
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
    <>
      <h1>Controle de Dívidas</h1>

      <CustumerForm onAddClient={onAddClient} />

      <ClientList
        clients={clients}
        onMarkAsPaid={onMarkAsPaid}
        onDeleteClient={onDeleteClient}
        onUpdateValue={onUpdateValue}
        onAddTransaction={onAddTransaction}
      />

      <h2>Total a receber: R$ {totalPending.toFixed(2)}</h2>
      <h2>Total recebido: R$ {totalPaid.toFixed(2)}</h2>
    </>
  );
};

export default Home;