import { beforeEach, describe, expect, it } from "vitest";
import { renderAtPath, renderComponentForTest } from "../../utils/testHelpers";
import { Barn } from "./Barn";
import { Layout } from "../../Layout";
import { screen } from "@testing-library/react";

describe("<Barn /> as a page that shows carousels of current livestock animals in our barn", () => {
    beforeEach(() => {
        renderAtPath(["/barn"]);
    });
    it("has title for chickens", async() => {
        const title = await screen.findByText("Chickens");
        expect(title).exist;
    });
    it("renders chickens in chicken container", async() => {
        const chickens = await screen.findByLabelText("chickens container");
        expect(chickens.children).toHaveLength(2);
    });
});
