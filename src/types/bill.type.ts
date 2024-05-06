import { FriendItem } from "../data/Data.type";

export type billProp = {
  billValue: string | number;
  setBill: React.Dispatch<React.SetStateAction<string | number>>;
  paidByUserValue: string | number;
  whoIsPaying: string;
  setWhoisPaying: React.Dispatch<React.SetStateAction<string>>;
  paidByFriend: string | number;
  selectedFriend: FriendItem | null;
  handleChangePaidByUser: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};
