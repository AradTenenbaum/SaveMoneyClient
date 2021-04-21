import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { register } from "../actions/user";

import { useForm } from "../hooks/useForm";

function Register() {
  // Hooks
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState<Boolean>(false);
  const { onChange, onSubmit, Clear, values } = useForm(
    () => {
      if(values.password === values.passwordAgain && isChecked){
          dispatch(register({username: values.username, password: values.password}))
      }
    },
    {
      username: "",
      password: "",
      passwordAgain: ""
    }
  );
  console.log(values);
  return (
    <div>
      <Form inverted onSubmit={onSubmit}>
        <Form.Field>
          <label style={{ color: "white" }}>Username</label>
          <input
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
            type="password"
            placeholder="Password"
            value={values.password}
            name="password"
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field>
          <label style={{ color: "white" }}>Password Again</label>
          <input
            type="password"
            placeholder="Password Again"
            value={values.passwordAgain}
            name="passwordAgain"
            onChange={onChange}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox label="I agree to save purchases" onClick={() => {
              setIsChecked(!isChecked);
          }}/>
        </Form.Field>
        <Button type="submit" style={{ color: "#0c1d34" }}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Register;
