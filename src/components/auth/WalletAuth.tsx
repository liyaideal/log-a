import { Icon } from "@iconify/react";
import { useCallback, useRef, useState } from "react";

interface WalletConfig {
  id: string;
  name: string;
  icon: string;
  webUrl: string;
  mobileDeepLink: string;
  iosAppStore: string;
  androidPlayStore: string;
}

const WalletAuth = () => {
  const [loadingWallet, setLoadingWallet] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const wallets: WalletConfig[] = [
    {
      id: "metamask",
      name: "MetaMask",
      icon: "logos:metamask-icon",
      webUrl: "https://metamask.io/download/",
      mobileDeepLink: "metamask://",
      iosAppStore: "https://apps.apple.com/app/metamask/id1438144202",
      androidPlayStore: "https://play.google.com/store/apps/details?id=io.metamask",
    },
    {
      id: "bnb",
      name: "BNB Wallet",
      icon: "token-branded:bnb",
      webUrl: "https://www.bnbchain.org/en/binance-wallet",
      mobileDeepLink: "bnc://",
      iosAppStore: "https://apps.apple.com/app/binance-buy-bitcoin-crypto/id1436799971",
      androidPlayStore: "https://play.google.com/store/apps/details?id=com.binance.dev",
    },
  ];

  const isMobile = useCallback(() => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }, []);

  const isIOS = useCallback(() => {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  }, []);

  const handleWalletConnect = useCallback(
    (wallet: WalletConfig) => {
      if (!isMobile()) {
        // Web端直接跳转到插件下载页
        window.location.href = wallet.webUrl;
        return;
      }

      // Mobile端处理
      setLoadingWallet(wallet.id);

      const appStoreUrl = isIOS() ? wallet.iosAppStore : wallet.androidPlayStore;

      // 记录当前时间
      const startTime = Date.now();

      // 尝试打开App
      window.location.href = wallet.mobileDeepLink;

      // 设置延时检测
      timeoutRef.current = setTimeout(() => {
        const elapsed = Date.now() - startTime;

        // 如果页面仍然可见且时间差较小，说明App未安装
        if (!document.hidden && elapsed < 2500) {
          // 跳转到应用商店
          window.location.href = appStoreUrl;
        }

        setLoadingWallet(null);
      }, 2000);

      // 监听页面可见性变化
      const handleVisibilityChange = () => {
        if (document.hidden) {
          // App成功打开，清除定时器
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
          }
          setLoadingWallet(null);
          document.removeEventListener("visibilitychange", handleVisibilityChange);
        }
      };

      document.addEventListener("visibilitychange", handleVisibilityChange);

      // 3秒后清理监听器
      setTimeout(() => {
        document.removeEventListener("visibilitychange", handleVisibilityChange);
        setLoadingWallet(null);
      }, 3000);
    },
    [isMobile, isIOS]
  );

  return (
    <div className="mb-8 animate-fade-in">
      <p className="mb-4 text-sm text-primary-75">
        Connect with your Web3 wallet
      </p>
      <div className="flex flex-col gap-3">
        {wallets.map((wallet) => (
          <div
            key={wallet.id}
            className="wallet-item flex justify-between items-center p-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex justify-center items-center w-8 h-8">
                <Icon icon={wallet.icon} className="text-2xl" />
              </div>
              <span className="text-base text-primary-95">{wallet.name}</span>
            </div>
            <button
              className="tab-active flex items-center gap-2 py-1.5 px-3 text-sm text-primary-95"
              onClick={() => handleWalletConnect(wallet)}
              disabled={loadingWallet === wallet.id}
            >
              {loadingWallet === wallet.id ? (
                <>
                  <Icon icon="lucide:loader-2" className="animate-spin" />
                  <span>Opening...</span>
                </>
              ) : (
                "Connect"
              )}
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center gap-1 mt-4">
        <button className="flex items-center gap-1 text-xs text-primary-65 hover:text-primary-75 transition-colors">
          <span>More Wallets</span>
          <Icon icon="lucide:chevron-right" className="text-xs" />
        </button>
      </div>
    </div>
  );
};

export default WalletAuth;
