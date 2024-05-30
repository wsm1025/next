"use server";

import { revalidatePath } from "next/cache";

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let data = ["阅读", "写作", "冥想"];

export async function findToDos() {
  return data;
}

export async function createToDo(prevState, formData) {
  try {
    await sleep(2500);
    if (Math.random() > 0.5) {
      throw new Error("error"); // 模拟异常
    }
    const todo = formData.get("todo");
    data.push(todo);
    revalidatePath("/form4");
    return {
      message: `add ${todo} success!`,
    };
  } catch (error) {
    return {
      message: "error",
    };
  }
}
