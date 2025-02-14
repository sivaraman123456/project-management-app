

// eslint-disable-next-line react/prop-types
const SideBar = ({onSelected,title}) => {
  console.log("title:",title);
  
  return (
    <aside className="bg-black w-1/3 py-16 px-8 text-white md:w-72 rounded-r-xl h-screen">
    <h2 className="mb-8 text-2xl font-bold uppercase ">Your Project</h2>
    <div>
        <button className="px-4 py-2 text-xs md:text-xl bg-stone-700 text-stone-400 rounded-md hover:text-stone-100 hover:bg-stone-500" onClick={onSelected}> + Add Project</button>
    </div>
    <ul>
      {title.length > 0 && title.map((data)=>{
         let classCss = `px-2 py-1  text-md text-left  hover:bg-stone-600 w-full rounded-md my-3 bg-stone-800  text-stone-200`;
      return  <li key={data.id} className={classCss}>{data.title}</li>
      })}
    </ul>
</aside>

  )
}

export default SideBar
