import { TitleListItem, ListItem, SectionTitle, Email } from "@/components/ui/terms";


export default async function PrivacyPolicyPage({
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
            AI Chat Powerkit Privacy Policy        
        </h3>
        <h6 className="tracking-tight mt-2">
        Last Updated: October 30, 2025
        </h6>
        <p className="text-xl">
            We take your privacy seriously. This Privacy Policy outlines what data we collect, how we use it, and how we protect it when you use our browser extension.
        </p>
      </div>

      <div
        className="flex flex-col justify-center lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto md:gap-6 pt-10"
      >
        <SectionTitle text="Information We Collect"></SectionTitle>
        <div>
          <p className="text-xl">
              When you use our extension, we collect the following information:
          </p>
          <ul className="pt-3 list-disc list-inside">
            <TitleListItem title="Your ChatGPT Account Email:" content="Used to identify your user account in our extension without requiring separate registration."></TitleListItem>
            <TitleListItem title="Payment Status and Plan Information:" content="Includes whether you’ve paid, your selected plan, and subscription expiry date — used to determine feature access (free vs. paid)."></TitleListItem>
            <TitleListItem title="Chat UUIDs (not content):" content="We store the unique identifiers (UUIDs) of your ChatGPT conversations to help you organize them into folders. We do not store your conversation content."></TitleListItem>
            <TitleListItem title="Personal Settings and Text Expansions:" content="Your text expansions and personalized preferences are automatically saved to the cloud to enable syncing across devices. This data is encrypted before storage and is not stored in plaintext."></TitleListItem>
          </ul>
        </div>

        <SectionTitle text="How We Use Your Data"></SectionTitle>
        <div>
          <p className="text-xl">
            We use the data collected solely for the following purposes:      
          </p>
          <ul className="pt-3 list-disc list-inside">
            <ListItem content="To automatically create a user account using your ChatGPT email."></ListItem>
            <ListItem content="To provide folder organization, personalization, and text expansion features."></ListItem>
            <ListItem content="To verify your payment status and activate premium features accordingly."></ListItem>
            <ListItem content="To support secure multi-device sync for your settings."></ListItem>
          </ul>
        </div>

        <SectionTitle text="Data Encryption and Security"></SectionTitle>
        <div>
          <ul className="list-disc list-inside">
            <ListItem content="Sensitive data such as chat UUIDs, settings, and expansions are encrypted before being stored in our servers."></ListItem>
            <ListItem content="We do not store any chat content."></ListItem>
            <ListItem content="We do not use analytics tools like Google Analytics or other third-party trackers."></ListItem>
          </ul>
        </div>

        <SectionTitle text="Third-Party Services and Data Sharing"></SectionTitle>
        <div>
          <p className="text-xl">
            We do not sell or share your data with unrelated third parties.
          </p>
          <p className="text-xl pt-3">
            We use Paddle to process payments. To verify purchases, we match the email you enter at checkout (via Paddle) with the email used in our extension. This email is not &quot;shared&quot; with Paddle by us — you provide it during checkout, and we use it as a user identifier.
          </p>
        </div>

        <SectionTitle text="Your Rights"></SectionTitle>
        <div>
          <p className="text-xl">
            You have the right to:
          </p>
          <ul className="pt-3 list-disc list-inside">
            <ListItem content="Request access to the data we store about you"></ListItem>
            <ListItem content="Request deletion of your account and all related data"></ListItem>
          </ul>
          <p className="text-xl">
            To request deletion of your data, please contact us at <Email></Email> and include the email address associated with your account.
To protect your privacy and ensure the security of your information, we may need to verify your identity before processing your request — for example, by requiring the request to be sent from your registered email address.

Once your identity is verified, we will process your deletion request within 30 days and notify you once the deletion is complete.
Please note that we may retain certain information if required by law or for legitimate business purposes, such as maintaining financial records or resolving disputes.
          </p>
        </div>

        <SectionTitle text="Cookies and Tracking"></SectionTitle>
        <p className="text-xl">
          This extension does not use cookies or any tracking technologies.
        </p>

        <SectionTitle text="Policy Changes"></SectionTitle>
        <p className="text-xl">
          If we make significant changes to this policy, we will notify you via the extension interface or update notification.
        </p>

        <SectionTitle text="Contact"></SectionTitle>
        <div>
          <p className="text-xl">
            If you have any questions about this Privacy Policy, feel free to reach out at:
          </p>
          <div className="pt-3">
            <Email></Email>
          </div>
        </div>
      </div>
    </>
  );
}
