import { beforeAll, beforeEach, describe, expect, it } from "vitest";
import { renderComponentForTest } from "../../utils/testHelpers";
import { Chicken } from "./Chicken";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { chickens } from "../../utils/mswHandlers/chickens";

describe("<Chicken /> as a component to render as a chicken based on a div with an svg child, wrapped by a tooltip component", () => {
    let chicken;
    beforeEach(() => {
        chicken = chickens[0];
        renderComponentForTest(Chicken, {
            chicken: chicken
        });
    });
    it("renders chicken as a div with all its parts", async() => {
        const chickenDiv = await screen.findByLabelText(`${chicken.name} the chicken`);
        expect(chickenDiv).exist;
        const chickenFace = await screen.findByLabelText(`${chicken.name} the chicken's face`);
        expect(chickenFace).exist;
        const chickenEyes = await screen.findAllByLabelText(`${chicken.name} the chicken's eye`, {exact: false});
        expect(chickenEyes.length).toBe(2);
        const chickenBeak = await screen.findByLabelText(`${chicken.name} the chicken's beak`);
        expect(chickenBeak).exist;
        const chickenComb = await screen.findByLabelText(`${chicken.name} the chicken's comb`);
        expect(chickenComb).exist;
        const chickenCheekSpots = await screen.findAllByLabelText(`${chicken.name} the chicken's cheek spot`, {exact: false});
        expect(chickenCheekSpots.length).toBe(2);        
    });
    it("renders name and traits in tooltip", async() => {
        const user = userEvent.setup();
        const chickenDiv = await screen.findByLabelText(`${chicken.name} the chicken`);
        user.hover(chickenDiv);
        const tooltip = await screen.findByLabelText(`${chicken.name}'s intro story`);
        expect(tooltip).exist;
        const introText = await screen.findByText("This is the story", {exact: false});
        expect(introText.textContent.includes(chicken.name)).toBeTruthy();
        expect(introText.textContent.includes(chicken.traits[0].trait)).toBeTruthy();
        expect(introText.textContent.includes(chicken.traits[1].trait)).toBeTruthy();
        expect(introText.textContent.includes(chicken.traits[2].trait)).toBeTruthy();
    });
});
