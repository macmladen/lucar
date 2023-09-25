import Logo from "@/components/header/logo";
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";

export default function Bottom() {
  return (
    <section id="bottom" className="">
      <div className="container flex flex-wrap gap-5 py-8 xl:flex-nowrap">
        <div className="w-full min-w-[280px] lg:flex-1">
          <h3 className="pb-2 text-xl font-black">O nama</h3>
          <hr className="pb-4" />
          <Logo />
          <p className="pb-2 pt-4 text-sm">
            <strong>"Lucar" SZTR</strong> je mala porodična firma iz Novog Sada.
          </p>
          <p className="pb-2 text-sm">
            Osnovana je 2004. kao servis za ugradnju autogas sistema za
            automobile.
          </p>
          <p className="pb-2 text-sm">
            Otada se posao širio, naša interesovanja su bila usmerena i na druge
            stvari, pa smo 2020. počeli da proizvodimo i ugrađujemo segmentna
            industrijska i garažna vrata.
          </p>
        </div>
        <div className="min-w-fit flex-1">
          <h3 className="pb-2 text-xl font-black">Proizvodi</h3>
          <hr className="pb-4" />
          <ul>
            <li className="pt-3">
              <a href="/segment">Segmentna vrata</a>
            </li>
            <li className="pt-3">
              <a href="/rolo">Rolo vrata</a>
            </li>
            <li className="pt-3">
              <a href="/pergola">Pergole</a>
            </li>
            <li className="pt-3">
              <a href="/mosquito-net">Komarnici</a>
            </li>
            <li className="pt-3">
              <a href="/tng">TNG uređaji</a>
            </li>
            <li className="pt-3">
              <a href="/cng">CNG uređaji</a>
            </li>
            <li className="pt-3">
              <a href="/about">O nama</a>
            </li>
          </ul>
        </div>
        <div className="min-w-fit flex-1">
          <h3 className="pb-2 text-xl font-black">Kontakt</h3>
          <hr className="pb-4" />
          <p className="pb-4">
            <Phone /> <a href="tel:+381642446031">+381 64 244-6031</a>,<br />
            <Phone /> <a href="tel:+381638085113">+381 63 808-5113</a>
          </p>
          <p className="pb-4">
            <MapPin />
            Povrtarska 30,
            <br />
            <span className="pl-7">Novi Sad</span>
          </p>
          <p className="pb-4">
            <Mail />{" "}
            <a href="mailto:info@lovato-srbija.rs">info@lovato-srbija.rs</a>
          </p>
          <p className="pb-4">
            <a className="social-icons" href="https://instagram.com">
              <Instagram size={48} />
            </a>
            <a className="social-icons" href="https://facebook.com">
              <Facebook size={48} />
            </a>
            <a className="social-icons" href="https://youtube.com">
              <Youtube size={48} />
            </a>
          </p>
        </div>
        <div className="min-w-fit flex-1">
          <h3 className="pb-2 text-xl font-black">Radno vreme</h3>
          <hr className="pb-4" />
          <p>Ponedeljak – petak 08-16</p>
          <p>Subota 09-14</p>
          <p>Nedeljom ne radimo</p>
        </div>
      </div>
    </section>
  );
}
