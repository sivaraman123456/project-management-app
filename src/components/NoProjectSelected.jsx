import  EmptyProject from '../assets/no-projects.png'
import Button from './Button'


// eslint-disable-next-line react/prop-types
export const NoProjectSelected = ({onSelected}) => {
  return (
    <div className=' text-center flex flex-col  items-center w-full leading-[50px] mt-16'>
        <img src={EmptyProject} alt="Empty project " className='w-[100px] h-[100px]'/>
<h2 className='font-bold text-stone-600 text-xl mt-3'>No Project Selected</h2>

<p className='my-5 font-semibold text-stone-400'>Select a project or get start a new one </p>
<Button onClick={onSelected}>Create Project</Button>
</div>
  )
}
