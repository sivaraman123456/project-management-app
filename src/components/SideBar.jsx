

const SideBar = ({onSelected}) => {
  return (
    <aside className="bg-black w-1/3 py-16 px-8 text-white md:w-72 rounded-r-xl h-screen">
    <h2 className="mb-8 text-2xl font-bold uppercase ">Your Project</h2>
    <div>
        <button className="px-4 py-2 text-xs md:text-xl bg-stone-700 text-stone-400 rounded-md hover:text-stone-100 hover:bg-stone-500" onClick={onSelected}> + Add Project</button>
    </div>
    <ul></ul>
</aside>

  )
}

export default SideBar
