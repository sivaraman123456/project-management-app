import NewTask from "./NewTask";

const SelectedProject = ({project,onDelete,onAdd,tasks}) => {
    console.log("project>>>",project);
    
  return (
    <div className="w-[500px] mt-6 py-4 leading-10">
    <div className="flex justify-between items-center ">
      <header className="text-2xl font-bold text-amber-950">
        {project?.title}
      </header>
      <button
        className="px-1  bg-stone-500 text-white font-bold rounded-md hover:bg-stone-300 hover:text-stone-600"
      onClick={onDelete}
      >
        Delete
      </button>
    </div>
    <p className="text-stone-500 ">{project?.dueDate}</p>
    <p>{project?.description}</p>
    <hr />
<NewTask onAdd={onAdd} tasks={tasks}/>
   
  </div>
  )
}

export default SelectedProject
