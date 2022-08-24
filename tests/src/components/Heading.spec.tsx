import Heading from "../../../src/components/Heading";
import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

describe("Heading", () => {
  test("renders correctly", () => {
    render(
      <BrowserRouter>
        <Heading />
      </BrowserRouter>
    );
    expect(screen.getByText("Agregar estudiante")).toBeInTheDocument();
  });



  test('renders with Agregar estudiante with route: "/add-student', () => {
    render(
      <MemoryRouter initialEntries={["/add-student"]}>
        <Heading />
      </MemoryRouter>
    );
    expect(screen.getByText("Agregar estudiante")).toBeInTheDocument();
  });

  test('renders with "Lista de estudiantes with route: "/', () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Heading />
      </MemoryRouter>
    );
    expect(screen.getByText("Lista de estudiantes")).toBeInTheDocument();
  });

});
