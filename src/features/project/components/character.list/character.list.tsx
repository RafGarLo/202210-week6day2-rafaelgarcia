import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../../../infrasctructure/store/store";
import { CharactersData } from "../../../models/CharactersData";
import * as ac from "../../reducer/action.creators";
import styles from "./character.list.module.css";

export function CharacterList() {
    const characters = useSelector((state: rootState) => state.characters);
    const dispatcher = useDispatch();

    useEffect(() => {
        dispatcher(ac.loadActionCreator(CharactersData));
    }, [dispatcher]);

    return (
        <>
            {characters.map((item) => (
                <ul className={styles.ul} key={item.id}>
                    <li>
                        Name: {item.name} Family: {item.family} Age: {item.age}{" "}
                        Role: {item.role}
                    </li>
                </ul>
            ))}
        </>
    );
}

// ese item.title es en realidad lo que necesites (id, name, title, etc)
