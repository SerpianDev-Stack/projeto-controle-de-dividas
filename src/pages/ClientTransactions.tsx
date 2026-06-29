import { Link, useParams } from "react-router-dom";
import type { Client } from "../types/clients";

type Props = {
  clients: Client[];
};

const ClientTransactions = ({ clients }: Props) => {
  const { id } = useParams<{ id: string }>();

  const client = clients.find((c) => c.id === Number(id));

  if (!client) {
    return (
      <div>
        <p>Cliente não encontrado.</p>
        <Link to="/">Voltar</Link>
      </div>
    );
  }

  const lastTransactions = client.transactions.slice(-10).reverse();

  return (
    <div>
      <Link to="/">Voltar</Link>

      <h1>{client.name}</h1>
      <p>Saldo atual: R$ {client.value.toFixed(2)}</p>

      <h2>Últimas 10 movimentações</h2>

      <ul>
        {lastTransactions.map((transaction) => {
          const formattedDate = new Date(transaction.date).toLocaleString(
            "pt-BR",
            {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            },
          );

          return (
            <li key={transaction.id}>
              {transaction.type === "debt" ? "Dívida" : "Pagamento"} - R${" "}
              {transaction.value.toFixed(2)} - {transaction.description} -{" "}
              {formattedDate}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ClientTransactions;
