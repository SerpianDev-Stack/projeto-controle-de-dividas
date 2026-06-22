import { useState } from "react";

type Props = {
  onAddClient: (name: string, value: number) => void;
};

const CustumerForm = ({ onAddClient }: Props) => {
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = () => {
    if (!name || !value) return;

    onAddClient(name, Number(value));

    setName("");
    setValue("");
  };

  return (
    <>
      <input
        placeholder="Nome"
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setName(e.target.value)
        }
      />
      <input
        placeholder="Valor"
        type="number"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
      <button onClick={handleSubmit}>Adicionar</button>
    </>
  );
};

export default CustumerForm;
