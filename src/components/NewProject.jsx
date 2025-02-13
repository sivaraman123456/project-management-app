import { useRef } from "react";
import Input from './Input'
// eslint-disable-next-line react/prop-types
const NewProject = ({onCancel}) => {
const title = useRef()
const description = useRef()
const dueDate = useRef()

const handleSave = () => {
  console.log('handleSave');
  
  const title2 = title.current.value;
  const des = description.current.value;
  const dueDate2 = dueDate.current.value;

  console.log({title2,des,dueDate2});
  
}

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex justify-end gap-8 items-center">
        <li>
          <button className="bg-black hover:bg-stone-400 px-[20px] py-[8px] rounded-md text-white" onClick={onCancel}>Cancel </button>
        </li>
        <li>
          <button className="bg-black hover:bg-stone-400 px-[20px] py-[8px] rounded-md text-white" onClick={handleSave} >Save</button>
        </li>
      </menu>
      <Input type="text" ref={title} label="title" />
      <Input label="Description" ref={description} textarea />
      <Input type="date" ref={dueDate} label="Due Date" />
    </div>
  );
};

export default NewProject;
