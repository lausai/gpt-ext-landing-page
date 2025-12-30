"use client";

import { useEffect, useMemo, useState } from "react";
import Script from "next/script";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Link,
  Spacer,
} from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import { ALL_TIERS } from "@/config/tiers";
import { FaCheck } from "react-icons/fa";
import { RoughNotation } from "react-rough-notation";

const Pricing = ({
  id,
  locale,
  langName,
}: {
  id: string;
  locale: any;
  langName: string;
}) => {
  const TIERS = ALL_TIERS[`TIERS_${langName.toUpperCase()}`];

  // 追蹤 Paddle.js 是否已載入完成
  const [paddleLoaded, setPaddleLoaded] = useState(false);

  // 這裡存第二、第三個方案從 Paddle 查回來的顯示價格（已含幣別符號/稅等格式）
  const [dynamicPrices, setDynamicPrices] = useState<{
    second?: string;
    third?: string;
  }>({});

  // 控制按鈕：一開始 disable，等價格查到才 enable
  const pricesReady = Boolean(dynamicPrices.second && dynamicPrices.third);

  // paddle priceId
  // second: 月訂閱 id, third 年訂閱 id
  const priceIds = useMemo(
    () => ({
      second: "pri_01kbjcn8zrztb2c34kfjzgx8zv",     // 月訂閱
      third: "pri_01kbkqk45hywm63gzhqd00sd1k",      // 年訂閱
    }),
    []
  );

  useEffect(() => {
    // 只有在 Paddle.js 載入完成後才查價
    if (!paddleLoaded) return;

    let cancelled = false;

    async function fetchPrices() {
      try {
        const Paddle = (window as any).Paddle;
        if (!Paddle?.PricePreview) {
          // Paddle.js 已載入但 API 不存在，通常是載錯版本或 SDK 初始化流程不同
          console.error("Paddle.PricePreview is not available on window.Paddle");
          return;
        }

        /**
         * Paddle.PricePreview：一次帶多個 items 查價
         * - 這裡用兩個 items 對應第 2、3 個方案
         * - quantity 先寫 1
         *
         * 註：Paddle 會回傳 formattedTotals / formattedUnitTotals 等欄位，
         *     我們直接用「已格式化」的 total 顯示在 UI 最省事。
         */
        const result = await Paddle.PricePreview({
          items: [
            { priceId: priceIds.second, quantity: 1 },
            { priceId: priceIds.third, quantity: 1 },
          ],
        });

        if (cancelled) return;

        // 依 Paddle 文件，lineItems 會對應你 items 的順序
        const lineItems = result?.data?.details?.lineItems ?? [];

        // 取「已格式化」總價（含幣別符號）
        const secondPrice =
          lineItems?.[0]?.formattedTotals?.subtotal ??
          lineItems?.[0]?.formattedUnitTotals?.subtotal ??
          null;

        const thirdPrice =
          lineItems?.[1]?.formattedTotals?.subtotal ??
          lineItems?.[1]?.formattedUnitTotals?.subtotal ??
          null;

        if (secondPrice && thirdPrice) {
          setDynamicPrices({
            second: secondPrice,
            third: thirdPrice,
          });
        } else {
          console.error("PricePreview response missing expected totals", result);
        }
      } catch (err) {
        console.error("Failed to preview prices via Paddle.PricePreview()", err);
      }
    }

    fetchPrices();

    return () => {
      cancelled = true;
    };
  }, [paddleLoaded, priceIds.second, priceIds.third]);



  return (
    <section
      id={id}
      className="flex flex-col justify-center lg:max-w-7xl md:max-w-5xl w-[95%] items-center pt-16"
    >

      {/* 只在 Pricing 組件載入 Paddle.js */}
      <Script
        src="https://cdn.paddle.com/paddle/v2/paddle.js"
        strategy="afterInteractive"
        onLoad={() => {
          // 只有 onLoad 代表 paddle.js 真正可用（避免 race condition）
          const Paddle = (window as any).Paddle;
          Paddle.Environment.set("sandbox");
          Paddle.Initialize({ 
            token: 'test_a8adafbd4b537bbd797101b1eee'
          });
 
          setPaddleLoaded(true);
        }}
      />

      <div className="flex flex-col text-center max-w-xl">
        <h2 className="text-center text-white">
          <RoughNotation type="highlight" show={true} color="#2563EB">
            {locale.title}
          </RoughNotation>
        </h2>
        <h3 className="text-4xl font-medium tracking-tight mt-2">
          {locale.title2}
        </h3>
        <Spacer y={4} />
        <p className="text-large text-default-500">{locale.description}</p>
      </div>
      <Spacer y={8} />
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-3 justify-items-center">
        {TIERS?.map((tier, index) => {
          let priceText;
          switch (index) {
            case 1:
              priceText = tier.price;
              break;
            case 2:
              priceText = dynamicPrices.second ?? '_'  // 還沒查到先顯示 placeholder
              break;
            case 3:
              priceText = dynamicPrices.third ?? '_'  // 還沒查到先顯示 placeholder
              break;
          }

          return (
            <Card key={tier.key} className="p-3 flex-1 w-[90%]" shadow="md">
              <CardHeader className="flex flex-col items-start gap-2 pb-6">
                <h2 className="text-large font-medium">{tier.title}</h2>
                <p className="text-medium text-default-500">{tier.description}</p>
              </CardHeader>
              <Divider />
              <CardBody className="gap-8">
                <p className="flex items-baseline gap-1 pt-2">
                  <span className="inline bg-gradient-to-br from-foreground to-foreground-600 bg-clip-text text-2xl font-semibold leading-7 tracking-tight text-transparent">
                    {priceText}
                  </span>
                  {typeof tier.price !== "string" ? (
                    <span className="text-small font-medium text-default-400">
                      {priceText}
                    </span>
                  ) : null}
                </p>
                <ul className="flex flex-col gap-2">
                  {tier.features?.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <FaCheck className="text-blue-500 flex-shrink-0" />
                      <p className="text-default-500">{feature}</p>
                    </li>
                  ))}
                </ul>
              </CardBody>
              <CardFooter>
                <Button
                  fullWidth
                  as={Link}
                  color={tier.buttonColor}
                  href={tier.href}
                  variant={tier.buttonVariant}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  {tier.buttonText}
                </Button>
              </CardFooter>
            </Card>);
          })}
      </div>
    </section>
  );
};

export default Pricing;
