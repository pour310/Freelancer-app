import { useState } from "react";
import TextField from "../../ui/TextField";

function SendOTPForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div>
      <TextField
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        label="شماره موبایل"
        btn="ارسال کد تایید"
        name="phoneNumber"
      />
    </div>
  );
}

export default SendOTPForm;
