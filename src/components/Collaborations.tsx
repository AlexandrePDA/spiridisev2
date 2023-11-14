import Image from "next/image";
import "./slider.css";
import Shine from "../../public/assets/logo-brands/shine.png";
import PC from "../../public/assets/logo-brands/petitscommerces.png";
import MozaikRH from "../../public/assets/logo-brands/mozaikrh.png";
import FR from "../../public/assets/logo-brands/logo-FR.png";
import LM from "../../public/assets/logo-brands/leroymerlin.png";
import BC from "../../public/assets/logo-brands/bluecoders.png";
import Arsen from "../../public/assets/logo-brands/arsen.png";
import Adeo from "../../public/assets/logo-brands/adeo.png";

export function Collaborations() {
  const logos = [
    { src: Shine, alt: "Facebook" },
    { src: MozaikRH, alt: "Airbnb" },
    { src: FR, alt: "Apple" },
    { src: LM, alt: "Spark" },
    { src: BC, alt: "Samsung" },
    { src: PC, alt: "Disney" },
    { src: Arsen, alt: "Quora" },
    { src: Adeo, alt: "Sass" },
  ];

  return (
    <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] h-64">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} className="h-30 w-28" />
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <Image src={logo.src} alt={logo.alt} className="h-30 w-28" />
          </li>
        ))}
      </ul>
    </div>
  );
}
