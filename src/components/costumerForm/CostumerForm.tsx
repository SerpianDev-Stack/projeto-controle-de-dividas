type Props = {
  onAddClient: (name: string, value: number) => void;
};

const CostumerForm = ({ onAddClient }: Props) => {
  return (
    <>
      <input placeholder="Nome" />
      <input placeholder="Valor" type="number" />
      <button>Adicionar</button>
    </>
  );
};

export default CostumerForm; 