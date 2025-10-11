import { Link } from 'react-router';

const HyperLink = ({ to, children }) => {
  const getVariantResponsive = () => {
    if (window.innerWidth <= 768) {
      return 'hover:text-accent/75 text-lg';
    } else {
      return 'hover:text-accent/50';
    }
  };

  return (
    <Link
      to={to}
      className={`font-semibold cursor-pointer ${getVariantResponsive()} transition rounded-md`}
    >
      {children}
    </Link>
  );
};

export default HyperLink;
