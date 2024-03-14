export type FriendItem = {
  friend: { id: number; name: string; image: string; balance: number };
};

export type InitialFriendsData = {
  initialFriends: FriendItem[];
};
