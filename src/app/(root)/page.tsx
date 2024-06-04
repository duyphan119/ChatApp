import Conversations from "@/components/shared/Conversations";
import UserSearch from "@/components/shared/UserSearch";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = auth();
  console.log(userId);
  // const user = await getUserById(userId!);
  // console.log(user);
  return (
    <>
      <div className="max-w-xl mx-auto space-y-8">
        <UserSearch />
        <div className="space-y-4">
          <h1 className="text-center text-4xl font-bold uppercase">
            Your friends
          </h1>
          <div className="">
            <Conversations />
          </div>
        </div>
      </div>
    </>
  );
}
