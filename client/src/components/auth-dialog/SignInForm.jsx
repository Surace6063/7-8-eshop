import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { apiRequest } from "../../libs/apiRequest";
import toast from "react-hot-toast";
import { useAuthStore } from "../../zustand/useAuthStore";

const validation = yup.object({
  username: yup.string().required("Username is required."),
  password: yup.string().required("Password is required"),
});

const SignInForm = ({setIsOpen}) => {
  const {setUser} = useAuthStore()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(validation),
  });

  // handle sign in
  const handleSignIn = async (data) => {
    try {
        const response = await apiRequest.post('/auth/login/',data)
        console.log(response.data);
        setUser(response.data)
        toast.success("user signin successfully.")
        setIsOpen(false)
    } catch (error) {
        console.log(error);
        if(error.response && error.response.data){
            toast.error(error.response.data.detail)
        }
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
        <Input
          {...register("username")}
          label="username"
          error={errors?.username?.message}
        />
        <Input
          {...register("password")}
          label="password"
          type="password"
          error={errors?.password?.message}
        />
        <Button disabled={isSubmitting} className="w-full">
            {isSubmitting ? 'submitting' : 'Sign In'}
        </Button>
      </form>
    </div>
  );
};
export default SignInForm;
