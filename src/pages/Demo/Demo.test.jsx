import { beforeEach, describe, expect, it } from "vitest";
import { renderComponentForTest } from "../../utils/testHelpers";
import { Demo } from "./Demo";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Layout } from "../../Layout";
import { MainContextProvider } from "../../contexts/MainContext/MainContext";

describe("<Demo /> as a page with an example use case for useState", () => {
    beforeEach(() => {
        renderComponentForTest(Demo);
    });
    it("has two li elements with a button each", async() => {
        const lis = await screen.findAllByLabelText("demo item");
        expect(lis).toHaveLength(2);
        for (const li of lis) {
            const button = li.querySelector("button");
            expect(button).exist;
        }
    });
    it("updates li color on button click", async() => {
        const lis = await screen.findAllByLabelText("demo item");
        const li = lis[0];
        const liStyles = window.getComputedStyle(li);
        expect(liStyles.backgroundColor).toBe("rgb(255, 255, 255)");
        const button = li.querySelector("button");
        const user = userEvent.setup();
        await user.click(button);
        const _lis = await screen.findAllByLabelText("demo item");
        const _li = _lis[0];
        const _liStyles = window.getComputedStyle(_li);
        expect(_liStyles.backgroundColor).toBe("rgb(255, 165, 0)");
    });
});

describe("<Demo /> as a page that takes user to specific item pages", async() => {
    beforeEach(() => {
        render(
            <MainContextProvider>
                <Layout />
            </MainContextProvider>
        );
    });
    it("takes user to /single/1 on click for first link", async() => {
        const demoButton = await screen.findByText(
            "Demo page"
        );
        const user = userEvent.setup();
        await user.click(demoButton);
        const lis = await screen.findAllByLabelText("demo item");
        const firstLi = lis[0];
        const firstLink = firstLi.querySelector("a");
        await user.click(firstLink);
        const url = window.location.href;
        expect(url.endsWith("/single/1")).toBeTruthy();
    });
});
