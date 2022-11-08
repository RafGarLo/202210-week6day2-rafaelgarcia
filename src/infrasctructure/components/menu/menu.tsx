import { Link } from "react-router-dom";
import styles from "./menu.module.css";

export function Menu() {
    const menuOption = [
        { id: "1", path: "home", label: "Home" },
        { id: "2", path: "about", label: "About" },
    ];
    return (
        <nav>
            <ul className={styles.header__ul}>
                {menuOption.map((item) => (
                    <li className={styles.header__li} key={item.id}>
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
