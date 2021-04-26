import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Message } from "semantic-ui-react";

import { useForm } from "../hooks/useForm";
import { login } from "../actions/user";

function Login() {
  // Hooks
  const dispatch = useDispatch();
  const [error, setError] = useState<string | null>(null);
  const { onChange, onSubmit, Clear, values } = useForm(
    () => {
      dispatch(
        login(
          { username: values.username, password: values.password },
          setError
        )
      );
    },
    {
      username: "",
      password: "",
    }
  );
  return (
    <div>
      <Form error inverted onSubmit={onSubmit}>
        <Form.Field>
          <label style={{ color: "white" }}>Username</label>
          <input
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
          <input
            autoComplete="off"
            type="password"
            placeholder="Password"
            value={values.password}
            name="password"
            onChange={onChange}
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

export default Login;
