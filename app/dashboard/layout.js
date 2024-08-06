import NavBar from '@/components/custom/navbar'
export default function Layout({children}) {
  return (
    <main>
         <NavBar />
          {children}
    </main>
  )
}
