import { useTranslations } from "next-intl";
import Link from "next/link";

type MenuItem = {
  title: string;
  href: string;
};

function Menu({ className }: { className: string }) {
  const t = useTranslations("Header");

  const menu = t.raw("menu") as MenuItem[];

  return (
    <nav className={className}>
      {menu.map(({ title, href }) => (
        <Link key={href} href={href} className="text-(--text)">
          {title}
        </Link>
      ))}
    </nav>
  );
}

export default Menu;
