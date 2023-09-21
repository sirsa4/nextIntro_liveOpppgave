import Link from 'next/link'
import React from 'react'

const ReturnHome = ({href,place}:any) => {
  return (
    <>
    <Link href={href}><button type="button">Return to {place}</button></Link>
    </>
  )
}

export default ReturnHome;