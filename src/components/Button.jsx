

// eslint-disable-next-line react/prop-types
const Button = ({children, ...props }) => {
  return (
    <div className="px-4 py-2 text-xs md:text-xl bg-stone-700 text-stone-400 rounded-md hover:text-stone-100 hover:bg-stone-500" {...props} >
      {children}
    </div>
  );
};

export default Button;
