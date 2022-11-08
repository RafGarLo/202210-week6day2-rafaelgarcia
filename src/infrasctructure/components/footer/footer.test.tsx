import { render, screen } from "@testing-library/react";
import { Footer } from "./footer";
describe("Given Footer component", () => {
    beforeEach(() => {
        render(<Footer />);
    });
    test("Then it should display ISDI", () => {
        const element = screen.getByText(/ISDI/i);
        expect(element).toBeInTheDocument();
    });
});
