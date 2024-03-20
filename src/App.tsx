import { useState } from "react";
import AddFriendForm from "./components/AddFriendForm";
import Button from "./components/Button";
import FriendsList from "./components/FriendsList";
import SplitBillForm from "./components/SplitBillForm";
import { initialFriends } from "./data/data";
import { FriendItem } from "./data/Data.type";

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriendForm, setShowAddFriendForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState<FriendItem | null>(null);

  /**
   * splits bill
   */
  function handleSplitBill(value: number) {
    setFriends(
      friends.map((friend) =>
        friend.id === selectedFriend?.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }

  /**
   *
   * selects a friend
   * remove the add friend form
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
   */
  function handleAddFriend(friend: FriendItem) {
    setFriends([...friends, friend]);
  }

  return (
    <div className="app-container">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          onFriendSelection={handleFriendSelection}
          selectedFriend={selectedFriend}
        />

        {showAddFriendForm && <AddFriendForm onAddfriend={handleAddFriend} />}

        <Button onClick={handleShowAddfriendForm}>
          {showAddFriendForm ? "Close" : "Add friend"}
        </Button>
      </div>

      {!!selectedFriend && (
        <SplitBillForm
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}
