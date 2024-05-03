import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { FriendsProvider } from "../../src/contexts/FriendsContext";
import FriendsList from "../../src/components/FriendsList";

describe("FriendsList", () => {
  const renderComponent = () => {
    render(
      <FriendsProvider>
        <FriendsList />
      </FriendsProvider>
    );

    const friends = [
      { id: 1, name: "davis", image: "davis.jpg", balance: 20 },
      { id: 2, name: "Jane", image: "jane.jpg", balance: -10 },
      { id: 2, name: "dan", image: "dan.jpg", balance: 60 },
    ];

    return {
      friendsItems: screen.getAllByRole("listitem"),
      friends,
    };
  };

  it("should render 3 elements", () => {
    const { friendsItems, friends } = renderComponent();
    const friendsLength = friends.length;

    expect(friendsItems).toHaveLength(friendsLength);
  });
});
