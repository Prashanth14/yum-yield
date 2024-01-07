import Contact from "../Contact";
import {render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("should load contact Us componenet", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
});

test("should load button in contact Us componenet", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    //Assertion
    expect(button).toBeInTheDocument();
});