import { useContext } from "react";
import AddFriendForm from "./components/AddFriendForm";
import Button from "./components/Button";
import FriendsList from "./components/FriendsList";
import SplitBillForm from "./components/SplitBillForm";
import { FriendsContext } from "./contexts/FriendsContext";
import { ADD_FRIEND, CLOSE } from "./constants/buttonContants";
import Heading from "./components/Heading";

export default function App() {
  const { showAddFriendForm, handleShowAddfriendForm, selectedFriend } =
    useContext(FriendsContext);
  return (
    <>
      <Heading />
      <div className="app-container">
        <div className="sidebar">
          <FriendsList />

          {showAddFriendForm && <AddFriendForm />}

          <Button onClick={handleShowAddfriendForm}>
            {showAddFriendForm ? CLOSE : ADD_FRIEND}
          </Button>
        </div>

        {!!selectedFriend && <SplitBillForm />}
      </div>
    </>
  );
}
