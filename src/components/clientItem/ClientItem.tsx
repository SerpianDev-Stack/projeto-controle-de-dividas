import { useState } from "react";
import type { Client } from "../../types/clients";
import type { Transaction } from "../../types/clients";
import { Link } from "react-router-dom";

type Props = {
  client: Client;
  onMarkAsPaid: (id: number) => void;
  onDeleteClient: (id: number) => void;
  onUpdateValue: (id: number, value: number) => void;
  onAddTransaction: (clientId: number, transaction: Transaction) => void;
};

const ClientItem = ({
  client,
  onMarkAsPaid,
  onDeleteClient,
  onUpdateValue,
  onAddTransaction,
}: Props) => {
  const [newValue, setNewValue] = useState(client.value.toString());
  const [transactionValue, setTransactionValue] = useState("");

  const handleUpdate = () => {
    onUpdateValue(client.id, Number(newValue));
  };

  const handleAddDebt = () => {
    if (!transactionValue) return;

    onAddTransaction(client.id, {
      id: Date.now(),
      value: Number(transactionValue),
      type: "debt",
      description: "Nova dívida",
      date: new Date().toISOString(),
    });

    setTransactionValue("");
  };

  const handleAddPayment = () => {
    if (!transactionValue) return;

    onAddTransaction(client.id, {
      id: Date.now(),
      value: Number(transactionValue),
      type: "payment",
      description: "Pagamento",
      date: new Date().toISOString(),
    });

    setTransactionValue("");
  };

  return (
    <li>
      <Link to={`/clientes/${client.id}`}>{client.name}</Link> - R$ {client.value.toFixed(2)}
      <input
        type="number"
        value={newValue}
        onChange={(e) => setNewValue(e.target.value)}
      />
      <button onClick={handleUpdate}>Atualizar</button>
      <input
        type="number"
        placeholder="Valor da movimentação"
        value={transactionValue}
        onChange={(e) => setTransactionValue(e.target.value)}
      />
      <button onClick={handleAddDebt}>Adicionar dívida</button>
      <button onClick={handleAddPayment}>Registrar pagamento</button>
      {!client.paid && (
        <button onClick={() => onMarkAsPaid(client.id)}>Pagar</button>
      )}
      <button onClick={() => onDeleteClient(client.id)}>Deletar</button>
    </li>
  );
};

export default ClientItem;
