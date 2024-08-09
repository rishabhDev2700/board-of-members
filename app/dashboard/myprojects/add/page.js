"use client"
import ProjectForm from '@/components/custom/project-form'
import TaskCreator from '@/components/custom/task-creator'
import TeamSelector from '@/components/custom/team-selector'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'
import { Loader2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Page() {
    const { register, handleSubmit } = useForm()
    const { data, setData } = useState({
        title: "",
        description: "",
        startdate: "",
        enddate: "",
    })
    const [loading, setLoading] = useState(false)
    const [formIndex, setFormIndex] = useState(0)
    const router = useRouter()
    const postData = (data) => {
        setLoading(true)
        console.log(data)
        setLoading(false)
        router.push("dashboard/myprojects/43235/team")
    }
    const formComponents = [
        <ProjectForm data={data} setData={setData} />,
        <TeamSelector data={data} setData={setData} />,
        <TaskCreator data={data} setData={setData} />
    ]
    return (
        <main className='p-2'>
            {formComponents[formIndex]}
            <div className='md:w-1/3 mx-auto flex justify-between py-8 px-2'>
                <Button disabled={formIndex === 0} onClick={() => setFormIndex(formIndex - 1)}>Previous</Button>
                <Button disabled={formIndex === 2} onClick={() => setFormIndex(formIndex + 1)}>Next</Button>
            </div>

        </main>
    )
}
