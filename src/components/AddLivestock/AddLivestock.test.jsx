import { beforeEach, describe, expect, it, vi } from "vitest";
import { renderWithContext } from "../../utils/testHelpers";
import { AddLivestock } from "./AddLivestock";
import { screen } from "@testing-library/react";
import { BarnContextProvider } from "../../contexts/BarnContext/BarnContext";
import userEvent from "@testing-library/user-event";

describe("<AddLivestock /> as a component that shows up like a modal with form inputs to add a specific type of animal to the barn", () => {
    let closeFn;
    beforeEach(() => {
        closeFn = vi.fn();
        renderWithContext((props) => (
            <BarnContextProvider>
                <AddLivestock {...props} payload={{
                    nature: "chickens",
                    show: true
                }} close={closeFn} />
            </BarnContextProvider>
        ));
    });
    it("has an input for a name and a color to add chickens to the barn", async() => {
        const input = await screen.findByRole("textbox");
        const select = await screen.findByRole("combobox");
        expect(input.id).toBe("chicken-name");
        expect(select.id).toBe("chicken-color");
        expect(closeFn).not.toHaveBeenCalled();
    });
    it("creates the chicken if data is valid and closes modal component", async() => {
        const input = await screen.findByRole("textbox");
        const select = await screen.findByRole("combobox");
        const user = userEvent.setup();
        await user.type(input, "some name");
        await user.selectOptions(select, ["red"]);
        const button = await screen.findByText("Buy");
        await user.click(button);
        expect(closeFn).toHaveBeenCalled();
    });
    it("validates name has more than 2 characters and a color is selected", async() => {
        const input = await screen.findByRole("textbox");
        const select = await screen.findByRole("combobox");
        const button = await screen.findByText("Buy");
        const user = userEvent.setup();
        await user.click(button);
        let errors = await screen.findAllByText("😐", {exact: false});
        expect(errors).toHaveLength(2);
        expect(closeFn).not.toHaveBeenCalled();
        await user.type(input, "s");
        await user.selectOptions(select, ["red"]);
        await user.click(button);
        errors = await screen.findAllByText("😐", {exact: false});
        expect(errors).toHaveLength(1);
        expect(closeFn).not.toHaveBeenCalled();
        await user.type(input, "ome name");
        await user.click(button);
        expect(closeFn).toHaveBeenCalled();
    });
});
