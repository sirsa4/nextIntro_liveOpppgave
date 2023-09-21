import { describe, expect, it } from "vitest"

import { validateAge } from "../app/oppgave1/page"

//oppgave 1: C test

describe("Validate Age", () => {
  it("should allow bike if age under 18", () => {
    const result = validateAge(17)
    // Use toStrictEqual to validate object
    const dat = { allowed: false, data: "Use bike" }
    expect(result).toStrictEqual(dat)
  })

  it("should allow to use own car if age between 19 and 100", () => {
    const edgeLeft = validateAge(19)
    const edgeRight = validateAge(99)
    // Use toStrictEqual to validate object
    expect(edgeLeft).toStrictEqual(edgeRight)
  })
  it("should use dads car if 18", () => {
    const result = validateAge(18)
    // Use toStrictEqual to validate object
    const dat = { allowed: true, data: "Drive your dads car" }
    expect(result).toStrictEqual(dat)
  })
       it("should not be allowed if age more than 99", () => {
    const result = validateAge(100)
     // Use toContain - to validate allowed key
     const dat = undefined;
     expect(result).toStrictEqual(dat);
   })
})



