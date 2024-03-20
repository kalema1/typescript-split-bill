export type FriendItem = {
  id: string;
  name: string;
  image: string;
  balance: number;
};

export type InitialFriendsData = {
  initialFriends: FriendItem[];
};
