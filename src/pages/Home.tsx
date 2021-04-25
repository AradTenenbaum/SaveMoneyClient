import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Button, Form, Icon, Popup } from "semantic-ui-react";

import { deleteAllPurchases, getAll } from "../actions/purchases";
import { logout } from "../actions/user";
import AddModal from "../components/AddModal";
import PageTitle from "../components/PageTitle";
import ScrollArea from "../components/ScrollArea";
import '../css/Home.css';

function Home() {
  // Hooks
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state: any) => state.user);
  const purchases = useSelector((state: any) => state.purchase);
  const [money, setMoney] = useState(0);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
   

  useEffect(() => {
    if (user && user.token) {
      console.log(user.user);
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
      <h1 style={{ color: "white", fontSize: "50px", overflow: "auto", marginTop: "15px", marginBottom: "5px" }}>
        {formatter.format(money)}
      </h1>
          <Button className="button2" fluid width="3" size="medium" color="teal" onClick={() => {
            setIsOpenModal(true);
          }} >
            <Icon name="shop" />
            Add to purchases
          </Button>
          <Button fluid size="medium" onClick={() => {
            dispatch(deleteAllPurchases(user.token, user.user._id));
          }}>
            Clear
          </Button>
      <ScrollArea purchases={purchases}/>
      <AddModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}/>
    </div>
  );
}

export default Home;
