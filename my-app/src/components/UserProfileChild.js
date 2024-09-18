export function UserProfileChild({ person }) {
  return (
    <div>
      <h3>Name : {person.name} </h3>
      <h3>Age : {person.age} </h3>
      <h3> Email : {person.email} </h3>
    </div>
  );
}
