"use client";
import { SignedIn, SignedOut, RedirectToSignIn, SignOutButton, UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

      <SignedIn>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome to Your Dashboard</h1>
          <p className="text-gray-600 mb-6">You are signed in successfully!</p>

          <UserButton afterSignOutUrl="/" />

          <SignOutButton>
            <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700">
              Sign Out
            </button>
          </SignOutButton>
        </div>
      </SignedIn>
    </div>
  );
}
