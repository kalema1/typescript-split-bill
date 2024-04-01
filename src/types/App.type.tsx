import { FriendItem, FriendsProp } from "../data/Data.type";

export type AppProp = {
  showAddFriendForm: boolean;
  handleShowAddfriendForm: () => void;
  selectedFriend: FriendItem | null;
  friends: FriendsProp;
  onFriendSelection: (friend: FriendItem) => void;
  onAddfriend: (friend: FriendItem) => void;
  onSplitBill: (value: number) => void;
};

export type ChildrenProp = { children: React.ReactNode };
