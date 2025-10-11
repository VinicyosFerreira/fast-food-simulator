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
          className="md:hidden cursor-pointer text-xl"
          onClick={toggleMenu}
        />
      )}
      <nav
        className={`space-x-5 ${!isOpen ? 'hidden' : 'flex'} 
        md:flex md:static md:flex-row md:bg-transparent md:w-full md:h-auto bg-primary fixed
         right-0 top-0 w-[45%] h-[100vh] flex-col z-10 text-foreground md:text-primary px-2 items-end gap-2
       `}
      >
        <span
          onClick={toggleMenu}
          className="md:hidden text-lg cursor-pointer p-2 hover:hover:text-accent/75 transition"
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
