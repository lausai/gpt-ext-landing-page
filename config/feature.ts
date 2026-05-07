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
      "Type #keyword to instantly expand it into full phrases or templates from your custom list.",
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
    content: "輸入 #關鍵字 即可快速展開成自訂片語或常用範本，加快輸入效率。",
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

interface FeatureBlockMedia {
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string;
}

interface FeatureBlockItem {
  title: string;
  description: string;
  media: FeatureBlockMedia;
  imageRatio: number;
  items: string[];
}

export const FEATURE_BLOCK_EN: FeatureBlockItem[] = [
  {
    title: "Chat Management",
    description: "Manage large volumes of conversations efficiently with bulk actions and structured organization.",
    media: {
      type: "video",
      src: "https://xg329u6pheas2b8n.public.blob.vercel-storage.com/folder.mp4",
      alt: "Chat management feature demo",
    },
    imageRatio: 0.5,
    items: [
      "Bulk archive, delete, and export chats in one action",
      "Export conversations as structured JSON files",
      "Organize chats into folders and nested subfolders",
      "Move multiple conversations between folders at once"
    ],
  },
  {
    title: "Faster Input, Smarter Control",
    description: "Speed up how you write prompts with text expansion and keyboard-driven navigation built directly into the chat input",
    media: {
      type: "video",
      src: "https://xg329u6pheas2b8n.public.blob.vercel-storage.com/te.mp4",
      alt: "Faster input and smarter control feature demo",
    },
    imageRatio: 0.5,
    items: [
      "Expand shortcuts into full prompts while typing",
      "Use multiple text expansions in a single input",
      "Navigate and edit the input box efficiently with Vim-style keys",
      "Reduce mouse usage and keep your focus on writing",
    ],
  },
  {
    title: "Personalization Profiles",
    description: "Save multiple personalization profiles and switch between them to match different tasks, roles, or writing styles.",
    media: {
      type: "video",
      src: "https://xg329u6pheas2b8n.public.blob.vercel-storage.com/ci.mp4",
      alt: "Personalization profiles feature demo",
    },
    imageRatio: 0.5,
    items: [
      "Create and save multiple personalization profiles",
      "Switch profiles instantly without reconfiguring settings",
      "Use different styles or instructions for different contexts",
      "Keep your preferred setup ready for every task",
    ],
  },
  {
    title: "Notion Export",
    description: "Send important chats to Notion and turn scattered conversations into a searchable, organized knowledge base.",
    media: {
      type: "video",
      src: "https://xg329u6pheas2b8n.public.blob.vercel-storage.com/notion.mp4",
      alt: "Notion export feature demo",
    },
    imageRatio: 0.5,
    items: [
      "Save individual chats or multiple selected conversations to Notion",
      "Choose a destination page and keep exports organized in one place",
      "Turn ChatGPT conversations into reusable notes inside your workspace",
      "Keep important insights, prompts, and answers easy to find later",
    ],
  }
]



export const FEATURE_BLOCK_ZH: FeatureBlockItem[] = [
  {
    title: "聊天管理",
    description: "透過批次操作與結構化整理方式，高效管理大量聊天內容。",
    media: {
      type: "video",
      src: "https://xg329u6pheas2b8n.public.blob.vercel-storage.com/folder.mp4",
      alt: "聊天管理功能展示",
    },
    imageRatio: 0.5,
    items: [
      "一次完成多筆聊天的封存、刪除與匯出",
      "將聊天內容匯出為結構化的 JSON 檔案",
      "使用資料夾與巢狀子資料夾整理聊天內容",
      "一次將多筆聊天移動到指定的資料夾",
    ],
  },
  {
    title: "更快輸入，更好掌控",
    description: "透過文字展開與鍵盤導向的操作方式，加快撰寫提示詞並提升輸入時的掌控感。",
    media: {
      type: "video",
      src: "https://xg329u6pheas2b8n.public.blob.vercel-storage.com/te.mp4",
      alt: "更快輸入與更好掌控功能展示",
    },
    imageRatio: 0.5,
    items: [
      "在輸入時將快捷字串展開為完整提示詞",
      "在同一個輸入框中多次使用文字展開",
      "使用 Vim 風格快捷鍵高效瀏覽與編輯輸入內容",
      "減少滑鼠操作，專注於文字輸入本身",
    ],
  },
  {
    title: "個人化設定檔",
    description: "儲存多組個人化設定，並依不同任務、角色或寫作風格快速切換。",
    media: {
      type: "video",
      src: "https://xg329u6pheas2b8n.public.blob.vercel-storage.com/ci.mp4",
      alt: "個人化設定檔功能展示",
    },
    imageRatio: 0.5,
    items: [
      "建立並儲存多組個人化設定檔",
      "即時切換設定，無需重新調整參數",
      "針對不同情境使用不同風格或指示",
      "隨時套用最適合當下需求的設定",
    ],
  },
  {
    title: "匯出到 Notion",
    description: "將重要對話儲存到 Notion，把零散的聊天內容整理成可搜尋、易於管理的知識庫。",
    media: {
      type: "video",
      src: "https://xg329u6pheas2b8n.public.blob.vercel-storage.com/notion.mp4",
      alt: "匯出到 Notion 功能展示",
    },
    imageRatio: 0.5,
    items: [
      "將單一對話或多個已選取的聊天批次儲存到 Notion",
      "選擇儲存目的頁面，讓所有匯出內容集中整理",
      "把 ChatGPT 對話轉成可在工作空間中重複利用的筆記",
      "讓重要洞察、提示詞與回答之後都能快速找到",
    ],
  }
]



interface FeaturesCollection {
  [key: `FEATURES_${string}`]: {
    title: string;
    content: string;
    icon: IconType | LucideIcon | string;
  }[];
}

interface FeatureBlocksCollection {
  [key: `FEATURE_BLOCK_${string}`]: FeatureBlockItem[];
}

export const ALL_FEATURES: FeaturesCollection = {
  FEATURES_EN,
  FEATURES_ZH,
}


export const ALL_FEATURE_BLOCKS: FeatureBlocksCollection = {
  FEATURE_BLOCK_EN,
  FEATURE_BLOCK_ZH,
}
