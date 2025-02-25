import { useState } from "react";
import RegistForm from "./RegistForm";

const RegistPage = () => {
  const [submittedData, setSubmittedData] = useState(null);

  const handleFormSubmit = (data) => {
    setSubmittedData(data); // 接收子组件传递的数据
  };

  return (
    <div>
      <h1>用户注册</h1>
      <RegistForm onSubmit={handleFormSubmit} />
      {submittedData && (
        <div>
          <h2>提交的数据：</h2>
          <p>姓名：{submittedData.name}</p>
          <p>邮箱：{submittedData.email}</p>
        </div>
      )}
    </div>
  );
};

export default RegistPage;
