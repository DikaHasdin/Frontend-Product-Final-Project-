import JordanLogo from "../../../assets/JordanLogo";
import NikeLogo from "../../../assets/NikeLogo";

const HeaderSignIn = () => {
  return (
    <header
      className="flex flex-col gap-6"
      tabIndex={0}
      aria-label="Enter your email to join us or sign in. group"
    >
      <div className="flex items-center gap-6">
        <NikeLogo />
        <JordanLogo />
      </div>
      <h1 className="text-4xl antialiased font-normal tracking-wide">
        Enter your email to join us or sign in.
      </h1>
    </header>
  );
};

export default HeaderSignIn;
