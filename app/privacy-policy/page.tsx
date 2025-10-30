import SectionTitle from "./SectionTitle";

export default async function PrivacyPolicyPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  return (
    <>
      <div
        className="flex flex-col justify-center lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto md:gap-10 pt-16"
      >
        <h3 className="tracking-tight mt-2">
            Chatgpt Powerkit Privacy Policy        
        </h3>
        <p className="text-large text-default-500">
        test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test 
        </p>
      </div>

      <div
        className="flex flex-col justify-center lg:max-w-7xl md:max-w-5xl w-[95%] mx-auto md:gap-6 pt-10"
      >
        <SectionTitle text="title1"></SectionTitle>
        <p className="text-large text-default-500">
        test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test 
        </p>

        <SectionTitle text="title1"></SectionTitle>
        <p className="text-large text-default-500">
        test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test test 
        </p>




      </div>
    </>
  );
}
