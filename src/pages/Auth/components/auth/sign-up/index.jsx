import FormSignUp from "./FormSignUp";
import HeaderSignUp from "./HeaderSignUp";

const SignUpComponent = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <HeaderSignUp />
      <FormSignUp />
    </div>
  );
};

export default SignUpComponent;
