import { ContactData } from "@/api/get.api";
import Link from "next/link";
import { BsFacebook, BsInstagram, BsTelegram, BsYoutube } from "react-icons/bs";

function Socials({ contact }: { contact: ContactData | null }) {
  return (
    <div className="flex items-center gap-1 sm:gap-5 flex-wrap">
      {
        contact?.instagram && (
          <Link href={contact.instagram} target="_blank" className="text-black hover:text-black/50 hover:bg-(--card) transition-colors bg-white px-2 py-2 rounded-full">
            <BsInstagram />
          </Link>
        )
      }
      {
        contact?.telegram && (
          <Link href={contact.telegram} target="_blank" className="text-black hover:text-black/50 hover:bg-(--card) transition-colors bg-white px-2 py-2 rounded-full">
            <BsTelegram />
          </Link>
        )
      }
      {
        contact?.facebook && (
          <Link href={contact.facebook} target="_blank" className="text-black hover:text-black/50 hover:bg-(--card) transition-colors bg-white px-2 py-2 rounded-full">
            <BsFacebook />
          </Link>
        )
      }
      {
        contact?.youtube && (
          <Link href={contact.youtube} target="_blank" className="text-black hover:text-black/50 hover:bg-(--card) transition-colors bg-white px-2 py-2 rounded-full">
            <BsYoutube />
          </Link>
        )
      }
    </div>
  );
}

export default Socials;
