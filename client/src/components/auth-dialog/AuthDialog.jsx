import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import Button from "../ui/Button";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

const AuthDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleForm, setToggleForm] = useState("sign-in");

  function open(value) {
    setIsOpen(true);
    setToggleForm(value);
  }

  function close() {
    setIsOpen(false);
  }
  return (
    <>
      <div>
        <Button onClick={() => open("sign-in")} variant="ghost">
          sign in
        </Button>

        <Button onClick={() => open("sign-up")}>sign up</Button>
      </div>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen bg-black/60 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white shadow p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="font-medium text-2xl text-gray-800 mb-6"
              >
                {toggleForm === "sign-in" ? "Sign In" : "Sign Up"}
              </DialogTitle>
              <div>
                {toggleForm === "sign-in" ? <SignInForm /> : <SignUpForm />}</div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
export default AuthDialog;
