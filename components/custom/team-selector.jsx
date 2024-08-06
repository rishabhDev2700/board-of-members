"use client"
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'


const users = [
    { email: "alice@example.com", name: "Alice" },
    { email: "bob@example.com", name: "Bob" },
    { email: "carol@example.com", name: "Carol" },
    { email: "dave@example.com", name: "Dave" },
    { email: "eve@example.com", name: "Eve" }
];


export default function TeamSelector() {
    const { register, handleSubmit } = useForm()
    const [team, setTeam] = useState([])
    const [task, setTask] = useState([])
    const [result, setResult] = useState([])
    const filterUsers = (text)=> users.filter((e)=>e.email.startsWith(text))
    const findUser = (data)=>{
        const users =   filterUsers(data.email)
        setResult(users)
    }
    const removeUserFromTeam = (email) => {
        setTeam((prevTeam) => prevTeam.filter((user) => user.email !== email))
    }
    const addUserToTeam = (user) => {
        setTeam((prevTeam) => [...prevTeam, user])
        setResult([])  // Clear the results after adding the user
    }
    return (
        <div className='p-2 lg:p-8 flex flex-col items-center'>
        <Card className="lg:w-3/5 p-1 lg:p-2 w-full dark:bg-neutral-900 dark:text-white dark:border-2 dark:border-white/40">
            <CardTitle className="p-4 lg:p-2">Team</CardTitle>
            <CardContent className="p-1 lg:p-4">
                <ScrollArea className="h-[30vh] flex flex-wrap shadow-inner shadow-black/20 p-2 rounded-md">
                {team.length!==0?team.map((t, index) => (
                            <Card key={index} className="flex justify-between items-center my-2 p-4 shadow-md shadow-black/20 rounded">
                                <span>{t.email}</span>
                                <span>{t.name}</span>
                                <Button variant="outline" onClick={() => removeUserFromTeam(t.email)}>Delete</Button>
                            </Card>
                        )):<div className='font-ligth text-gray-500'>Add Users to the team</div>}
                </ScrollArea>
            </CardContent>
        </Card>

        <form className='w-full lg:w-1/3 my-4' onSubmit={handleSubmit(findUser)}>
            <Label className="w-full" htmlFor="user-mail">Search User by Email</Label>
            <Input className="w-full mt-4" id="user-mail" type="text" {...register("email")} placeholder="Search Email" />
            <Button className="my-4 w-full h-12" type="submit">Find</Button>
        </form>

          <Card className="lg:w-3/5 p-1 lg:p-2 w-full dark:bg-neutral-900 dark:text-white dark:border-2 dark:border-white/40">
            <CardTitle className="p-4 lg:p-2">Team</CardTitle>
            <CardContent className="p-1 lg:p-4">
                <ScrollArea className="h-[30vh] flex flex-wrap shadow-inner shadow-black/20 p-2 rounded-md">
                {result.length !== 0 ? result.map((i, index) => (
                        <Button
                            key={index}
                            variant="outline"
                            onClick={() => addUserToTeam(i)}
                            className="m-1 w-full"
                        >
                            {i.email}
                        </Button>
                    )) : <div className='font-ligth text-gray-500'>Enter Email above to find users</div>}
                </ScrollArea>
            </CardContent>
        </Card>
    </div>
    )

}
