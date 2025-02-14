import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Input = forwardRef(({ label, textarea, ...props }, ref) => {
  const classes =
    "bg-stone-300 border-b-2 w-full rounded-sm focus:border-stone-600 focus:outline-none border-stone-300 p-1 px-2";

  return (
    <div className="flex flex-col">
      <label className="p-4 uppercase text-sm">{label}</label>
      {textarea ? (
        <textarea {...props} className={classes} ref={ref} />
      ) : (
        <input {...props} className={classes} ref={ref} />
      )}
    </div>
  );
});

export default Input;
