import Contact from "../Contact";
import {render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

//Unit Testing
describe("Contact Us Page Test case", () => {
    //you can use function name as either test or it
    test("should load contact Us component", () => {
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
        //Assertion
        expect(heading).toBeInTheDocument();
    });
    //it is alias of test
    it("should load button in contact Us component", () => {
        render(<Contact />);
    
        const button = screen.getByRole("button");
        //Assertion
        expect(button).toBeInTheDocument();
    });
    
    test("should load Input name in contact Us component", () => {
        render(<Contact />);
    
        const button = screen.getByPlaceholderText("name");
        //Assertion
        expect(button).toBeInTheDocument();
    });
    
    test("should load 2 Input names in contact Us component", () => {
        render(<Contact />);
        //Querying
        const inputBoxes = screen.getAllByRole("textbox");
    
        //Assertion
        expect(inputBoxes.length).toBe(2);
    });
});

