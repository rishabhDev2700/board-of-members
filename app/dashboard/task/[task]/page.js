import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { ScrollArea } from '@/components/ui/scroll-area'

export default function TaskDetail() {
    return (
        <div className='lg:grid grid-cols-2 lg:w-1/2 lg:mx-auto'>
            <Card className="m-4 p-2 dark:bg-neutral-900 shadow-md shadow-black/20">
                <CardHeader className="text-2xl font-semibold"><div>Task</div></CardHeader>
                <Separator />
                <CardContent className="mt-4 font-light">
                    <CardTitle>Task title</CardTitle>
                    <CardDescription>Before running validators, Mongoose attempts to coerce values to the correct type. This process is called casting the document. If casting fails for a given path, the error.errors object will contain a CastError object. Casting runs before validation, and validation does not run if casting fails. That means your custom validators may assume v is null, undefined, or an instance of the type specified in your schema.</CardDescription>
                </CardContent>
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="notstarted">Not Started</SelectItem>
                        <SelectItem value="ongoing">Ongoing</SelectItem>
                        <SelectItem value="completed">Completed</SelectItem>
                        <SelectItem value="onhold">Onhold</SelectItem>
                    </SelectContent>
                </Select>

            </Card>
            <Card className='m-4 p-2 dark:bg-neutral-900 shadow-md shadow-black/20'>
                <CardTitle className="text-center my-2">Comments</CardTitle>

                <ScrollArea className="h-72 shadow-inner shadow-gray-500 rounded-md z-20 p-1">
                    <Card className="m-2 p-2 dark:bg-neutral-800 -z-20 shadow-md shadow-black/20">
                        <CardHeader className="font-semibold">By user</CardHeader>
                        <Separator />
                        <CardContent className="py-4">
                            <CardDescription>Information in detail</CardDescription>
                        </CardContent>
                    </Card>
                    <Card className="m-2 p-2 dark:bg-neutral-800 -z-20 shadow-md shadow-black/20">
                        <CardHeader className="font-semibold">By user</CardHeader>
                        <Separator />
                        <CardContent className="py-4">
                            <CardDescription>Information in detail</CardDescription>
                        </CardContent>
                    </Card>
                    <Card className="m-2 p-2 dark:bg-neutral-800 -z-20 shadow-md shadow-black/20">
                        <CardHeader className="font-semibold">By user</CardHeader>
                        <Separator />
                        <CardContent className="py-4">
                            <CardDescription>Information in detail</CardDescription>
                        </CardContent>
                    </Card>
                    <Card className="m-2 p-2 dark:bg-neutral-800 -z-20 shadow-md shadow-black/20">
                        <CardHeader className="font-semibold">By user</CardHeader>
                        <Separator />
                        <CardContent className="py-4">
                            <CardDescription>Information in detail</CardDescription>
                        </CardContent>
                    </Card>
                    <Card className="m-2 p-2 dark:bg-neutral-800 -z-20 shadow-md shadow-black/20">
                        <CardHeader className="font-semibold">By user</CardHeader>
                        <Separator />
                        <CardContent className="py-4">
                            <CardDescription>Information in detail</CardDescription>
                        </CardContent>
                    </Card>  <Card className="m-2 p-2 dark:bg-neutral-800 -z-20 shadow-md shadow-black/20">
                        <CardHeader className="font-semibold">By user</CardHeader>
                        <Separator />
                        <CardContent className="py-4">
                            <CardDescription>Information in detail</CardDescription>
                        </CardContent>
                    </Card>
                </ScrollArea>
            </Card>
            <Card className='col-span-2 m-4 px-8 pb-8 dark:bg-neutral-900 shadow-md shadow-black/30'>
                <CardTitle className="text-center my-4">Upload File</CardTitle>
                <Separator/>
                        <form>
                    <Label htmlFor="File" className="block my-4">File</Label>
                    <Input id="File" type="file" />
                        </form>
            </Card>
        </div>
    )
}
