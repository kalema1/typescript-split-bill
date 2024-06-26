import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { FriendsProvider } from "../../src/contexts/FriendsContext";
import { AddFriendProvider } from "../../src/contexts/AddFriendContext";
import AddFriendForm from "../../src/components/AddFriendForm";

describe("AddFriendForm", () => {
  const renderComponent = () => {
    render(
      <FriendsProvider>
        <AddFriendProvider>
          <AddFriendForm />
        </AddFriendProvider>
      </FriendsProvider>
    );

    return {
      nameInput: screen.getByPlaceholderText(/name/i),
      imageInput: screen.getByPlaceholderText(/name/i),
      friendLabel: screen.getByText(/friend name/i),
      imageLabel: screen.getByText(/image/i),
      button: screen.getByRole("button"),
      user: userEvent.setup(),
    };
  };

  it("should render input text", async () => {
    const { nameInput, user } = renderComponent();

    await user.type(nameInput, "jesse");

    expect(nameInput).toHaveValue("jesse");
  });

  it("should not render nothing text if value typed in", async () => {
    const { nameInput, user } = renderComponent();

    await user.type(nameInput, "jesse");

    expect(nameInput).not.toHaveValue("");
  });

  it("shouldrender label text 'friend name'", () => {
    const { friendLabel } = renderComponent();

    expect(friendLabel).toBeInTheDocument();
  });

  it("shouldrender label text 'image'", () => {
    const { imageLabel } = renderComponent();

    expect(imageLabel).toBeInTheDocument();
  });

  it("should have empty value after form submission", async () => {
    const { button, nameInput, user } = renderComponent();

    await user.click(button);

    expect(nameInput).toHaveValue("");
  });
});
