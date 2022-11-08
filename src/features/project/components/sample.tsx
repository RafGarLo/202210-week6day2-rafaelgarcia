import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../../infrasctructure/store/store";
import * as ac from "../../project/reducer/action.creators";

export function Sample() {
    const tasks = useSelector((state: rootState) => state.tasks);
    const dispatcher = useDispatch();

    useEffect(() => {
        dispatcher(
            ac.loadActionCreator([
                {
                    id: "1",
                    title: "Terminar Redux",
                    responsible: "Pepe",
                    isComplete: false,
                },
            ])
        );
    }, [dispatcher]);

    return (
        <>
            {tasks.map((item) => (
                <p key={item.id}>{item.title}</p>
            ))}
        </>
    );
}

// ese item.title es en realidad lo que necesites (id, name, title, etc)
