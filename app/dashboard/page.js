import TasksList from "@/components/custom/tasks-list";
import ProjectsList from "@/components/custom/projects-list";
import EventsList from "@/components/custom/events-list";
export default function Page() {
    return (
        <main className="xl:w-1/2 mx-auto lg:grid lg:grid-cols-2">
            <TasksList/>
            <ProjectsList />
            <EventsList />
        </main>
    )
}
