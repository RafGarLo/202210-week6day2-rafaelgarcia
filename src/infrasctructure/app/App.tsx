import { Layout } from "../../features/project/components/layout/layout";
import { AppRoutes } from "../routes/app.routes";

function App() {
    return (
        <>
            <Layout>
                <AppRoutes></AppRoutes>
            </Layout>
            <div>Add your own characters some time in the future</div>
        </>
    );
}
export default App;
