
import { siteConfig } from "@/config/site";
import { Tier, TiersEnum } from "@/types/pricing";

export const TIERS_EN: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Free Plan",
    price: "Free",
    href: siteConfig.openSourceURL || "#",
    description:
      "Get access to many features for free.",
    features: [
      "Create up to 3 folders to organize conversations",
      "Create up to 2 custom instruction profiles",
      "Create up to 5 custom text expansions",
      "Bulk delete, archive, or export conversations",
      "Vim-inspired keybindings",
    ],
    buttonText: "Get started",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Pro,
    title: "Preminm Plan",
    href: siteConfig.authors[0].twitter || "#",
    description: "Unlock unlimited access for all features.",
    price: "$3",
    features: [
      "Everything in the Free plan",
      "Unlimited folders",
      "Unlimited custom instruction profiles",
      "Unlimited custom text expansions"
    ],
    buttonText: "Upgrade to pro",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];

export const TIERS_ZH: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "免費",
    price: "免費",
    href: siteConfig.openSourceURL || "#",
    description: "免費體驗多項功能。",
    features: [
      "建立最多三個資料夾來整理對話",
      "建立最多兩組個人化設定",
      "建立最多五組自訂文字展開（Text Expansions）",
      "批次刪除、封存或匯出對話",
      "使用 Vim 風格的鍵盤快捷鍵",
    ],
    buttonText: "開始",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Pro,
    title: "Preminm",
    href: siteConfig.authors[0].twitter || "#",
    description: "升級即可無限制使用全部功能。",
    price: "$3",
    features: [
      "包含免費方案的所有功能",
      "資料夾數量無限制",
      "個人化指令設定檔無限制",
      "自訂文字展開無限制",
    ],
    buttonText: "聯絡我們",
    buttonColor: "default",
    buttonVariant: "flat",
  },
];


interface TiersCollection {
  [key: `TIERS_${string}`]: Array<Tier>;
}

export const ALL_TIERS: TiersCollection = {
  TIERS_EN,
  TIERS_ZH,
}
