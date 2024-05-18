import { RefreshCcw, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const FormSignUp = () => {
  const [showPasword, setShowPassword] = useState(false);
  return (
    <form className="flex flex-col gap-8">
      <p className="font-medium">
        We've sent a code to example@email.com{" "}
        <a className="underline" href="#">
          Edit
        </a>
      </p>

      {/* <!-- Code Input --> */}
      <label className="input input-bordered flex items-center gap-2">
        <input type="text" className="grow" placeholder="Code" />
        <button type="button">
          <RefreshCcw size={24} strokeWidth={1.5} absoluteStrokeWidth />
        </button>
      </label>

      {/* <!-- First Name and Last Name Input --> */}
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="First Name"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="input input-bordered w-full"
        />
      </div>

      {/* <!-- Password Input --> */}
      <label className="input input-bordered flex items-center gap-2">
        <input
          type={showPasword ? "text" : "password"}
          className="grow"
          placeholder="Password"
        />
        <button type="button" onClick={() => setShowPassword(!showPasword)}>
          {showPasword ? (
            <EyeOff size={24} strokeWidth={1.5} absoluteStrokeWidth />
          ) : (
            <Eye size={24} strokeWidth={1.5} absoluteStrokeWidth />
          )}
        </button>
      </label>

      {/* <!-- Sellect Shopping Preference --> */}
      <div className="w-full">
        <label htmlFor="preferences" className="label label-text">
          Shopping preferences
        </label>
        <select id="preferences" className="select select-bordered w-full">
          <option value="men">Men's</option>
          <option value="woman">Women's</option>
        </select>
      </div>

      {/* <!-- Date Input --> */}
      <div className="w-full">
        <label htmlFor="birthday" className="label label-text">
          Date of birth
        </label>
        <input
          id="birthday"
          type="date"
          className="input input-bordered w-full"
        />
      </div>

      {/* <!-- Checkbox --> */}
      <div className="flex items-center gap-8">
        <input id="subscribe-email" type="checkbox" className="checkbox" />
        <label htmlFor="subscribe-email" className="text-start label-text">
          Sign up for emails to get updates from Nike on products, offers and
          your Member benefits.
        </label>
      </div>
      <div className="flex items-center gap-8">
        <input id="agree-terms" type="checkbox" className="checkbox" />
        <label htmlFor="agree-terms" className="text-start label-text">
          I agree to Nike's{" "}
          <a
            target="_blank"
            href="#"
            rel="noopener noreferrer"
            className="font-bold underline"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            href="#"
            rel="noopener noreferrer"
            className="font-bold underline"
          >
            Terms of Use
          </a>
          .
        </label>
      </div>

      {/* <!-- Submit Button --> */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="btn btn-xs sm:btn-sm md:btn-md rounded-full"
        >
          Create Account
        </button>
      </div>
    </form>
  );
};

export default FormSignUp;
