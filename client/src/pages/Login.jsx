import React from "react";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Link, redirect, Form, useNavigate } from "react-router-dom";
import { Logo, FormRow, SubmitBtn } from "../components";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const LoginActionPack = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = { msg: "" };

  if (data.password.length < 3) {
    errors.msg = "password too short";
    return errors;
  }

  try {
    await customFetch.post("/auth/login", data);
    toast.success("login successful");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return errors;
  }
};

const Login = () => {
  const navigate = useNavigate();

  const loginDemoUser = async () => {
    const data = {
      email: "test@test.com",
      password: "pradeepmannikeri",
    };
    try {
      await customFetch.post("/auth/login", data);
      toast.success("Take a test drive");
      navigate("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Login</h4>

        <FormRow type="email" labelText="email" name="email" />
        <FormRow type="password" labelText="password" name="password" />

        <SubmitBtn />

        <button type="button" className="btn btn-block" onClick={loginDemoUser}>
          explore the app
        </button>

        <p>
          Not a member member?
          <Link to="/register" className="member-btn">
            register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
