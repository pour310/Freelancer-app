import React, { useState } from "react";
import OTPInput from "react-otp-input";


function CheckOTPForm() {
  const [otp, setOtp] = useState("");
 

  return (
    <div>
      <form className=" space-y-10">
        <p className=" font-bold text-secondary-800  ">کد تایید را وارد کنید</p>
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderInput={(p) => <input type="isInputNum" {...p} />}
          renderSeparator={<span>-</span>}
          containerStyle="flex flex-row-reverse gap-x-2  justify-center"
          inputStyle="border border-primary-400 px-4 py-1 rounded-md"
        />
        <button className="btn btn--primary w-full">تایید</button>
      </form>
    </div>
  );
}

export default CheckOTPForm;
