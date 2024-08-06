import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <div className='lg:w-2/4 mx-auto flex justify-center items-center p-4'>
        <Button className="mx-4">Project</Button>
        <Button className="mx-4">Task</Button>
        <Button className="mx-4">Team</Button>
    </div>
  )
}
