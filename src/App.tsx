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
  const [selectedfriend, setSelectedFriend] = useState<FriendItem | null>(null);

  /**
   *
   * selects a friend
   */
  function handleFriendSelection(friend: FriendItem) {
    setSelectedFriend(friend);
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
        />

        {showAddFriendForm && <AddFriendForm onAddfriend={handleAddFriend} />}

        <Button onClick={handleShowAddfriendForm}>
          {showAddFriendForm ? "Close" : "Add friend"}
        </Button>
      </div>

      {!!selectedfriend && <SplitBillForm />}
    </div>
  );
}
