import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us page test cases", () =>{    // Used for the grouping of test cases to make file management easy
    it("Should load contact component", () =>{
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    });
    
    it("Should load button inside a content component", () =>{
        render(<Contact />);
    
        const button = screen.getByText("Let's talk");
        
        expect(button).toBeInTheDocument();
    });
    
    test("Should load input name inside a content component", () =>{
        render(<Contact />);
    
        const input = screen.getByPlaceholderText("input");
    
        expect(input).toBeInTheDocument();
    });
    
    test("Should load all input boxes inside a content component", () =>{
        render(<Contact />);
    
        //Querying
        const input = screen.getAllByRole("textbox");   // This will return an array of JSX (React Element).
    
        // console.log(input.length);
    
        //Assertion
        expect(input.length).toBe(6);
    });
})



