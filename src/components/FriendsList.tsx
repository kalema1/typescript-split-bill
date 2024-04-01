// component file responsible for rendering list of friends

import { useContext } from "react";
import { FriendItem } from "../data/Data.type";
import { FriendListProps } from "../types/FriendsList.type";
import Friend from "./Friend";
import { FriendsContext } from "../contexts/FriendsContext";

/**
 * FriendList component
 * renders the list of friends
 *
 */
export default function FriendsList() {
  const { friends }: FriendListProps = useContext(FriendsContext);
  return (
    <ul className="friends-list">
      {friends.map((friend: FriendItem) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}
