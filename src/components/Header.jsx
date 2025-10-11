import { LiaHamburgerSolid } from 'react-icons/lia';
import Navbar from './Navbar';
const Header = () => {
  return (
    <header className="flex justify-between bg-white items-center h-12 w-full px-2 sticky top-0 left-0 z-30">
      <div className="flex">
        <LiaHamburgerSolid className="text-4xl" />
        <h1 className="text-primary font-bold text-2xl">Burguermino</h1>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
