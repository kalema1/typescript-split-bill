import { FriendItem, FriendsProp } from "../data/Data.type";

export type FriendListProps = {
  friends: FriendsProp;
  onFriendSelection: (friend: FriendItem) => void;
  selectedFriend: FriendItem | null;
};
