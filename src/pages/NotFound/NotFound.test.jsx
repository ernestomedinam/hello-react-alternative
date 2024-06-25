import { screen } from "@testing-library/react";
import { beforeEach, expect, it } from "vitest";
import { renderComponentForTest } from "../../utils/testHelpers";
import { NotFound } from "./NotFound";

describe("<NotFound /> for paths that are not found...", () => {
    beforeEach(() => {
        renderComponentForTest(NotFound);
    });
    it("renders a sad face and Not found text", async() => {
        const face = await screen.findByText("😥");
        expect(face).exist;
        const text = await screen.findByText("Not found");
        expect(text).exist;
    });
});
