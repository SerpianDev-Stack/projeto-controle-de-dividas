import { useState } from "react";
import type { Client } from "../../types/clients";
import type { Transaction } from "../../types/clients";
import { Link } from "react-router-dom";

type Props = {
  client: Client;
  onDeleteClient: (id: number) => void;
  onAddTransaction: (clientId: number, transaction: Transaction) => void;
};

const ClientItem = ({ client, onDeleteClient, onAddTransaction }: Props) => {
  const [transactionValue, setTransactionValue] = useState("");

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

  const handlePayAll = () => {
    if (client.value <= 0) return;

    onAddTransaction(client.id, {
      id: Date.now(),
      value: client.value,
      type: "payment",
      description: "Quitação da dívida",
      date: new Date().toISOString(),
    });
  };

  return (
    <li>
      <Link to={`/clientes/${client.id}`}>{client.name}</Link> - R${" "}
      {client.value.toFixed(2)}
      <input
        type="number"
        placeholder="Valor da movimentação"
        value={transactionValue}
        onChange={(e) => setTransactionValue(e.target.value)}
      />
      <button onClick={handleAddDebt}>Adicionar dívida</button>
      <button onClick={handleAddPayment}>Registrar pagamento</button>
      {!client.paid && !client.paid && (
        <button onClick={handlePayAll}>Quitar</button>
      )}
      <button onClick={() => onDeleteClient(client.id)}>Deletar</button>
    </li>
  );
};

export default ClientItem;
