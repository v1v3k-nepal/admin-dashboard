"use client"
import { useRouter } from "next/navigation"
import {useEffect} from "react"

export default function Home() {
  const router = useRouter();
  useEffect(()=>{
    router.push("/dashboard")
  },[])
  return (
    <main>
      <p>Redirecting to Dashboard...</p>
    </main>
  )
}
