import { createPortal } from 'react-dom';
import Button from './Button';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Fragment } from 'react';

const OrderDetailsDialog = ({ closeDialog }) => {
  const { cartState } = useContext(CartContext);
  return (
    <>
      {createPortal(
        <div className="fixed left-0 top-0 z-50 flex min-h-screen w-full items-center justify-center backdrop-blur">
          <div className="h-[400px] w-[800px] overflow-y-auto rounded-xl bg-background/75 [&::-webkit-scrollbar]:hidden">
            <div className="text-end">
              <Button
                className="text-center text-xl"
                variant={{ color: 'ghost' }}
                onClick={closeDialog}
              >
                X
              </Button>
            </div>

            <h3 className="texl-xl text-center font-bold">Pedido</h3>
            <div className="flex flex-col gap-3 px-2 py-4">
              {cartState.cart.map((item) => (
                <Fragment key={item.id}>
                  <div className="flex items-center gap-2 text-sm">
                    <img
                      src={item.imgUrl}
                      alt={item.name}
                      className="h-[150px] w-[200px] rounded-lg"
                    />
                    <div>
                      <p>{item.name}</p>
                      <p>Quantidade: {item.quantity}</p>
                      <p>Preco: {item.price}R$</p>
                    </div>
                  </div>
                  <div className="border-b-2 border-accent opacity-15"></div>
                </Fragment>
              ))}

              <p className="text-end font-semibold">
                Total: {cartState.total.toFixed(2)}R$
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default OrderDetailsDialog;
