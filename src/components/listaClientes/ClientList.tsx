import type { Client } from "../../App";

type Props = {
  clients: Client[];
  onMarkAsPaid: (id: number) => void;
  onDeleteClient: (id: number) => void;
};

const ClientList = ({ clients, onMarkAsPaid, onDeleteClient }: Props) => {
  const pendingClients = clients.filter((client) => !client.paid);
  const paidClients = clients.filter((client) => client.paid);

  return (
    <>
      <h2>Clientes Pendentes</h2>
      <ul>
        {pendingClients.map((client) => (
          <li key={client.id}>
            {client.name} - R$ {client.value}
            {!client.paid && (
              <div>
                <button onClick={() => onMarkAsPaid(client.id)}>
                  Marcar como pago
                </button>
                <button onClick={() => onDeleteClient(client.id)}>
                  Excluir
                </button>
              </div>
            )}
          </li>
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
