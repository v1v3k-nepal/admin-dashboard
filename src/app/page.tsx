"use client"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter();
  router.push("/dashboard")
  return (
    <main>
      <p>Redirecting to Dashboard...</p>
    </main>
  )
}
