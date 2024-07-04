import { render, screen } from "@testing-library/react";
import Interests from "@/components/Interests";

describe("Interests Component", () => {
  test("Muestra el componente Interests con el contenido correcto", () => {
    render(<Interests />);

    const titleElement = screen.getByRole("heading", { name: /Intereses/i });
    const listItems = screen.getAllByRole("listitem");

    expect(titleElement).toBeInTheDocument();
    expect(listItems).toHaveLength(4);
    expect(listItems[0]).toHaveTextContent("Desarrollo web");
    expect(listItems[1]).toHaveTextContent("Programación");
    expect(listItems[2]).toHaveTextContent("Gimnasio");
    expect(listItems[3]).toHaveTextContent("Algoritmos");
  });

  test("Añade la clase activa después de montar el componente", () => {
    render(<Interests />);

    const sectionElement = screen.getByTestId("interests-section");

    expect(sectionElement).toHaveClass("interests");
    expect(sectionElement).toHaveClass("interests--active");
  });
});
