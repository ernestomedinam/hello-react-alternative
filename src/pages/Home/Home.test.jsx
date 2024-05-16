import { beforeEach, describe, expect, it, vi } from "vitest";
import { renderComponentForTest } from "../../utils/testHelpers";
import { Home } from "./Home";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { songs } from "../../utils/mswHandlers/songs";

describe("<Home /> as a welcome page with playing songs feature", () => {
    beforeEach(() => {
        renderComponentForTest(Home);
    });
    it("has an image of Rigo and a button that says click to load songs", async() => {
        const rigo = await screen.findByLabelText("image of baby rigo");
        expect(rigo).exist;
        const buttons = await screen.findAllByRole("button");
        expect(buttons.some(
            (button) => button.textContent === "click to play Rigo's songs" 
        )).toBeTruthy();
    });
    it("allows user to get a list of Rigo's songs", async() => {
        const button = await screen.findByText("click to play Rigo's songs");
        const user = userEvent.setup();
        await user.click(button);
        const list = await screen.findByRole("list", {}, {timeout: 5000});
        const listItems = await screen.findAllByRole("listitem");
        expect(list).exist;
        expect(listItems).toHaveLength(songs.length);
    });
    it("autoplays after getting songs", async() => {
        const button = await screen.findByText("click to play Rigo's songs");
        const user = userEvent.setup();
        await user.click(button);
        const audioTag = await screen.findByLabelText("audio player");
        expect(audioTag.autoplay).toBe(true);
    });
});  
