import { useState } from "react";
import { Button } from "./components/ui/button";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="tw-my-12 tw-flex tw-justify-center">
      <Button onClick={() => setCount((current) => current + 1)}>
        Increment - {count}
      </Button>
    </div>
  );
}

export default App;
