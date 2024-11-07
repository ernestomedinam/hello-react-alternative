import { beforeEach, describe, expect, it } from "vitest";
import { renderAtPath } from "../../utils/testHelpers";
import { chickens } from "../../utils/mswHandlers/chickens";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { css_colors } from "../../utils/mswHandlers/css_colors";

describe("<Livestock /> as a page to render a detail view on a livestock on some nature", () => {
    let router;
    beforeEach(() => {
        router = renderAtPath(["/barn"]);
    });
    it("renders name and chicken for the chicken with this id", async () => {
        const chicken = chickens.find((c) => c.id === 1);
        const chickenDivWithThisName = await screen.findByLabelText(
            `${chicken.name} the chicken`
        );
        expect(chickenDivWithThisName).exist;
        const user = userEvent.setup();
        await user.click(chickenDivWithThisName);
        const chickenDiv = await screen.findByLabelText(`${chicken.name} the chicken`);
        expect(chickenDiv).exist;
        const nameH1 = await screen.findByLabelText(`chicken name: ${chicken.name}`);
        expect(nameH1).exist;
        expect(nameH1.textContent).toEqual(`${chicken.name} the chicken`);
        const chickenFace = await screen.findByLabelText("chicken's face", {exact: false});
        const rgbColor = css_colors.find(
            color => color.value == chicken.color[0]
        );
        expect(chickenFace.getAttribute("fill")).toEqual(
            rgbColor.rgb
        );
    });
});
