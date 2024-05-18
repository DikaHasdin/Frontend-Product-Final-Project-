import FormSignIn from "./FormSignIn";
import HeaderSignIn from "./HeaderSignIn";

const SignInComponent = () => {
  return (
    <div className="w-full flex flex-col gap-4 bg-transparent shadow-none rounded-xl bg-clip-border">
      <HeaderSignIn />
      <FormSignIn />
    </div>
  );
};

export default SignInComponent;
