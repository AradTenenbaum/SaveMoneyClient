import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Button, Form, Icon, Popup } from "semantic-ui-react";

import { addPurchase, getAll } from "../actions/purchases";
import { logout } from "../actions/user";
import PageTitle from "../components/PageTitle";
import ScrollArea from "../components/ScrollArea";
import { useForm } from "../hooks/useForm";

function Home() {
  // Hooks
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state: any) => state.user);
  const purchases = useSelector((state: any) => state.purchase);
  const [money, setMoney] = useState(0);
  const {onChange, onSubmit, Clear, values} = useForm(() => {
    dispatch(addPurchase(user.token, {_id: "", name: values.name, price: parseFloat(values.price), userId: user.user._id}));
    Clear();
  }, {
    name: "",
    price: 0
  });
  useEffect(() => {
    if (user) {
      dispatch(getAll(user.token, user.user._id));
    }
  }, []);

  // Updates when a purchases' value changes
  useEffect(() => {
    if (purchases) {
      let sum = 0;
      for (let i = 0; i < purchases.length; i++) {
        sum = sum + purchases[i].price;
      }
      setMoney(sum);
    }
  }, [purchases]);

  // Push out of the screen if the user didnt logged in
  useEffect(() => {
    if (!user) {
      history.push("/");
    }
  }, [user]);

  // Format to ILS number
  var formatter = new Intl.NumberFormat("en-HE", {
    style: "currency",
    currency: "ILS",
  });

  console.log(values);

  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          cursor: "pointer",
        }}
      >
        <Popup
          content="Logout"
          trigger={
            <Icon
              name="log out"
              inverted
              size="big"
              onClick={() => {
                dispatch(logout());
              }}
            />
          }
        />
      </div>
      <PageTitle set="small" />
      <h1 style={{ color: "white", fontSize: "50px" }}>
        {formatter.format(money)}
      </h1>

      <Form onSubmit={onSubmit} inverted size="mini">
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Product"
            placeholder="Product name"
            name="name"
            onChange={onChange}
            value={values.name}
          />
          <Form.Input
            fluid
            label="Price"
            placeholder="How much it costs ₪"
            type="number"
            step={0.01}
            min="0"
            width="4"
            name="price"
            onChange={onChange}
            value={values.price}
          />
          <Form.Button label="Add" fluid width="3" size="mini" >
            +
          </Form.Button>
        </Form.Group>
      </Form>
      <ScrollArea purchases={purchases}/>
    </div>
  );
}

export default Home;
