import { useContext } from "react";
import UserContext from "../context/UserContext";

const UpdateUser = () => {
  // 从 UserContext 中获取 user 和 setUser
  const { user, setUser } = useContext(UserContext);

  // 定义一个函数，用于更新用户名称
  const changeName = () => {
    setUser({ ...user, name: "Bob" });
  };

  return (
    <div>
      {/* 按钮点击时调用 changeName 函数 */}
      <button onClick={changeName}>更改用户名</button>
    </div>
  );
};

export default UpdateUser;
