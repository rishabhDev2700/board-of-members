"use client"
import { useForm } from "react-hook-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import bg from "@/assets/dark.svg"
import Image from "next/image";
export default function Home() {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <main className="grid lg:grid-cols-2 h-screen items-center lg:place-content-center lg:place-self-auto bg-gray-200">
      <div className="rounded-lg border m-4 px-8 pb-12 lg:m-12 bg-white shadow-lg shadow-black/20">

      <h2 className="text-center font-light pt-12 text-2xl lg:text-5xl uppercase">Master</h2>
      <Tabs defaultValue="login" className="flex flex-col ">
        <TabsList className="mx-auto bg-black mt-8">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>

        <TabsContent className="place-content-start" value="login">
          <form className="p-2 m-4 lg:w-1/2 mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor="email">Email</Label>
            <Input type="email" {...register("email", { required: true })} />
            <Label htmlFor="password">Password</Label>
            <Input type="password" {...register("password", { required: true })} />
            <Button className="mt-4" type="submit">Login</Button>
          </form>
        </TabsContent>
        <TabsContent className="place-content-start" value="register">
          <form className="p-2 m-4 lg:w-1/2 mx-auto" onSubmit={handleSubmit(onSubmit)}>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register("email", { required: true })} />
            <Label htmlFor="name">Name</Label>
            <Input id="name" type="text" {...register("name", { required: true })} />
            <Label htmlFor="confirm-password">Password</Label>
            <Input id="password" type="password" {...register("password", { required: true })} />
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input id="confirm-password" type="password" {...register("confirm-password", { required: true })} />
            <Button className="my-4" type="submit">Login</Button>
          </form>
        </TabsContent>
      </Tabs>
      </div>
      {/* //desktop */}
      <Image className="hidden lg:block w-full h-screen object-cover" src={bg} />
    </main>
  );
}
