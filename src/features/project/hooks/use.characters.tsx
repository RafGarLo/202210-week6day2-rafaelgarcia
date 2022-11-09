import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootState } from "../../../infrasctructure/store/store";
import { CharacterModel, ICharacter } from "../../models/character";
import * as ac from "../../project/reducer/action.creators";
import { CharacterRepository } from "../../services/character.repository";

export const useCharacters = () => {
    const characters = useSelector((state: rootState) => state.characters);
    const dispatcher = useDispatch();
    const apiCharacterService = useMemo(() => new CharacterRepository(), []);

    useEffect(() => {
        apiCharacterService
            .getAll()
            .then((characters) => dispatcher(ac.loadActionCreator(characters)))
            .catch((error: Error) => console.log(error.name, error.message));
    }, [apiCharacterService, dispatcher]);

    const handleAdd = (newCharacter: CharacterModel) => {
        apiCharacterService
            .create(newCharacter)
            .then((character: ICharacter) =>
                dispatcher(ac.addActionCreator(character))
            )
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleUpdate = (updateCharacter: Partial<ICharacter>) => {
        apiCharacterService
            .update(updateCharacter)
            .then((character: ICharacter) =>
                dispatcher(ac.updateActionCreator(character))
            )
            .catch((error: Error) => console.log(error.name, error.message));
    };

    const handleDelete = (id: number) => {
        apiCharacterService
            .delete(id)
            .then((isDeleted: boolean) =>
                dispatcher(ac.deleteActionCreator(id))
            )
            .catch((error: Error) => console.log(error.name, error.message));
    };
    return {
        handleAdd,
        handleDelete,
        handleUpdate,
        characters,
    };
};
