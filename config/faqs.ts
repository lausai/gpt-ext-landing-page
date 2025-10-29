export const FAQS_EN = [
  {
    title: "Do you offer refunds?",
    content:
      "We offer a 14-day money-back guarantee for Pro plan. If you're not satisfied, you can request a refund within the first 14 days according to our refund policy.",
  },
  {
    title: "Can I cancel my subscription anytime?",
    content:
      "Yes! You can cancel anytime using the invoice you received in your email. Feel free to reach out to us if you need help with cancelation.",
  },
  {
    title: "Are my chats saved anywhere other than my personal device?",
    content:
      "No. This extension does not save your chats anywhere other than your personal device.",
  },
];

export const FAQS_ZH = [
  {
    title: "你們提供退款服務嗎？",
    content:
      "我們針對 Pro 方案提供 14 天內的退款保證。若您不滿意，可依照退款政策在購買後 14 天內申請退款。",
  },
  {
    title: "我可以隨時取消訂閱嗎？",
    content:
      "可以！您可以透過 email 中的發票隨時取消訂閱。如果需要協助取消，歡迎與我們聯繫。",
  },
  {
    title: "我的對話會儲存在裝置以外的地方嗎？",
    content:
      "不會。這個擴充功能不會將您的對話儲存在個人裝置以外的任何地方。",
  },
];

interface FAQSCollection {
  [key: `FAQS_${string}`]: {
    title: string;
    content: string;
  }[];
}
export const ALL_FAQS: FAQSCollection = {
  FAQS_EN,
  FAQS_ZH,
}
