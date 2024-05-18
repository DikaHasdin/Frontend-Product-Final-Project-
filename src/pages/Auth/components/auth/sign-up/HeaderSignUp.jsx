import JordanLogo from "../../../assets/JordanLogo";
import NikeLogo from "../../../assets/NikeLogo";

const HeaderSignUp = () => {
  return (
    <header className="flex flex-col gap-4">
      <div className="flex gap-4">
        <NikeLogo />
        <JordanLogo />
      </div>
      <h1 className="text-3xl">Enter your email to join us or sign in.</h1>
    </header>
  );
};

export default HeaderSignUp;
