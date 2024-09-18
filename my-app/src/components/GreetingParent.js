import { GreetingChild } from "./GreetingChild";

export function GreetingParent() {
  const age = 25;
  return (
    <div>
      <GreetingChild age={age} />
    </div>
  );
}
