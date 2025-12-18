const AuthFooter = () => {
  return (
    <>
      {/* Divider */}
      <div className="flex items-center gap-4 mb-8">
        <div className="divider-line" />
        <span className="text-xs text-primary-55">OR</span>
        <div className="divider-line" />
      </div>

      {/* Info Section */}
      <div className="text-center mb-8">
        <p className="mb-2 text-sm text-primary-75">
          New to OMENX? Authorization creates your account automatically
        </p>
        <p className="text-xs text-primary-55">
          🎁 10,000 USDT Trial Funds · No Deposit Required · Start Trading Now
        </p>
      </div>

      {/* Terms */}
      <div className="text-center">
        <p className="text-[10px] text-primary-55">
          By continuing, you agree to our{" "}
          <a
            href="#"
            className="text-primary hover:brightness-110 transition-all"
          >
            Terms of Service
          </a>{" "}
          and{" "}
          <a
            href="#"
            className="text-primary hover:brightness-110 transition-all"
          >
            Privacy Policy
          </a>
        </p>
      </div>
    </>
  );
};

export default AuthFooter;
