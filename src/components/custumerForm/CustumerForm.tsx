type Props = {
  onAddClient: (name: string, value: number) => void;
};

const CustumerForm = ({ onAddClient }: Props) => {
  return (
    <>
      <input placeholder="Nome" />
      <input placeholder="Valor" type="number" />
      <button>Adicionar</button>
    </>
  );
};

export default CustumerForm; 