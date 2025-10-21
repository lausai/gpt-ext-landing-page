import { LucideIcon, MagnetIcon } from "lucide-react";
import { IconType } from "react-icons";
import { FaKeyboard } from "react-icons/fa";
import { MdTextFields } from "react-icons/md";
import { HiChatBubbleOvalLeftEllipsis, HiMiniFolder, HiMiniUsers, HiArrowTopRightOnSquare } from "react-icons/hi2";

export const FEATURES_EN = [
  {
    title: "Bulk Chat Management",
    content: "Quickly delete, archive, or export multiple chats in one go to streamline your workspace.",
    icon: HiChatBubbleOvalLeftEllipsis,
  },
  {
    title: "Folder-Based Organization",
    content:
      "Create custom folders to categorize and organize your conversations by topic or project.",
    icon: HiMiniFolder,
  },
  {
    title: "Vim-Inspired Navigation",
    content:
      "Use hjkl, 0, and Shift + $ to move your cursor like in Vim—directly inside the ChatGPT",
    icon: FaKeyboard,
  },
  {
    title: "Smart Text Expansions",
    content:
      "Type @keyword to instantly expand it into full phrases or templates from your custom list.",
    icon: MdTextFields,
  },
  {
    title: "Personalized Presets",
    content:
      "Define multiple preset configurations and switch between them to match different workflows.",
    icon: HiMiniUsers,
  },
  {
    title: "Seamless Chat Export",
    content:
      "Export your selected chats as clean, structured JSON files for backup or analysis.",
    icon: HiArrowTopRightOnSquare,
  },
];

export const FEATURES_ZH = [
  {
    title: "批量對話管理",
    content: "一鍵快速刪除、封存或匯出多個對話，讓你的對話列表更整潔高效。",
    icon: HiChatBubbleOvalLeftEllipsis,
  },
  {
    title: "資料夾分類管理",
    content: "建立自訂資料夾，依照主題或專案整理對話，提升工作效率。",
    icon: HiMiniFolder,
  },
  {
    title: "Vim 快捷鍵導覽",
    content: "在輸入框中使用 hjkl、0、Shift + $ 等 Vim 鍵位，快速精準移動游標。",
    icon: FaKeyboard,
  },
  {
    title: "智慧文字展開",
    content: "輸入 @關鍵字 即可快速展開成自訂片語或常用範本，加快輸入效率。",
    icon: MdTextFields,
  },
  {
    title: "個人化設定組",
    content: "建立多組個人化設定，隨時切換以符合不同使用情境或偏好。",
    icon: HiMiniUsers,
  },
  {
    title: "順暢對話匯出",
    content: "將選取的對話匯出成乾淨、結構化的 JSON 檔案，便於備份與分析。",
    icon: HiArrowTopRightOnSquare,
  },
];


interface FeaturesCollection {
  [key: `FEATURES_${string}`]: {
    title: string;
    content: string;
    icon: IconType | LucideIcon | string;
  }[];
}

export const ALL_FEATURES: FeaturesCollection = {
  FEATURES_EN,
  FEATURES_ZH,
}
