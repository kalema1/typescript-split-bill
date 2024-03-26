import { FriendItem } from "../data/Data.type";

export type SplitBillProps = {
  selectedFriend: FriendItem;
  onSplitBill: (value: number) => void;
};
