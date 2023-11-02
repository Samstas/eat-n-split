import { createContext, useContext, useState } from "react";
import { initialFriends } from "../data/initialFriends";

const FriendContext = createContext();

export function FriendProvider({ children }) {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function toggleFriendForm() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    // console.log(friend.id)
    setShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  const contextValue = {
    friends,
    showAddFriend,
    selectedFriend,
    toggleFriendForm,
    handleAddFriend,
    handleSelection,
    handleSplitBill,
  };

  return (
    <FriendContext.Provider value={contextValue}>
      {children}
    </FriendContext.Provider>
  );
}

export function useFriend() {
  const context = useContext(FriendContext);
  if (context === undefined)
    throw new Error("FriendContext was used outside of the FriendProvider");

  return context;
}
