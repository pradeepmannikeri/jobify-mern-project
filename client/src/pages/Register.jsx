import { Logo, FormRow, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Form, redirect, useNavigation, Link } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const registerActionPack = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration successful.");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>

        <FormRow type="text" labelText="name" name="name" />
        <FormRow type="text" labelText="last name" name="lastName" />
        <FormRow type="text" labelText="location" name="location" />
        <FormRow type="email" labelText="email" name="email" />
        <FormRow type="password" labelText="password" name="password" />

        <SubmitBtn />

        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;
