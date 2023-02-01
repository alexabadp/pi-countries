import Landing from "../views/Landing/Landing";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter, Link } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Landing component test", () => {
  test("renders content", () => {
    const component = render(
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    );
    expect(component.container).toHaveTextContent(
      "Come and discover the best places in the world to do your favorite hobbies"
    );
  });

  test("Welcome button should de working", () => {
    const component = render(
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    );

    expect(component.getByRole("button")).not.toBeDisabled();
  });
});

test("When clicking WELCOME button should take you to Home", () => {
  let component = render(
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  );
  const link = component.getByRole("link", { name: "Welcome" });
  expect(link.getAttribute("href")).toBe("/home");
});
