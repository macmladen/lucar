import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function TopSection() {
  // Keep style, stupid tailwind 'lucide'
  return (
    <section className="bg-lucar-blue p-4 text-sm text-white">
      <p className="container">
        <Clock />
        Ponedeljak – petak 09-19, Subota 09-15
        <Phone />
        <a href="tel:+381642446031">+381642446031</a>,{" "}
        <a href="tel:+381638085113">+381638085113</a>
        <Mail />
        <a href="office@lucar.rs">office@lucar.rs</a>
        <MapPin />
        <a href="#map">Povrtarska 30, Novi Sad</a>
      </p>
    </section>
  );
}
