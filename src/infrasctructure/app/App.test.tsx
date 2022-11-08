import { render, screen } from "@testing-library/react";
import { MemoryRouter as Router } from "react-router-dom";
import { Layout } from "../../features/project/components/layout/layout";
import App from "./App";

describe("Given App component", () => {
    beforeEach(() => {
        render(
            <Router>
                <Layout>
                    <App></App>
                </Layout>
            </Router>
        );
    });
    test("renders add your characters", async () => {
        const title = /future/i;
        const element = await screen.findByText(title);
        expect(element).toBeInTheDocument();
    });
});
