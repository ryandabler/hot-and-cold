import { getHeat, isValid, isAlreadyGuessed } from "./utilities";

describe("getHeat", () => {
    it("Should indicate Won", () => {
        const heat = getHeat("1", 1);
        expect(heat).toEqual("Won");
    });

    it("Should indicate Hot", () => {
        const heat = getHeat("1", 10);
        expect(heat).toEqual("Hot");
    });

    it("Should indicate Warm", () => {
        const heat = getHeat("1", 20);
        expect(heat).toEqual("Warm");
    });

    it("Should indicate Cool", () => {
        const heat = getHeat("1", 30);
        expect(heat).toEqual("Cool");
    });

    it("Should indicate Cold", () => {
        const heat = getHeat("1", 31);
        expect(heat).toEqual("Cold");
    });
});

describe("isValid", () => {
    it("Should return valid", () => {
        const valid = isValid("10");
        expect(valid).toEqual(true);
    });

    it("Should return invalid for non-numeric inputs", () => {
        const valid = isValid("10a");
        expect(valid).toEqual(false);
    });

    it("Should return invalid for empty input", () => {
        const valid = isValid("");
        expect(valid).toEqual(false);
    })
});

describe("isAlreadyGuessed", () => {
    it("Should indicate duplicate values", () => {
        const history = [
            {
                guess: "10",
                heat: "Hot"
            }
        ];
        const duplicate = isAlreadyGuessed("10", history);
        expect(duplicate).toEqual(true);
    });
});