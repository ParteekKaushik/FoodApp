import { Provider } from "react-redux";
import Header from "../Header";
import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../Utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByText("Login");

  //   console.log(loginButton);

  expect(loginButton).toBeInTheDocument();
});

it("Should render header component with cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/); // This is rejex will find the text does not match exectly

  expect(cartItems).toBeInTheDocument();
});

it("Should change login button to logout onclick", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const loginButton = screen.getByRole("a", { href: "/login" });
  const loginButton = screen.getByText("Login");

  fireEvent.click(loginButton);

  const logoutButton = screen.getByText("Logout");

  expect(logoutButton).toBeInTheDocument();
});
