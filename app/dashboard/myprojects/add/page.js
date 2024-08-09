"use client"
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
    const [loading,setLoading] = useState(false)
    const router = useRouter()
    const postData = (data) => {
        setLoading(true)
        console.log(data)
        setLoading(false)
        router.push("dashboard/myprojects/43235/team")
    }
    return (
        <main className='p-2'>

            <Card className="m-2 p-2 dark:bg-neutral-900 shadow-md shadow-black/20 lg:w-1/3 lg:mx-auto lg:mt-12 dark:border-2 dark:border-white/40">
                <CardHeader className="text-2xl font-semibold text-center"><span>New Project</span></CardHeader>
                <Separator />
                <CardContent className="mt-4 font-light w-full">
                    <form onSubmit={handleSubmit(postData)} className='lg:px-12'>
                        <Label  htmlFor="title">Title</Label>
                        <Input className="my-2" id="title" type="text" {...register("title",{required:true})} />
                        <Label  htmlFor="description">Description</Label>
                        <Textarea className="my-2" id="description" type="text" {...register("description",{required:true})} />
                        <Label  htmlFor="startdate">Start Date</Label>
                        <Input className="my-2" id="startdate" type="datetime-local" {...register("startdate",{required:true})} />
                        <Label  htmlFor="enddate">End Date</Label>
                        <Input className="my-2" id="enddate" type="datetime-local" {...register("enddate",{required:true})}/>
                        <Button disabled={loading} className="mt-4 lg:w-1/2 h-12" type="submit">{loading?<Loader2 className='animate-spin' />:"Create project"}</Button>
                    </form>
                </CardContent>
            </Card>
        </main>
    )
}
