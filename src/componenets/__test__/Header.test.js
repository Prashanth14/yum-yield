import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import { render, screen, fireEvent } from "@testing-library/react";
import appStore from "../../../utils/appStore"
import "@testing-library/jest-dom";


it("Should render Head Component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});

    expect(loginButton).toBeInTheDocument();
});

it("Should render Head Component with Cart 0 Items", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cartItems = screen.getByText("🛒 -(0 items)");

    expect(cartItems).toBeInTheDocument();
});

it("Should change Login button to Logout", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
});