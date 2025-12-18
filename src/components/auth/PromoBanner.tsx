import { Icon } from "@iconify/react";

const PromoBanner = () => {
  return (
    <div className="promo-banner flex items-center gap-3 mb-8 p-4 scale-105">
      <div className="gradient-button flex justify-center items-center w-10 h-10 rounded-xl">
        <Icon icon="lucide:gift" className="text-2xl text-primary-95" />
      </div>
      <div className="flex-1">
        <div className="text-base font-semibold text-primary-95">
          Get 10,000 USDT Trial Funds
        </div>
        <div className="mt-1 text-xs text-primary-65">
          Demo Trading · No Deposit · Start Now
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
