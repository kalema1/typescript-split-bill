// component file responsible for rendering list of friends

import Friend from "./Friend";
import { initialFriends } from "../data/data";

export default function FriendsList() {
  return (
    <ul className="friends-list">
      {initialFriends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}
