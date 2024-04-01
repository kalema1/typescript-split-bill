import { FriendItem, FriendsProp } from "../data/Data.type";

export type FriendListProps = {
  friend?: FriendItem;
  friends?: FriendsProp;
  onFriendSelection?: (friend: FriendItem) => void;
  selectedFriend?: FriendItem | null;
  key?: string;
};
