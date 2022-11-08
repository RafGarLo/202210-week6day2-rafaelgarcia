import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { MemoryRouter as Router } from "react-router-dom";
import { appStore } from "../../infrasctructure/store/store";
import Home from "./about";

describe("Given About component", () => {
    describe("When we render the component", () => {
        beforeEach(() => {
            render(
                <Provider store={appStore}>
                    <Router>
                        <Home />
                    </Router>
                </Provider>
            );
        });
        test("Then it should display the title", () => {
            const title = /About/i;
            const element = screen.getByText(title);
            expect(element).toBeInTheDocument();
        });
    });
});
