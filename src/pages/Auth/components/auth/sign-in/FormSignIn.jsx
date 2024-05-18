import SelectCountry from "./SelectCountry";

const FormSignIn = () => {
  return (
    <form className="flex flex-col gap-4">
      <SelectCountry />
      <input
        type="email"
        placeholder="Email"
        className="input input-bordered w-full"
      />
      <div className="flex flex-col gap-6 mb-1">
        <p className="font-sans antialiased font-normal leading-relaxed">
          By continuing, I agree to Nike’s{" "}
          <a href="#" className="font-bold underline">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a href="#" className="font-bold underline">
            Terms of Use
          </a>
          .
        </p>
        <div className="flex justify-end">
          <button
            type="submit"
            className="btn btn-xs sm:btn-sm md:btn-md rounded-full"
          >
            Continue
          </button>
        </div>
      </div>
    </form>
  );
};

export default FormSignIn;
