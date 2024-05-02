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
      balance: screen.queryByText(/you owe/i),
      friend,
    };
  };

  it("should render a friend item", () => {
    const { heading, image, friend } = renderComponent();
    expect(image).toBeInTheDocument();
    expect(heading).toHaveTextContent(friend.name);
  });

  it("should not render you owe if balance greater than zero", () => {
    const { balance } = renderComponent();
    expect(balance).not.toBeInTheDocument();
  });
});
