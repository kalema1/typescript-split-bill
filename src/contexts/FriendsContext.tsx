import { useState, createContext } from "react";
import { initialFriends } from "../data/data";
import { FriendItem } from "../data/Data.type";
import { AppProp, ChildrenProp } from "../types/App.type";

// create the context
export const FriendsContext = createContext({} as AppProp);

/**
 * friends provider context component
 * contains state and state update logic
 * @prop {jsx} children - children prop to contain jsx
 */
function FriendsProvider({ children }: ChildrenProp) {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<FriendItem | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  /**
   * splits bill
   * @param {number} value - balance value after payment
   */
  function handleSplitBill(value: number) {
    setFriends(
      friends.map((friend) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setIsLoading(true);
  }

  /**
   *
   * selects a friend
   * remove the add friend form
   * @param {object} friend - friend object that is to be selected
   */
  function handleFriendSelection(friend: FriendItem) {
    setSelectedFriend((currentFriend) =>
      currentFriend?.id === friend.id ? null : friend
    );

    setShowAddFriendForm(false);
  }

  /**
   * toggles the add friend form
   */
  function handleShowAddfriendForm() {
    setShowAddFriendForm((show) => !show);
  }

  /**
   * add friend on the list
   * @param {object} friend - friend added onto the list
   */
  function handleAddFriend(friend: FriendItem) {
    setFriends([...friends, friend]);
  }

  return (
    // returns provider and provides values to the children component
    <FriendsContext.Provider
      value={{
        friends,
        onFriendSelection: handleFriendSelection,
        selectedFriend,
        onAddfriend: handleAddFriend,
        onSplitBill: handleSplitBill,
        showAddFriendForm,
        handleShowAddfriendForm,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </FriendsContext.Provider>
  );
}

export { FriendsProvider };
