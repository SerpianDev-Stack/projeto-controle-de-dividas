import type { Client } from "../../App";

type Props = {
  clients: Client[];
  onMarkAsPaid: (id: number) => void;
};

const ClientList = ({ clients, onMarkAsPaid }: Props) => {
  return (
    <ul>
      {clients.map((client) => (
        <li key={client.id}>
          {client.name} - R$ {client.value}
          {!client.paid && (
            <button onClick={() => onMarkAsPaid(client.id)}>
              Marcar como pago
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ClientList;
