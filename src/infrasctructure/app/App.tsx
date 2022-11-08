import { Layout } from "../components/layout/layout";
import { AppRoutes } from "../routes/app.routes";

function App() {
    return (
        <>
            <Layout>
                <AppRoutes></AppRoutes>
            </Layout>
            <div>aprendiendo react App</div>
        </>
    );
}
export default App;
