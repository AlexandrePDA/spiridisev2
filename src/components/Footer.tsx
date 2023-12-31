import Link from "next/link";

export function Footer() {
  return (
    <footer className="block mt-12">
      <div className="py-16 md:py-24 lg:py-32 mx-auto w-full max-w-7xl px-5 md:px-10">
        <div className="flex-col flex items-center">
          <div className="text-center font-semibold max-[991px]: max-[991px]:py-1 ">
            <Link
              href="#solutions"
              className="inline-block px-6 py-2 font-normal text-orangespd transition "
            >
              Solutions
            </Link>
            <Link
              href="#about"
              className="inline-block px-6 py-2 font-normal text-orangespd transition "
            >
              Présentation
            </Link>
            <Link
              href="#parcours"
              className="inline-block px-6 py-2 font-normal text-orangespd transition "
            >
              Parcours
            </Link>
            <Link
              href="#contact"
              className="inline-block px-6 py-2 font-normal text-orangespd transition "
            >
              Contact
            </Link>
            <Link
              href="/Privacy"
              className="inline-block px-6 py-2 font-normal text-orangespd transition "
            >
              Mentions légales
            </Link>
          </div>
          <div className="mb-8 mt-8 border border-b border-muted-foregound w-48"></div>

          <p className="max-[479px]:text-sm">
            © Spiridise Copyright 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
