import { Input } from "./Input";

const NewProject = () => {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex justify-end gap-8 items-center">
        <li>
          <button className="bg-black hover:bg-stone-400 px-[20px] py-[8px] rounded-md text-white">Cancel </button>
        </li>
        <li>
          <button className="bg-black hover:bg-stone-400 px-[20px] py-[8px] rounded-md text-white">Save</button>
        </li>
      </menu>
      <Input label="title" />
      <Input label="Description" textarea />
      <Input label="Due Date" />
    </div>
  );
};

export default NewProject;
