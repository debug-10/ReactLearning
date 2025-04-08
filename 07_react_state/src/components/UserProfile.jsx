import { useContext } from "react";
import UserContext from "../context/UserContext";

const UserProfile = () => {
  // 从 UserContext 中获取 user 数据
  const { user } = useContext(UserContext);

  return (
    <div>
      <h2>个人资料</h2>
      {/* 显示用户姓名 */}
      <p>姓名: {user.name}</p>
      {/* 显示用户年龄 */}
      <p>年龄: {user.age}</p>
    </div>
  );
};

export default UserProfile;
