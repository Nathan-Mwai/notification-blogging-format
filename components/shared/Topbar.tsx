import {
  ClerkProvider,
  OrganizationProfile,
  OrganizationSwitcher,
  SignedIn,
  SignOutButton,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

function Topbar() {
  return (
    // topbar from globals.css
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image
          src="/assets/Medrin.png"
          alt="Medrin Logo"
          width={28}
          height={28}
        />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">
          Medrin Jobs
        </p>
      </Link>

      <div className="flex items-center gap-1">
          <ClerkProvider>
            <div className="block md:hidden">
            <SignedIn>
              <SignOutButton>
                <div className="flex cursor-pointer">
                  <Image
                    src="/assets/logout.svg"
                    alt="logout"
                    width={24}
                    height={24}
                  />
                </div>
              </SignOutButton>
            </SignedIn>
      </div>


            {/* Correct usage of OrganizationProfile with valid children */}

            <OrganizationSwitcher
              appearance={{
                elements: {
                //   organizationSwitcherTriggerIcon: "hidden",
                  organizationSwitcherTrigger: "py-2 px-4",
                },
              }}
            />
          </ClerkProvider>
        </div>
    </nav>
  );
}

export default Topbar;
