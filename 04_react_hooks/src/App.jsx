import React, { useState, useDebugValue, useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle";
import TextInput from "./components/TextInput";
import TodoList from "./components/ToDoList";
import FetchData from "./components/FetchData";
import PageTitle from "./components/PageTitle";
import CurrentTime from "./components/CurrentTime";
import Weather from "./components/Weather";

import LoginForm from "./components/LoginForm"; // 确保路径正确
import LoginButton from "./components/LoginButton.jsx";
import LoginProvider from "./components/LoginProvider.jsx";

import Counter from "./components/Counter.jsx";
import Form from "./components/Form.jsx";
import ThemeProvider from "./components/ThemeProvider";
import ThemeButton from "./components/ThemeButton";
import UserPage from "./components/UserPage";
import ExpensiveCalculationParent from "./components/ExpensiveCalculationParent";
import ListFilterParent from "./components/ListFilterParent";
import Parent from "./components/Parent";
import ExpensiveComponentParent from "./components/ExpensiveComponentParent";
import FocusInput from "./components/FocusInput";
import PreviousValue from "./components/PreviousValue.jsx";
import Parent1 from "./components/Parent1.jsx";
import Parent2 from "./components/Parent2.jsx";
import ComponentSize from "./components/ComponentSize.jsx";
import AnimateBox from "./components/AnimateBox.jsx";
import Data from "./components/Data.jsx";
import Search from "./components/Search.jsx";

// 自定义 Hook：useCustomHook
function useCustomHook(value) {
  // 使用 useDebugValue 在 React DevTools 中显示调试信息
  useDebugValue(value ? "Active" : "Inactive");
  // 返回传入的 value
  return value;
}

// 自定义 Hook：useApi
function useApi(url) {
  const [data, setData] = useState(null); // 初始化数据状态为 null

  // 使用 useDebugValue 在 React DevTools 中显示调试信息
  useDebugValue(data ? "Data Loaded" : "Loading");

  // 使用 useEffect 来加载数据
  useEffect(() => {
    fetch(url) // 发起网络请求
      .then((res) => res.json()) // 将响应转换为 JSON
      .then((json) => setData(json.data)); // 更新数据状态
  }, [url]); // 依赖数组包含 url，只有 url 变化时重新加载数据

  return data; // 返回加载的数据
}

const App = () => {
  // 使用 useState 创建一个名为 isActive 的状态变量，初始值为 false
  const [isActive, setIsActive] = useState(false);
  // 使用自定义 Hook，传入 isActive 状态
  useCustomHook(isActive);

  const data = useApi("https://api.xygeng.cn/one"); // 使用自定义 Hook 加载数据
  // 如果数据尚未加载完成，显示加载中提示
  if (!data) return <p>加载中...</p>;

  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };
  return (
    <>
      {/* <ThemeToggle /> */}
      {/* <TextInput /> */}
      {/* <TodoList /> */}
      {/* <FetchData /> */}
      {/* <PageTitle /> */}
      {/* <CurrentTime /> */}
      {/* <Weather /> */}

      {/* <LoginProvider>
        {" "}
        <div style={{ textAlign: "center" }}>
          <h1>登陆系统</h1>
          <LoginForm />
          <LoginButton />{" "}
        </div>{" "}
      </LoginProvider> */}

      {/* useReducer */}
      {/* <Counter /> */}
      {/* <Form /> */}

      {/* useContext */}
      {/* <div>
        <ThemeProvider>
          <ThemeButton />
        </ThemeProvider>
      </div> */}
      {/* <UserPage /> */}

      {/* useMemo */}
      {/* <ExpensiveCalculationParent /> */}
      {/* <ListFilterParent /> */}

      {/* useCallback */}
      {/* <Parent /> */}
      {/* <ExpensiveComponentParent /> */}

      {/* useRef */}
      {/* <FocusInput /> */}
      {/* <PreviousValue /> */}

      {/* uselmperativeHandle */}
      {/* <Parent1 /> */}
      {/* <Parent2 /> */}

      {/* useLayoutEffect */}
      {/* <ComponentSize /> */}
      {/* <AnimateBox /> */}

      {/* useDebugValue */}
      {/* <>
        <button onClick={() => setIsActive(!isActive)}>
          {isActive ? "Deactivate" : "Activate"}
        </button>
      </> */}
      {/* <div>
        <h2>{data.content}</h2>
        <p>来源：{data.origin}</p>
        <p>作者：{data.name}</p>
        <p>标签：{data.tag}</p>
      </div> */}

      {/* 自定义Hook */}
      {/* <Data /> */}
      {/* <h1>Search Example</h1>
      <Search onSearch={handleSearch} /> */}
    </>
  );
};

export default App;
