import Button from './Button';

const EmptyCart = () => {
  return (
    <div className="mt-20 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-3">
        <h2 className="text-2xl font-semibold">O carrinho está vazio</h2>
        <Button variant={{ type: 'link' }} to="/menu">
          Ir para o cardápio
        </Button>
      </div>
    </div>
  );
};

export default EmptyCart;
