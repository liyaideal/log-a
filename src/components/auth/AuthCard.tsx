import { useState } from "react";
import AuthHeader from "./AuthHeader";
import PromoBanner from "./PromoBanner";
import AuthTabs from "./AuthTabs";
import WalletAuth from "./WalletAuth";
import GoogleAuth from "./GoogleAuth";
import TelegramAuth from "./TelegramAuth";
import AuthFooter from "./AuthFooter";

type AuthTab = "wallet" | "google" | "telegram";

const AuthCard = () => {
  const [activeTab, setActiveTab] = useState<AuthTab>("google");

  const renderAuthContent = () => {
    switch (activeTab) {
      case "wallet":
        return <WalletAuth />;
      case "google":
        return <GoogleAuth />;
      case "telegram":
        return <TelegramAuth />;
      default:
        return <WalletAuth />;
    }
  };

  return (
    <div className="glass-card w-full max-w-lg p-8">
      <AuthHeader />
      <PromoBanner />
      <AuthTabs activeTab={activeTab} onTabChange={setActiveTab} />
      {renderAuthContent()}
      <AuthFooter />
    </div>
  );
};

export default AuthCard;
