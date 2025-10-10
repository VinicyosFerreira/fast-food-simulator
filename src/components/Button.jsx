const Button = ({ children }) => {
  return (
    <button
      className="my-3 p-3 rounded-lg w-[280px] text-foreground text-sm 
        font-semibold hover:bg-accent transition bg-primary"
    >
      {children}
    </button>
  );
};

export default Button;
