import { FriendItem } from "../data/Data.type";

export type FriendProps = {
  friend: FriendItem;
  onFriendSelection: (friend: FriendItem) => void;
  selectedFriend: FriendItem | null;
};
