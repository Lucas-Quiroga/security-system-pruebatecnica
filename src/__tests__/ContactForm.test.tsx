import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from "@/components/ContactForm";

describe("ContactForm Component", () => {
  test("Muestra el componente ContactForm con el contenido correcto", () => {
    render(<ContactForm />);

    const titleElement = screen.getByRole("heading", { name: /Contacto/i });
    const nameInput = screen.getByLabelText("Nombre");
    const emailInput = screen.getByLabelText("Email");
    const messageTextarea = screen.getByLabelText("Mensaje");
    const submitButton = screen.getByRole("button", { name: /Enviar/i });

    expect(titleElement).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageTextarea).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("Gestiona correctamente el envío de formularios", () => {
    render(<ContactForm />);

    const nameInput = screen.getByLabelText("Nombre");
    const emailInput = screen.getByLabelText("Email");
    const messageTextarea = screen.getByLabelText("Mensaje");
    const submitButton = screen.getByRole("button", { name: /Enviar/i });

    fireEvent.change(nameInput, { target: { value: "Lionel Messi" } });
    fireEvent.change(emailInput, { target: { value: "messi@gmail.com" } });
    fireEvent.change(messageTextarea, {
      target: { value: "Hola, soy messi y estoy probando un test." },
    });

    fireEvent.click(submitButton);

    const thankYouMessage = screen.getByText(
      /Gracias por tu mensaje, te responderé a la brevedad./i
    );
    expect(thankYouMessage).toBeInTheDocument();
  });
});
