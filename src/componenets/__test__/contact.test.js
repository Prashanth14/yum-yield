import Contact from "../Contact";
import {render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("should load contact Us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
});

test("should load button in contact Us component", () => {
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