import useUserContext from "../context/UserContext";

export default function Profile() {
  const { user } = useUserContext();

  if (!user) return <div>Please login</div>;

  return <div>Welcome {user.username}</div>;
}
