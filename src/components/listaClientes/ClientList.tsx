import type { Client } from "../../App";

type Props = {
  clients: Client[];
};

const ClientList = ({ clients }: Props) => {
  return (
    <ul>
      {clients.map((client) => (
        <li key={client.id}>
          {client.name} - R$ {client.value}
        </li>
      ))}
    </ul>
  );
};

export default ClientList;