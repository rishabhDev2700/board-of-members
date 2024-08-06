"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';
import Link from "next/link";
import { Separator } from '@/components/ui/separator';
import dynamic from 'next/dynamic'
const ProjectTimeline = dynamic(() => import('@/components/custom/project-timeline'), { ssr: false })

export default function Page() {
    return (
        <div className="text-center py-8 flex flex-wrap">
            <div className='grid grid-cols-2 mx-auto'>
                <Button className="m-2 w-32">
                    <Link className='flex items-center p-2' href="manager/add"><Plus />Project</Link>
                </Button>
                <Button className="m-2 w-32">
                    <Link className='flex items-center p-2' href="manager/add"><Plus />Team</Link>
                </Button>
                <Button className="m-2 w-32">
                    <Link className='flex items-center p-2' href="manager/add"><Plus />Task</Link>
                </Button>
                <Button className="m-2 w-32">
                    <Link className='flex items-center p-2' href="manager/add"><Plus />Event</Link>
                </Button>
            </div>
            {/* Show Projects */}
            <Card className='mx-4 my-4 w-full lg:grid lg:grid-cols-4 p-4 lg:my-4 lg:mx-8'>
                <CardHeader>
                    Projects
                </CardHeader>
                <Card className="">
                    <CardHeader>Deadline: xx/xx/xxxx</CardHeader>
                    <Separator/>
                    <CardContent className="py-4">
                        <CardTitle>Title of the project</CardTitle>
                        <CardDescription></CardDescription>
                    </CardContent>
                </Card>
            </Card>
            <ProjectTimeline/>
        </div>
    )
}
