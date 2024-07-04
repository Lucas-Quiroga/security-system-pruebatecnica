import { render, screen } from "@testing-library/react";
import About from "@/components/About";

describe("About Component", () => {
  test("Muestra el componente About con el contenido correcto", () => {
    render(<About />);

    const titleElement = screen.getByRole("heading", { name: /Sobre mí/i });
    const descriptionElement = screen.getByText(
      /Hola, soy Lucas Quiroga, desarrollador web./i
    );

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});
