import { sleep } from "@/utils";

export default async function User() {
  await sleep(3000);
  return (
    <div className="h-60 flex-1 rounded-xl bg-teal-400 text-white flex items-center justify-center">
      Hello, user!
    </div>
  );
}
