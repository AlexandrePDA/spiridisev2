import { ModeToggle } from "@/components/toggleTheme";
import Link from "next/link";
import { MyMenu } from "@/components/menu";

export default function NavBar() {
  return (
    <div className="max-w-screen-2xl mx-auto p-4 flex items-center justify-between w-full">
      <Link href={"/"}>
        <div className="flex items-center gap-4">
          <p>🏔️</p>
          <p className="text-xl hidden md:block">Spiridise</p>
        </div>
      </Link>
      <div className="text-xl flex items-center gap-4">
        <MyMenu />
        <ModeToggle />
      </div>
    </div>
  );
}
