// component file responsible for rendering list of friends

import { FriendItem, InitialFriendsData } from "../data/Data.type";
import Friend from "./Friend";

export default function FriendsList({
  friends,
  onFriendSelection,
  selectedFriend,
}: InitialFriendsData | FriendItem) {
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
