// component file responsible for rendering list of friends

import { FriendItem, InitialFriendsData } from "../data/Data.type";
import Friend from "./Friend";

type FriendListProps = {
  friends: InitialFriendsData;
  onFriendSelection: () => void;
  selectedFriend: FriendItem;
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
