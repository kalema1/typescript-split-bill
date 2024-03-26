// component file responsible for rendering list of friends

import { FriendItem, FriendsProp } from "../data/Data.type";
import Friend from "./Friend";

type FriendListProps = {
  friends: FriendsProp;
  onFriendSelection: (friend: FriendItem) => void;
  selectedFriend: FriendItem | null;
};

/**
 * FriendList component
 * renders the list of friends
 * @prop {array} friends - array list of friends
 * @prop {function} onFriendSelection - selects friend from the list
 * @prop {object} selectedFriend - friend object to be selected
 */
export default function FriendsList({
  friends,
  onFriendSelection,
  selectedFriend,
}: FriendListProps) {
  return (
    <ul className="friends-list">
      {friends.map((friend: FriendItem) => (
        <Friend
          onFriendSelection={onFriendSelection}
          selectedFriend={selectedFriend}
          friend={friend}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
