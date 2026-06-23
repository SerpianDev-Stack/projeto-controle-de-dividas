import { useState } from "react";
import type { Client } from "../../App";

type Props = {
  client: Client;
  onMarkAsPaid: (id: number) => void;
  onDeleteClient: (id: number) => void;
  onUpdateValue: (id: number, value: number) => void;
};

const ClientItem = ({
  client,
  onMarkAsPaid,
  onDeleteClient,
  onUpdateValue,
}: Props) => {
  const [newValue, setNewValue] = useState(client.value.toString());

  const handleUpdate = () => {
    onUpdateValue(client.id, Number(newValue));
  };

  return (
      <li>
        {client.name} - R$ {client.value}
        <input
          type="number"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
        <button onClick={handleUpdate}>Atualizar</button>
        {!client.paid && (
          <button onClick={() => onMarkAsPaid(client.id)}>Pagar</button>
        )}
        <button onClick={() => onDeleteClient(client.id)}>Deletar</button>
      </li>
  );
};

export default ClientItem;
