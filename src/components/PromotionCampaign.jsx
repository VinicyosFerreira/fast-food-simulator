import Button from './Button';

const PromotionCampaign = () => {
  return (
    <div className="mx-8 my-12 w-[35%] space-y-2">
      <h2 className="text-xl text-primary font-semibold">
        Campanha de promoção
      </h2>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-secondary text-sm">
          Digite seu e-mail para receber nossas promoções exclusivas:{' '}
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Digite seu e-mail"
          className="border border-primary rounded-md p-2 outline-accent text-secondary"
        />
        <Button>Enviar</Button>
      </div>
    </div>
  );
};

export default PromotionCampaign;
