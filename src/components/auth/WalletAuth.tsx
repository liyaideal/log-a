import { Icon } from "@iconify/react";

const WalletAuth = () => {
  const wallets = [
    { id: "metamask", name: "MetaMask", icon: "logos:metamask-icon" },
    { id: "bnb", name: "BNB Wallet", icon: "token-branded:bnb" },
  ];

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
            <button className="tab-active flex items-center gap-2 py-1.5 px-3 text-sm text-primary-95">
              Connect
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
