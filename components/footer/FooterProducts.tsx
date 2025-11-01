import { siteConfig } from "@/config/site";
import Link from "next/link";

const FooterProducts = () => {
  const footerProducts = siteConfig.footerProducts;

  return (
    <div className="flex space-x-1 flex-wrap justify-center">
      <span>By installing or using ChatGPT Powerkit you agree to the</span>
      {footerProducts.map((product, index) => {
        return (
          <span key={product.url}>
            <Link className="underline" href={product.url}>
              {product.name}
            </Link>
            {index !== footerProducts.length - 1 ? (
              <>
                <span>{" and "}</span>
              </>
            ) : (
              <></>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default FooterProducts;
