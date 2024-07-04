import { render, screen } from "@testing-library/react";
import { Header } from "@/components/Header";

describe("Header Component", () => {
  test("Muestra el componente Header con el contenido correcto", () => {
    render(<Header />);

    const profileImage = screen.getByAltText("Profile img");
    const profileName = screen.getByRole("heading", { name: /Lucas Quiroga/i });
    const title = screen.getByText(/Software Engineer/i);

    expect(profileImage).toBeInTheDocument();
    expect(profileName).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(profileImage).toHaveAttribute(
      "src",
      "https://res.cloudinary.com/dncmrwppr/image/upload/v1707095702/profile3_wpgvdm.png"
    );
  });
});
