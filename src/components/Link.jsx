const Link = ({ href, children }) => {
  return (
    <a
      href={href}
      className="font-semibold hover:text-secondary/50 transition rounded-md cursor-pointer"
    >
      {children}
    </a>
  );
};

export default Link;
