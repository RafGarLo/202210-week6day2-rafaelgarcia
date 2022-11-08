import { CharacterList } from "../project/components/character.list/character.list";
import styles from "./home.page.module.css";

function HomePage() {
    return (
        <>
            <main>
                <h2 className={styles.title}>New Season Coming</h2>
                <CharacterList></CharacterList>
            </main>
        </>
    );
}
export default HomePage;
