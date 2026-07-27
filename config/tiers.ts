
import { siteConfig } from "@/config/site";
import { Tier, TiersEnum, FrequencyEnum } from "@/types/pricing";

export const TIERS_EN: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "Free Plan",
    price: "Free",
    href: siteConfig.extensionUrl || '#',
    description:
      "Get access to many features for free.",
    features: [
      "Create up to 3 folders to organize conversations",
      "Create up to 2 custom instruction profiles",
      "Create up to 5 custom text expansions",
      "Bulk delete, archive, or export conversations",
      "Basic prompt outline side panel",
      "Save individual chats to Notion",
      "Vim-inspired keybindings",
    ],
    buttonText: "Get started",
    buttonColor: "primary",
    buttonVariant: "solid",
    priceId: "",
  },
  {
    key: TiersEnum.ProMonthly,
    title: "Pro Plan (Monthly)",
    href: siteConfig.authors[0].twitter || "#",
    description: "Unlock unlimited access for all features.",
    price: "$3",
    features: [
      "Everything in the Free plan",
      "Unlimited folders",
      "Unlimited custom instruction profiles",
      "Unlimited custom text expansions",
      "Batch save multiple chats to Notion at once",
      "Prompt outline side panel with filter and Go to",
    ],
    buttonText: "Upgrade to pro",
    buttonColor: "default",
    buttonVariant: "flat",
    priceId: "pri_01khbdsphm29haq54m3h87w8cx",
  },
  {
    key: TiersEnum.ProYearly,
    title: "Pro Plan (Yearly)",
    href: siteConfig.authors[0].twitter || "#",
    description: "Unlock unlimited access for all features.",
    price: "$30",
    features: [
      "Everything in the Free plan",
      "Unlimited folders",
      "Unlimited custom instruction profiles",
      "Unlimited custom text expansions",
      "Batch save multiple chats to Notion at once",
      "Prompt outline side panel with filter and Go to",
    ],
    buttonText: "Upgrade to pro",
    buttonColor: "default",
    buttonVariant: "flat",
    priceId: "pri_01khbemdy62e3jfnjs9cven3mv",
  },
];

export const TIERS_ZH: Array<Tier> = [
  {
    key: TiersEnum.Free,
    title: "免費",
    price: "免費",
    href: siteConfig.extensionUrl || '#',
    description: "免費體驗多項功能。",
    features: [
      "建立最多三個資料夾來整理對話",
      "建立最多兩組個人化設定",
      "建立最多五組自訂文字展開（Text Expansions）",
      "批次刪除、封存或匯出對話",
      "隱藏舊訊息，保持長對話流暢",
      "基礎版 Prompt Outline 側邊欄",
      "將單一聊天儲存到 Notion",
      "使用 Vim 風格的鍵盤快捷鍵",
    ],
    buttonText: "開始",
    buttonColor: "primary",
    buttonVariant: "solid",
    priceId: "",
  },
  {
    key: TiersEnum.ProMonthly,
    title: "專業方案 (月繳)",
    href: siteConfig.authors[0].twitter || "#",
    description: "升級即可無限制使用全部功能。",
    price: "$3",
    features: [
      "包含免費方案的所有功能",
      "資料夾數量無限制",
      "個人化指令設定檔無限制",
      "自訂文字展開無限制",
      "一次將多個聊天批次儲存到 Notion",
      "Prompt Outline 側邊欄篩選與跳轉功能",
    ],
    buttonText: "升級為專業版",
    buttonColor: "default",
    buttonVariant: "flat",
    priceId: "pri_01khbdsphm29haq54m3h87w8cx",
  },
  {
    key: TiersEnum.ProYearly,
    title: "專業方案 (年繳)",
    href: siteConfig.authors[0].twitter || "#",
    description: "升級即可無限制使用全部功能。",
    price: "$30",
    features: [
      "包含免費方案的所有功能",
      "資料夾數量無限制",
      "個人化指令設定檔無限制",
      "自訂文字展開無限制",
      "一次將多個聊天批次儲存到 Notion",
      "Prompt Outline 側邊欄篩選與跳轉功能",
    ],
    buttonText: "升級為專業版",
    buttonColor: "default",
    buttonVariant: "flat",
    priceId: "pri_01khbemdy62e3jfnjs9cven3mv",
  },
];


interface TiersCollection {
  [key: `TIERS_${string}`]: Array<Tier>;
}

export const ALL_TIERS: TiersCollection = {
  TIERS_EN,
  TIERS_ZH,
}

export const PADDLE_TOKEN: string = "live_a2508f5d3f593ee084d20338916"
export const PADDLE_ENV_SENDBOX: boolean = false
