import Button from '../components/Button';
import Input from './Input';

const CustomerData = ({ nextStep, prevStep, handleFields, fields }) => {
  return (
    <div className="mx-auto flex w-[450px] flex-col items-center justify-center gap-2 rounded-md bg-foreground/10 p-5">
      <Input
        label="Nome"
        type="text"
        id="name"
        name="name"
        value={fields.name}
        placeholder="Digite seu nome"
        onChange={(e) => handleFields('name', e.target.value)}
      />

      <Input
        label="CPF"
        type="text"
        id="cpf"
        value={fields.cpf}
        name="cpf"
        placeholder="Digite seu CPF"
        onChange={(e) => handleFields('cpf', e.target.value)}
      />

      <Input
        label="CEP"
        type="text"
        id="cep"
        value={fields.cep}
        name="cep"
        placeholder="Digite seu CEP"
        onChange={(e) => handleFields('cep', e.target.value)}
      />

      <div className="flex w-full gap-2">
        <Input
          label="Endereço"
          type="text"
          id="address"
          width="w-[70%]"
          value={fields.address}
          name="address"
          placeholder="Digite seu endereço"
          onChange={(e) => handleFields('address', e.target.value)}
        />

        <Input
          label="Número"
          type="text"
          width="w-[30%]"
          value={fields.number}
          id="number"
          name="number"
          onChange={(e) => handleFields('number', e.target.value)}
          placeholder="Número"
        />
      </div>

      <div className="mt-2 flex w-full items-center justify-between">
        <Button onClick={() => nextStep()} className="w-[200px]">
          Avançar
        </Button>
        <Button onClick={() => prevStep()} className="w-[200px]">
          Voltar
        </Button>
      </div>
    </div>
  );
};

export default CustomerData;
