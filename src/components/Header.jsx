import { LiaHamburgerSolid } from 'react-icons/lia';
import Navbar from './Navbar';
const Header = () => {
  return (
    <header className="sticky left-0 top-0 z-30 flex h-12 w-full items-center justify-between bg-white px-2">
      <div className="flex">
        <LiaHamburgerSolid className="text-4xl" />
        <h1 className="text-2xl font-bold text-primary">Burguermino</h1>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
