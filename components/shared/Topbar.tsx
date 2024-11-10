import Image from "next/image";
import Link from "next/link";

function Topbar() {
  return (
    // topbar from globals.css
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/Medrin.png" alt="Medrin Logo" width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">
          Medrin Jobs
        </p>
      </Link>
    </nav>
  );
}

export default Topbar;
