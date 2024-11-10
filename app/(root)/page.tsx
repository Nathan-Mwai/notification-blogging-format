import { UserButton, useClerk } from "@clerk/nextjs";

export default function Home() {
  // for clerk signing in and signing out
  const { signOut } = useClerk();

  // Define a custom sign-out handler
  const handleSignOut = () => {
    // Sign out and redirect to the home page (or any other page)
    signOut({ redirectUrl: '/' });
  };

  return (
    <div>
      {/* You can handle the sign-out with a custom button */}
      <button onClick={handleSignOut}>Sign Out</button>

      {/* You can still use the UserButton without the afterSignOut prop */}
      <UserButton />
    </div>
  );
}
