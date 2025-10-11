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
      className={`cursor-pointer font-semibold ${getVariantResponsive()} rounded-md transition`}
    >
      {children}
    </Link>
  );
};

export default HyperLink;
