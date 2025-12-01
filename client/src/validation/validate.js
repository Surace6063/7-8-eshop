import * as yup from "yup";

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const registerSchema = yup.object({
  username: yup
    .string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters"),

  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email address"),

  password: yup
    .string()
    .required("Password is required")
    .matches(
      passwordRegex,
      "Password must have 8+ chars, 1 uppercase, 1 lowercase, 1 number & 1 special character"
    ),

  password2: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});
