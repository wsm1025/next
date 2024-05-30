"use client";
import { useState } from "react";
// rsc强制开发者对项目进行重新思考
// ，要求开发者进行动静分离，
// 静的内容放在服务端组件中，
// 动的内容放在客户端组件，
// 从而让真正需要在客户端运行的js最小化，
// 让需要hydration的元素最少化，
// 开发者以组件为维度对(动、静)代码进行设计。
// 服务端组件负责获取数据并输出静态内容。
// 客户端组件负责输出动态(有交互有状态)内容

const Count = () => {
  let [count, setCount] = useState(0);
  console.log(window);
  return (
    <>
      count:{count}
      <button
        onClick={() => {
          setCount(++count);
          console.log(count);
        }}
      >
        点击
      </button>
    </>
  );
};
export default Count;
