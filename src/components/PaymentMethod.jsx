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
          checked={fields.paymentMethod === 'pix'}
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
          checked={fields.paymentMethod === 'card'}
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
          checked={fields.paymentMethod === 'money'}
          onChange={(e) => handleFields('paymentMethod', e.target.value)}
        />
      </div>

      {fields?.paymentMethod === 'card' && (
        <div className="flex flex-col gap-2">
          <Input
            type="text"
            id="card-number"
            label="Número do cartão"
            value={fields.cardNumber}
            name="card-number"
            placeholder="Digite o número do cartão"
            onChange={(e) => handleFields('cardNumber', e.target.value)}
          />

          <Input
            type="text"
            id="card-holder"
            name="card-holder"
            label="Titular do cartão"
            value={fields.cardHolder}
            placeholder="Digite o titular do cartão"
            onChange={(e) => handleFields('cardHolder', e.target.value)}
          />

          <div className="flex w-full gap-2">
            <Input
              label="Data de vencimento"
              type="date"
              id="expiration-date"
              width="w-[70%]"
              value={fields.expirationDate}
              name="expiration-date"
              onChange={(e) =>
                handleFields('cardExpirationDate', e.target.value)
              }
              placeholder="Data de vencimento"
            />

            <Input
              label="CVV"
              type="text"
              width="CVV"
              id="card-cvv"
              value={fields.cardCvv}
              name="card-cvv"
              onChange={(e) => handleFields('cardCvv', e.target.value)}
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
