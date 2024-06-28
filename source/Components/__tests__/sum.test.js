import { sum } from "../Sum";

test("This function will return the sum of two numbers" , () =>{
    const result = sum(3,4);

    expect(result).toBe(7);
})