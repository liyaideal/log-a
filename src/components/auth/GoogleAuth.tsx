import { Icon } from "@iconify/react";

const GoogleAuth = () => {
  return (
    <div className="mb-8 animate-fade-in">
      <p className="mb-4 text-sm text-primary-75">Quick sign-in with Google</p>
      <button
        className="glass-button flex justify-center items-center gap-3 w-full py-3 px-4"
        onClick={() => window.location.href = "https://logb.lovable.app"}
      >
        <div className="flex justify-center items-center w-5 h-5">
          <Icon icon="logos:google-icon" className="text-lg" />
        </div>
        <span className="text-sm font-semibold text-primary-95">
          Sign in with Google
        </span>
      </button>
      <p className="text-center mt-3 text-xs text-primary-65">
        Instant access • No wallet needed • Start trading in seconds
      </p>
    </div>
  );
};

export default GoogleAuth;
