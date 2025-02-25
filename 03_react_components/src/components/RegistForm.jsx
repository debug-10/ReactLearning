import { useState } from "react";

const RegistForm = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // 阻止表单默认提交行为
    onSubmit({ name, email }); // 将数据传递给父组件
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">姓名：</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">邮箱：</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button>提交</button>
    </form>
  );
};

export default RegistForm;
