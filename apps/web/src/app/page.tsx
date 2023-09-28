import { SignUp,SignedIn, SignedOut } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <main className="flex h-screen flex-1 flex-row items-center justify-around bg-gray-800">
      <div className="border-r-2 grow text-center text-white">
        <p className="text-7xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">The Bank</p>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-600">Today, tomorrow, in the future</p>
      </div>
      <div className="grow text-center text-white">
        <SignUp/>
        <SignedIn>
          <div>You are signed in</div>
        </SignedIn>
        <SignedOut>
          <div>You are signed OUT</div>
        </SignedOut>
      </div>
    </main>
  );
}
