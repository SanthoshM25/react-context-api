import { useState } from "react";
import Child from "./Child";
import "./styles.css";
import UserContext from "./UserContext";

export default function App() {
  const [userData, setUserData] = useState({
    name: "hello",
    email: ""
  });

  const changeData = (val) => {
    setUserData({ ...userData, ...val });
    console.log("triggered");
  };

  return (
    <UserContext.Provider value={{ userData, changeData }}>
      <Child />
    </UserContext.Provider>
  );
}
