import Conversations from "@/components/shared/Conversations";
import UserSearch from "@/components/shared/UserSearch";

export default function Home() {
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
