import { useContext } from "react";
import UserContext from "./UserContext";

export default function Child() {
  const { userData, changeData } = useContext(UserContext);
  return <div onClick={() => changeData({ name: "hi" })}>{userData.name}</div>;
}
