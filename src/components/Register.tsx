import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Checkbox, Form, Message } from "semantic-ui-react";
import { register } from "../actions/user";

import { useForm } from "../hooks/useForm";

function Register() {
  // Hooks
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState<Boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const { onChange, onSubmit, Clear, values } = useForm(
    () => {
      if (values.password === values.passwordAgain && isChecked) {
        dispatch(
          register({ username: values.username, password: values.password }, setError)
        );
        // setError("Details error: username needs to be at least 3 digits and password 6 digits");
      } else {
        if(values.password !== values.passwordAgain) {
          setError("Passwords must be equal");
        }
        if(!isChecked) {
          setError("You must accept saving the purcheses");
        }
      }
    },
    {
      username: "",
      password: "",
      passwordAgain: "",
    }
  );
  return (
    <div>
      <Form inverted onSubmit={onSubmit} error>
        <Form.Field>
          <label style={{ color: "white" }}>Username</label>
          <Form.Input
            autoComplete="off"
            type="text"
            placeholder="Username"
            value={values.username}
            name="username"
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field>
          <label style={{ color: "white" }}>Password</label>
          <Form.Input
            autoComplete="off"
            type="password"
            placeholder="Password"
            value={values.password}
            name="password"
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field>
          <label style={{ color: "white" }}>Password Again</label>
          <Form.Input
            autoComplete="off"
            type="password"
            placeholder="Password Again"
            value={values.passwordAgain}
            name="passwordAgain"
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field>
          <Form.Checkbox
            label="I agree to save purchases"
            onClick={() => {
              setIsChecked(!isChecked);
            }}
          />
        </Form.Field>
        {error ? <Message error content={error} /> : <div />}
        <Button type="submit" style={{ color: "#0c1d34" }}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Register;
