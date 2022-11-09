import { CharacterModel } from "../models/character";
import { CharacterRepository } from "./character.repository";

describe("Given CharacterApi Service", () => {
    describe("When we instantiate it", () => {
        let service: CharacterRepository;
        beforeEach(() => {
            service = new CharacterRepository();
        });
        test(`Then if I use service.getCharacter() 
            it should return a Promise of an Array of ICharacter`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue([]),
            });
            const result = await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual([]);
        });
        test(`Then if I use service.createCharacter()
                it should return a Promise of the crated task`, async () => {
            const mockCharacter = new CharacterModel("", "", 18, "");
            global.fetch = jest.fn().mockResolvedValue({
                json: jest.fn().mockResolvedValue(mockCharacter),
            });
            const result = await service.create(mockCharacter);
            expect(fetch).toHaveBeenCalled();
            expect(result).toEqual(mockCharacter);
        });
        test("Then if I use .... it should ...", async () => {
            //TODO await service.delete(1);
        });
        test("Then if I use ..... it should ...", async () => {
            //TODO await service.update(1, { isComplete: true });
        });
    });
});
