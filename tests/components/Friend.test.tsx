import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";

import Friend from "../../src/components/Friend";
import { FriendsProvider } from "../../src/contexts/FriendsContext";

describe("Friend", () => {
  const renderComponent = () => {
    const id = crypto.randomUUID();
    const friend = {
      id,
      name: "becky",
      image: `https://i.pravatar.cc/48?u=118836?=${id}`,
      balance: 50,
    };

    render(
      <FriendsProvider>
        <Friend friend={friend} />
      </FriendsProvider>
    );

    return {
      heading: screen.getByRole("heading"),
      image: screen.getByAltText(friend.name),
      lessThanZeroBalance: screen.queryByText(/you owe/i),
      evenBalance: screen.queryByText(/even/i),
      greaterBalance: screen.queryByText(/owes/i),
      button: screen.getByRole("button"),
      friend,
    };
  };

  it("should render a friend item", () => {
    const { heading, image, friend } = renderComponent();
    expect(image).toBeInTheDocument();
    expect(heading).toHaveTextContent(friend.name);
  });

  it("should not render you owe if balance greater than zero", () => {
    const { lessThanZeroBalance } = renderComponent();
    expect(lessThanZeroBalance).not.toBeInTheDocument();
  });

  it("should not render even if balance greater than zero", () => {
    const { evenBalance } = renderComponent();
    expect(evenBalance).not.toBeInTheDocument();
  });

  it("should  render owes if balance greater than zero", () => {
    const { greaterBalance } = renderComponent();
    expect(greaterBalance).toBeInTheDocument();
  });

  it("should  render button with select text", () => {
    const { button } = renderComponent();
    expect(button).toHaveTextContent(/select/i);
  });
});
