

export const Input = ({label,textarea,props}) => {
    console.log({...props});
     const clasess='bg-stone-300 border-b-2 w-full rounded-sm focus:border-stone-600 focus:outline-none  border-stone-300 p-1 px-2 '
  return (
    <div className="flex flex-col ">
        <label className="p-4 uppercase text-sm">{label}</label>
        {textarea ? <textarea {...props} className={clasess} /> : <input {...props} className={clasess}/>}
    </div>
  )
}
