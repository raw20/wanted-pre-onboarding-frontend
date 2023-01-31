import { useState } from "react";

function useConfirm() {
  const [isEmailConfirm, setIsEmailConfirm] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  return {
    isEmailConfirm,
    setIsEmailConfirm,
    isPasswordConfirm,
    setIsPasswordConfirm,
  };
}

export default useConfirm;
