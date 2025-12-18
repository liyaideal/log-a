interface AuthTabsProps {
  activeTab: "wallet" | "google" | "telegram";
  onTabChange: (tab: "wallet" | "google" | "telegram") => void;
}

const AuthTabs = ({ activeTab, onTabChange }: AuthTabsProps) => {
  const tabs = [
    { id: "wallet" as const, label: "Wallet" },
    { id: "google" as const, label: "Google" },
    { id: "telegram" as const, label: "Telegram" },
  ];

  return (
    <div className="bg-[hsl(0_0%_0%/0.3)] backdrop-blur-xl flex mb-8 p-1 border border-glass rounded-xl">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`flex flex-1 justify-center items-center py-2.5 px-4 text-sm font-semibold transition-all duration-200 ${
            activeTab === tab.id
              ? "tab-active text-primary-95"
              : "text-primary-65 hover:text-primary-95"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default AuthTabs;
