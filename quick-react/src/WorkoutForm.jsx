import React, { useState } from "react";

function WorkoutForm() {
  const [response, setResponse] = useState(null);

  return (
    <div>
      <p>WorkoutForm is rendering!</p>
      <button onClick={() => setResponse("Test response")}>Click me</button>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
}

export default WorkoutForm;