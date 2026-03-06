"use client";

import { Button, Dropdown, Space } from "antd";
import type { DropdownProps, MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { createStyles } from "antd-style";

import { routing } from "@/i18n/routing";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale } from "next-intl";

type Locale = (typeof routing.locales)[number];

const useStyles = createStyles(({ token }) => ({
  root: {
    backgroundColor: token.motionDurationSlow,
    border: `1px solid ${token.colorBorder}`,
    borderRadius: token.borderRadius,
  },
}));

export default function LangDropdown() {
  const { styles } = useStyles();

  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale() as Locale;

  const items: MenuProps["items"] = routing.locales.map((l) => ({
    key: l, // key = locale
    label: l.toUpperCase(),
    // tanlanganini UI’da ko‘rsatish uchun:
    disabled: l === currentLocale,
  }));

  const onClick: MenuProps["onClick"] = ({ key }) => {
    const nextLocale = key as Locale;
    if (nextLocale === currentLocale) return;

    router.replace(pathname, { locale: nextLocale });
    router.refresh(); // sizdagi custom dagidek
  };

  const dropdownProps: DropdownProps = {
    menu: { items, onClick, selectable: true, selectedKeys: [currentLocale] },
    placement: "bottomLeft",
    trigger: ["click"],
    classNames: { root: styles.root },
  };

  return (
    <Dropdown {...dropdownProps}>
      <Button
        type="text"
        style={{ background: "transparent", color: "var(--text)", padding: "0" }}
      >
        <Space>
          {currentLocale.toUpperCase()}
          <DownOutlined className="bg-transparent" />
        </Space>
      </Button>
    </Dropdown>
  );
}
