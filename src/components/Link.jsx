const Link = ({ href, children }) => {
  return (
    <a
      href={href}
      className="font-semibold cursor-pointer hover:text-secondary/50 transition rounded-md"
    >
      {children}
    </a>
  );
};

export default Link;
