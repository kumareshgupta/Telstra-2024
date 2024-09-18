import { UserProfileChild } from "./UserProfileChild";

export function UserProfileParent() {
  const person = { name: "John Doe", age: 30, email: "john@example.com" };
  return (
    <div>
      <UserProfileChild person={person} />
    </div>
  );
}
