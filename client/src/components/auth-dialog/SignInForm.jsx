import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Input from "../ui/Input"

const validation = yup.object({
    username: yup.string().required('Username is required.')
})

const SignInForm = () => {
    const {register,handleSubmit,formState:{errors,isSubmitting}} = useForm({
        resolver: yupResolver(validation)
    })

    // handle sign in
    const handleSignIn = (data) => {
        console.log(data);
    }
  return (
    <div>
        <form onSubmit={handleSubmit(handleSignIn)}>
             <Input label="username" error={errors?.username} />
             <Input label="password" type="password" />
            <button>submit</button>
        </form>
    </div>
  )
}
export default SignInForm