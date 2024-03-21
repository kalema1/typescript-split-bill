// component file responsible for rendering list of friends

import { FriendItem } from "../data/Data.type";
import Friend from "./Friend";

type FriendListProps = {
  friends: FriendItem[];
  onFriendSelection: (friend: FriendItem) => void;
  selectedFriend: FriendItem | null;
};

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
