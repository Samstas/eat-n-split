import { useFriend } from "../context/FriendContext";
import Friend from "./Friend";

export default function FriendsList() {
  const { friends } = useFriend();
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}
