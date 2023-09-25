import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function TopSection() {
  // Keep style, stupid tailwind 'lucide'
  return (
    <section id="top-section" className="bg-lucar-blue py-6 text-sm text-white">
      <p className="container flex flex-col gap-y-2 md:flex-row md:flex-wrap xl:gap-x-4">
        <span className="w-full md:w-1/2 xl:w-auto">
          <Clock /> Ponedeljak – petak 08-16, Subota 09-14
        </span>
        <span className="w-full md:w-1/2 xl:w-auto">
          <Phone /> <a href="tel:+381642446031">+381642446031</a>,{" "}
          <a href="tel:+381638085113">+381638085113</a>
        </span>
        <span className="w-full md:w-1/2 xl:w-auto">
          <Mail />{" "}
          <a href="mailto:info@lovato-srbija.rs">info@lovato-srbija.rs</a>
        </span>
        <span className="w-full md:w-1/2 xl:w-auto">
          <MapPin /> <a href="#map">Povrtarska 30, Novi Sad</a>
        </span>
      </p>
    </section>
  );
}
