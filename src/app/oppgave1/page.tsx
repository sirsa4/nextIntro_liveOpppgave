"use client"

import ReturnHome from "@/components/ReturnHome";
import Link from "next/link";

//oppgave 1
type DataType = {
    name: string,
    age: number,
    gender: GenderType
    
}

type GenderType = "male" | "female" | "other";
//============================================================================================//

//oppgave 1: B
type ItemTypes = {
  id: number,
  name: string,

}


const items: ItemTypes[] = [{
	id: 1,
	name: "Sara"
}]


function run(doc: ItemTypes[]): boolean {
	return doc.length > 0
}

run(items)
//=============================================================================================
//oppgave 1: C
export const validateAge = (age: number) => {
	if(age < 18) {
		return { allowed: false, data: 'Use bike' }
	}
  if(age === 18) {
		return { allowed: true, data: 'Drive your dads car' }
	}
	if(age < 100) {
		return { allowed: true, data: 'Drive your own car' }
	}
	
}



const oppgave1 = () => {

  //oppgave 1
  const genders: GenderType[] = ["male", "female", "other"]
  const firstName: string = "Marius"
  const age: number = 38
  const gender: GenderType = genders[0]
  const hasKids: boolean = true
  const data: DataType = { name: firstName, age, gender }

  //console.log(genders)

  return <div>
    <h1>Oppgave 1</h1>
    <p>Check source code for this page</p>
    <p>Oppgave1: C is oppgave1_c.tsx</p>
    <ul>
      <li><Link href="/oppgave1/b">Oppgave 1: B</Link></li>
      <li><Link href="/oppgave1/c">Oppgave 1: C</Link></li>
    </ul>
    <ReturnHome href="/" place="Home" />
  </div>
}

export default oppgave1;
