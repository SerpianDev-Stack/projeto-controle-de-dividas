import type { Client } from "../../types/clients";
import ClientItem from "../clientItem/ClientItem";
import type { Transaction } from "../../types/clients";
import { Link } from "react-router-dom";

type Props = {
  clients: Client[];
  onMarkAsPaid: (id: number) => void;
  onDeleteClient: (id: number) => void;
  onUpdateValue: (id: number, newValue: number) => void;
  onAddTransaction: (clientId: number, transaction: Transaction) => void;
};

const ClientList = ({
  clients,
  onMarkAsPaid,
  onDeleteClient,
  onUpdateValue,
  onAddTransaction,
}: Props) => {
  const pendingClients = clients.filter((client) => !client.paid);
  const paidClients = clients.filter((client) => client.paid);

  return (
    <>
      <h2>Clientes Pendentes</h2>
      <ul>
        {pendingClients.map((client) => (
          <ClientItem
            key={client.id}
            client={client}
            onMarkAsPaid={onMarkAsPaid}
            onDeleteClient={onDeleteClient}
            onUpdateValue={onUpdateValue}
            onAddTransaction={onAddTransaction}
          />
        ))}
      </ul>

      <h2>Clientes Pagos</h2>

      <ul>
        {paidClients.map((client) => (
          <li key={client.id}>
            <Link to={`/clientes/${client.id}`}>{client.name}</Link> - R${" "}
            {client.value.toFixed(2)}
            <button onClick={() => onDeleteClient(client.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ClientList;
