import styles from "./footer.module.css";
export function Footer() {
    return (
        <footer>
            <div className={styles.footer__container}>
                <img
                    className={styles.logo__footer}
                    src="./assets/logo.png"
                    alt="fightClub Logo"
                    min-width="20px"
                ></img>
                <address>ISDI - ©FightClub Group 2022</address>
            </div>
        </footer>
    );
}
