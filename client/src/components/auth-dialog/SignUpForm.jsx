import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { registerSchema } from "../../validation/validate";
import { apiRequest } from "../../libs/apiRequest";
import toast from "react-hot-toast";

const SignUpForm = ({setToggleForm}) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  // handle sign up
  const handleSignUp = async (data) => {
    try {
      await apiRequest.post("/auth/register/", data);
      toast.success("User registered successfully.");
      setToggleForm('sign-in')
    } catch (error) {
      console.log(error);
      if(error.response && error.response.data){
        if(error.response.data.email){
            toast.error(error.response.data.email[0])
        }
        if(error.response.data.username){
            toast.error(error.response.data.username[0])
        }
      }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleSignUp)} className="space-y-4">
        <Input
          {...register("username")}
          label="username"
          id="username"
          error={errors?.username?.message}
        />
        <Input
          {...register("email")}
          label="Email"
          id="email"
          type="email"
          error={errors?.email?.message}
        />
        <Input
          {...register("password")}
          label="password"
          id="password"
          type="password"
          error={errors?.password?.message}
        />
        <Input
          {...register("password2")}
          id="conform_password"
          label="Conform password"
          type="password"
          error={errors?.password2?.message}
        />
        <Button disabled={isSubmitting} className="w-full">
          {isSubmitting ? "submitting" : "Sign Up"}
        </Button>
      </form>
    </div>
  );
};
export default SignUpForm;
