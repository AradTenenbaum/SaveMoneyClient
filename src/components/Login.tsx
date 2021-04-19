import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form } from "semantic-ui-react";

import { useForm } from "../hooks/useForm";
import {login} from '../actions/user';

function Login() {
    // Hooks
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const { onChange, onSubmit, Clear, values } = useForm(() => {
    dispatch(login({ username: values.username, password: values.password}));
  }, {
      username: "",
      password: ""
  });
  console.log(user);
  return (
    <div>
      <Form inverted onSubmit={onSubmit}>
        <Form.Field>
          <label style={{ color: "white" }}>Username</label>
          <input type="text" placeholder="Username" value={values.username} name="username" onChange={onChange}/>
        </Form.Field>
        <Form.Field>
          <label style={{ color: "white" }}>Password</label>
          <input type="password" placeholder="Password" value={values.password} name="password" onChange={onChange} />
        </Form.Field>
        <Button type="submit" style={{color: "#0c1d34"}}>Submit</Button>
      </Form>
    </div>
  );
}

export default Login;
