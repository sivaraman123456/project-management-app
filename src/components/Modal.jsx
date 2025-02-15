import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

// eslint-disable-next-line react/display-name
const Modal = forwardRef(({ children }, ref) => {
  const dialog = useRef();
  useImperativeHandle(ref, () => ({
    open() {
      dialog.current?.showModal();
    },
  }));

  return createPortal(
    <dialog
      ref={dialog}
      className="px-10 py-4 text-center backdrop:bg-stone-900/90 rounded-sm shadow-md  m-auto"
    >
      {children}
      <form method="dialog" className="mt-5 text-right">
        <button className="text-xl text-white bg-stone-600 hover:bg-stone-400 hover:text-stone-700 font-bold px-4 py-1 rounded-md ">
          Close
        </button>
      </form>
    </dialog>,
    document.getElementById("modal-popup")
  );
});

export default Modal;
