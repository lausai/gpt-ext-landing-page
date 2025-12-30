import HomeIndex from "@/components/home/HomeIndex";
import { isValidEmail } from "@/lib/utils";

export default async function Home({
  params: { lang },
  searchParams,
}: {
  params: { lang: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // 取得 ?prefill=...
  const prefillRaw = searchParams.prefill;

  // 只接受單一字串，避免 string[] 造成混亂
  const prefill =
    typeof prefillRaw === "string" && isValidEmail(prefillRaw)
      ? prefillRaw
      : null;

  return <HomeIndex lang={lang} prefillEmail={prefill} />;
}
