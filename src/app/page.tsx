import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div>
      <h1>React/Next intro oppgaver</h1>
      <h2>Ignore routes - that is for sake trying out</h2>
      <ul>
        <li><Link href="/oppgave1">Oppgave 1</Link></li>
      </ul>
    </div>
    </>
  )
}
