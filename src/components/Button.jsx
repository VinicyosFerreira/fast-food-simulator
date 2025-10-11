const Button = ({ children }) => {
  return (
    <button className="my-3 rounded-lg bg-primary p-3 text-sm font-semibold text-foreground transition hover:bg-accent md:w-[280px]">
      {children}
    </button>
  );
};

export default Button;
