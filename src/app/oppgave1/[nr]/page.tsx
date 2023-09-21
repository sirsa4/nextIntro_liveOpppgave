"use client"

import ReturnHome from '@/components/ReturnHome';
import React from 'react'

const delOppgave = ({params}:{params:{nr:string}}) => {   
  console.log(params.nr);
  
  if(params.nr === "b"){
    console.log("working oppgave B");
    
    return (
      <>
      <div>
        <h1>Del oppgave 1: B</h1>
        <ReturnHome href={`/oppgave1`} place={`oppgave1`} />
      </div>
      </>
    )
  }

  return (
    <>
    <div>delOppgave: {params.nr}</div>
    </>
    
  )
}

export default delOppgave