export type FriendItem = {
  friend: { id: string; name: string; image: string; balance: number };
};

export type InitialFriendsData = {
  initialFriends: FriendItem[];
};
