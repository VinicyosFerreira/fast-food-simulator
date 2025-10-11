import { RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';
import HyperLink from './HyperLink';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {!isOpen && (
        <RxHamburgerMenu
          className="cursor-pointer text-xl md:hidden"
          onClick={toggleMenu}
        />
      )}
      <nav
        className={`space-x-5 ${!isOpen ? 'hidden' : 'flex'} fixed right-0 top-0 z-10 h-[100vh] w-[45%] flex-col items-end gap-2 bg-primary px-2 text-foreground md:static md:flex md:h-auto md:w-full md:flex-row md:bg-transparent md:text-primary`}
      >
        <span
          onClick={toggleMenu}
          className="cursor-pointer p-2 text-lg transition hover:hover:text-accent/75 md:hidden"
        >
          X
        </span>
        <HyperLink to="/">Home</HyperLink>
        <HyperLink to="/menu">Cardápio</HyperLink>
        <HyperLink to="/orders">Pedidos</HyperLink>
      </nav>
    </div>
  );
};

export default Navbar;
