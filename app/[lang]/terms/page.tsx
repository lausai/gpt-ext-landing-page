import { TitleListItem, ListItem, SectionTitle, Email } from "@/components/ui/terms";
import Link from "next/link";


export default async function TermsPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return (
    <>
      <div
        className="flex flex-col justify-center lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto md:gap-3 pt-16"
      >
        <h3 className="tracking-tight mt-2">
            AI Chat Powerkit Terms of Service
        </h3>
        <h6 className="tracking-tight mt-2">
        Last Updated: October 30, 2025
        </h6>
        <p className="text-xl">
          Welcome to AI Chat Powerkit! This Terms of Service (“Terms”) governs your access to and use of our browser extension. By using AI Chat Powerkit, you agree to be bound by these Terms.
        </p>
      </div>

      <div
        className="flex flex-col justify-center lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto md:gap-6 pt-10"
      >
        <SectionTitle text="Overview"></SectionTitle>
        <div>
          <p className="text-xl">
            AI Chat Powerkit is a browser extension designed to enhance your experience on ChatGPT.com. It allows features such as multi-chat export, folder organization, text expansions, and more.
          </p>
          <p className="text-xl pt-3">
            We are an independent developer and not affiliated with OpenAI.
          </p>
        </div>

        
        <SectionTitle text="Account Creation"></SectionTitle>
        <p className="text-xl">
          You don’t need to sign up manually. When you install the extension, we automatically create an account for you using your ChatGPT email address. This makes onboarding seamless and quick.
        </p>


        <SectionTitle text="Plans and Pricing"></SectionTitle>
        <div>
          <p className="text-xl">
            We offer three user types:
          </p>
          <ul className="pt-3 list-disc list-inside">
            <TitleListItem title="Free Trial Users:" content="New users automatically receive a 30-day free trial with access to all Pro features. No payment or credit card is required during this period."></TitleListItem>
            <TitleListItem title="Free Users:" content="After the free trial ends, users are downgraded to the Free plan, which includes limited features and storage."></TitleListItem>
            <TitleListItem title="Pro Users:" content="$3/month subscription that unlocks all premium features and unlimited storage."></TitleListItem>
          </ul>
          <p className="text-xl pt-3">
            The Pro plan will be available via Paddle. It will include auto-renewal and can be canceled at any time.
          </p>
        </div>


        <SectionTitle text="Payment Terms"></SectionTitle>
        <div>
          <p className="text-xl">
            Payments are securely processed via Paddle, our third-party payment provider. The Pro plan is billed monthly and auto-renews by default.
          </p>
          <p className="text-xl pt-3">
            You can cancel your subscription anytime. After canceling, Pro access remains active until the end of your billing period.
          </p>
          <p className="text-xl pt-3">
            Please keep in mind:
          </p>
          <ul className="pt-3 list-disc list-inside">
            <ListItem content="All prices may change in the future with prior notice."></ListItem>
            <ListItem content="You are responsible for keeping your payment information up to date."></ListItem>
          </ul>
        </div>
        

        <SectionTitle text="Refund Policy"></SectionTitle>
        <div>
          <p className="text-xl">
            We offer a 14-day money-back guarantee, no questions asked.
          </p>
          <p className="text-xl pt-3">
            To request a refund:
          </p>
          <ul className="pt-3 list-disc list-inside">
            <ListItem content="You can contact Paddle directly via your invoice."></ListItem>
            <li className="text-lg list-disc list-inside pb-3">Or email us at <Email></Email> with your payment email.</li>
          </ul>
          <p className="text-xl pt-3">
            We will process your refund as soon as possible.
          </p>
        </div>


        <SectionTitle text="Your Data"></SectionTitle>
        <div>
          <p className="text-xl">
            We store some user data (e.g. chat UUIDs, folders, expansions, settings) on our server in encrypted form. We do not store any chat content.
          </p>
          <p className="text-xl pt-3">
            Data is stored to enable multi-device sync and cloud-based features. We are committed to protecting your privacy — see our <Link className="underline" href="/privacy-policy">Privacy Policy</Link> for more.
          </p>
        </div>


        <SectionTitle text="Requesting Data Deletion"></SectionTitle>
        <div>
          <p className="text-xl">
            You can request deletion of your personal data at any time by emailing us at <Email></Email>, using the same email associated with your account.
          </p>
          <p className="text-xl pt-3">
            To ensure your privacy, we may need to verify your identity (e.g., the request must come from your registered email).
          </p>
          <p className="text-xl pt-3">
            Once verified, we will process your request within 30 days. Certain data may be retained for legal or administrative reasons (e.g., payment records).
          </p>
        </div>


        <SectionTitle text="Acceptable Use"></SectionTitle>
        <div>
          <p className="text-xl">
            You agree not to:
          </p>
          <ul className="pt-3 list-disc list-inside">
            <ListItem content="Copy, resell, or redistribute the extension or any part of the service"></ListItem>
            <ListItem content="Misuse the service in a way that harms other users or violates laws"></ListItem>
            <ListItem content="Reverse engineer the extension’s code"></ListItem>
          </ul>
          <p className="text-xl pt-3">
            We reserve the right to suspend or terminate your access if you violate these terms.
          </p>
        </div>


        <SectionTitle text="Updates and Availability"></SectionTitle>
        <div>
          <p className="text-xl">
            We aim to improve and maintain the extension regularly. However, we cannot guarantee ongoing updates indefinitely, especially if operating costs cannot be reasonably sustained.            
          </p>
          <p className="text-xl pt-3">
            We reserve the right to change or discontinue features at any time.
          </p>
        </div>


        <SectionTitle text="Limitation of Liability"></SectionTitle>
        <p className="text-xl">
          We provide AI Chat Powerkit “as is”. We are not liable for any loss or damage resulting from use of the extension, including but not limited to data loss, service outages, or third-party platform changes.
        </p>

        <SectionTitle text="Changes to These Terms"></SectionTitle>
        <p className="text-xl">
          We may update these Terms from time to time. When we do, we will update the “Effective Date” and notify users via the extension or landing page.          
        </p>

      </div>
    </>
  );
}
