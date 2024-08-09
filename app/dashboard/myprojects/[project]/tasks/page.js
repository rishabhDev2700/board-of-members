"use client"
import { Card, CardTitle, CardContent } from '@/components/ui/card'
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import {  Dialog,  DialogContent,  DialogDescription,  DialogFooter,  DialogHeader,  DialogTitle,  DialogTrigger} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from '@/components/ui/textarea'
import { Plus } from 'lucide-react'
import { Separator } from '@/components/ui/separator'
export default function Page() {
    const [tasks, setTasks] = useState([])
    return (
        <main>
            <Card className="lg:w-1/3 lg:my-4 lg:mx-auto p-2 dark:bg-neutral-900 shadow-md shadow-black/20">
                <CardTitle className="text-xl p-2">Project tasks</CardTitle>
                <Separator/>
                <CardContent>
                    {tasks.length!==0?tasks.map((t)=><Card>
                        <CardTitle></CardTitle>
                    </Card>):<div className='text-center'>No Task to show</div>}
                </CardContent>
            </Card>
            <Dialog>
      <DialogTrigger asChild className='place-items-end'>
        <Button variant="outline" className="m-4"><Plus/> Task</Button>
      </DialogTrigger>
      <DialogContent className="mx-auto w-[95vw] rounded-md">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
           Add Task
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              defaultValue="Title of the task"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              defaultValue="Description of the task"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="deadline" className="text-right">
              Deadline
            </Label>
            <Input
              id="deadline"
              type="datetime-local"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="note" className="text-right">
              Note
            </Label>
            <Textarea
              id="note"
              placeholder="Extra information"
              className="col-span-3"
            />
          </div>         
          <Button type="submit">Add Task</Button>
        </form>
      </DialogContent>
    </Dialog>
        </main>
    )
}
