import { FaPix } from 'react-icons/fa6';
import { BsCreditCard2BackFill } from 'react-icons/bs';
import { GiMoneyStack } from 'react-icons/gi';
import Input from './Input';
import Button from '../components/Button';

const PaymentMethod = ({ prevStep, handleFields, fields }) => {
  return (
    <div className="mx-auto flex w-[450px] flex-col gap-2 rounded-md bg-foreground/10 p-5">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <FaPix className="text-2xl text-green-700" />
          <label htmlFor="pix">Pix</label>
        </div>
        <input
          type="radio"
          id="pix"
          name="payment-methods"
          value={'pix'}
          className="size-4"
          onChange={(e) => handleFields('paymentMethod', e.target.value)}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <BsCreditCard2BackFill className="text-2xl text-blue-800" />
          <label htmlFor="credit-card">Cartão de crédito</label>
        </div>
        <input
          type="radio"
          id="credit-card"
          value={'card'}
          name="payment-methods"
          className="size-4"
          onChange={(e) => handleFields('paymentMethod', e.target.value)}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <GiMoneyStack className="text-2xl text-green-800" />
          <label htmlFor="money">Dinheiro</label>
        </div>
        <input
          type="radio"
          id="money"
          value={'money'}
          name="payment-methods"
          className="size-4"
          onChange={(e) => handleFields('paymentMethod', e.target.value)}
        />
      </div>

      {fields?.paymentMethod === 'card' && (
        <div className="flex flex-col gap-2">
          <Input
            type="text"
            id="card-number"
            label="Número do cartão"
            name="card-number"
            placeholder="Digite o número do cartão"
            onChange={(e) => handleFields('card-number', e.target.value)}
          />

          <Input
            type="text"
            id="card-holder"
            name="card-holder"
            label="Titular do cartão"
            placeholder="Digite o titular do cartão"
            onChange={(e) => handleFields('owner-card', e.target.value)}
          />

          <div className="flex w-full gap-2">
            <Input
              label="Data de vencimento"
              type="date"
              id="expiration-date"
              width="w-[70%]"
              name="expiration-date"
              onChange={(e) => handleFields('expiration-date', e.target.value)}
              placeholder="Data de vencimento"
            />

            <Input
              label="CVV"
              type="text"
              width="CVV"
              id="card-cvv"
              name="card-cvv"
              onChange={(e) => handleFields('card-cvv', e.target.value)}
              placeholder="CVV"
            />
          </div>
        </div>
      )}

      <div className="mt-2 flex w-full items-center justify-between">
        <Button className="w-[200px]" type="submit">
          Concluir compra
        </Button>
        <Button className="w-[200px]" onClick={() => prevStep()}>
          Voltar
        </Button>
      </div>
    </div>
  );
};

export default PaymentMethod;
