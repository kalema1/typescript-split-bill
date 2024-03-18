import { FriendItem, InitialFriendsData } from "../data/Data.type";
import Button from "./Button";

/**
 * friend component
 * renders friends item
 * @param {object} friend - friends object from the array list
 */
export default function Friend({
  friend,
  onFriendSelection,
  selectedFriend,
}: FriendItem | InitialFriendsData) {
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
