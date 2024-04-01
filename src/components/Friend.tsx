import Button from "./Button";
import { useContext } from "react";
import { FriendsContext } from "../contexts/FriendsContext";
import { FriendProps } from "../types/Friend.type";

/**
 * friend component
 * renders friends item
 * @prop {object} friend - friends object from the array list
 * @prop {functon} onFriendSelection - selects friend
 * @prop {object} selectedFriend - friend selected from the list
 */
export default function Friend({ friend }: FriendProps) {
  const { onFriendSelection, selectedFriend } = useContext(FriendsContext);

  const isSelectedFriend = selectedFriend?.id === friend.id;

  return (
    <li className={`list-item ${isSelectedFriend ? "selected" : ""}`}>
      <img className="img" src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          you owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${Math.abs(friend.balance)}
        </p>
      )}

      {friend.balance === 0 && <p>you and {friend.name} are even</p>}

      <Button onClick={() => onFriendSelection(friend)}>
        {isSelectedFriend ? "Close" : "Select"}
      </Button>
    </li>
  );
}
