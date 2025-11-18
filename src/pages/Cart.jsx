import Cart from '../components/Cart';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CartPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">
        <Cart />
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
