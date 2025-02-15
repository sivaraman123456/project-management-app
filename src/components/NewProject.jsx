import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onCancel, onAdd }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  
  const modal =useRef()
  const handleSave = () => {
    console.log("handleSave");

    const title2 = title.current?.value;
    const des = description.current?.value;
    const dueDate2 = dueDate.current?.value;

    console.log({ title2, des, dueDate2 });
    if(title2.trim() === '' || des.trim() === '' || dueDate2.trim() === ''){
modal.current.open()
return
    }
    onAdd({ title: title2, description: des, dueDate: dueDate2 });
  };

  return (
    <>
    <Modal ref={modal} >
    <p className="text-red-600 text-xl font-semibold ">Validation Error....!</p>
      <p  className="font-bold text-stone-700 text-xl mt-3">OOP's.... you forgot to fill the inputs!</p>
      <p className="font-bold text-stone-700 text-xl mt-3">To make sure the fields are fill</p>
    </Modal>
    <div className="w-[35rem] mt-16">
      <menu className="flex justify-end gap-8 items-center">
        <li>
          <button
            className="bg-black hover:bg-stone-400 px-[20px] py-[8px] rounded-md text-white"
            onClick={onCancel}
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            className="bg-black hover:bg-stone-400 px-[20px] py-[8px] rounded-md text-white"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <Input type="text" ref={title} label="Title" />
      <Input label="Description" ref={description} textarea />
      <Input type="date" ref={dueDate} label="Due Date" />
    </div>
    </>
  );
};

export default NewProject;
