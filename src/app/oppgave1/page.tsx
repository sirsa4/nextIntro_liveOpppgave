"use client"
type DataType = {
    name: string,
    age: number,
    gender: GenderType
    
}
type GenderType = "male" | "female" | "other";

const oppgave1 = () => {

  const genders: GenderType[] = ["male", "female", "other"]
  const firstName: string = "Marius"
  const age: number = 38
  const gender: GenderType = genders[0]
  const hasKids: boolean = true
  const data: DataType = { name: firstName, age, gender }

  console.log(genders)

  return <div>
    <h1>Oppgave 1</h1>
    <p>Check source code for this page</p>
  </div>
}

export default oppgave1
