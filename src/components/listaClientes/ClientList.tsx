import type { Client } from "../../App";
import ClientItem from "../clientItem/ClientItem";

type Props = {
  clients: Client[];
  onMarkAsPaid: (id: number) => void;
  onDeleteClient: (id: number) => void;
  onUpdateValue: (id: number, newValue: number) => void;
};

const ClientList = ({
  clients,
  onMarkAsPaid,
  onDeleteClient,
  onUpdateValue,
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
          />
        ))}
      </ul>

      <h2>Clientes Pagos</h2>

      <ul>
        {paidClients.map((client) => (
          <li key={client.id}>
            {client.name} - R$ {client.value}
            <button onClick={() => onDeleteClient(client.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ClientList;
