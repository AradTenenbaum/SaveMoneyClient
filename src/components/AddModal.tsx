import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Form, Modal } from "semantic-ui-react";
import { addPurchase } from "../actions/purchases";
import { useForm } from "../hooks/useForm";
import "../css/AddModal.css";

function AddModal({
  isOpenModal,
  setIsOpenModal,
}: {
  isOpenModal: boolean;
  setIsOpenModal: Function;
}) {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const { onChange, onSubmit, Clear, values } = useForm(
    () => {
      dispatch(
        addPurchase(user.token, {
          name: values.name,
          price: parseFloat(values.price),
          userId: user.user._id,
          date: new Date(Date.now())
        })
      );
      Clear();
      setIsOpenModal(false);
    },
    {
      name: "",
      price: "",
    }
  );

  return (
    <Modal
      onClose={() => setIsOpenModal(false)}
      onOpen={() => setIsOpenModal(true)}
      open={isOpenModal}
    >
      <Modal.Header className="mybgcolor">
        <h1 style={{ color: "white" }}>Add your purchase</h1>
      </Modal.Header>
      <Modal.Content className="mybgcolor">
        <Form inverted onSubmit={onSubmit} size="big">
          <Form.Group widths="equal">
            <Form.Input
              autoComplete="off"
              fluid
              label="Product"
              placeholder="Product name"
              name="name"
              onChange={onChange}
              value={values.name}
            />
            <Form.Input
              autoComplete="off"
              fluid
              label="Price"
              placeholder="How much it costs ₪"
              type="number"
              step={0.01}
              min="0"
            //   width="4"
              name="price"
              onChange={onChange}
              value={values.price}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Button size="big"
            fluid
              type="submit"
              content="Purchase"
              icon="ils"
              className="my-modal-content"
            />
          <Button size="big" className="btn-discard" fluid onClick={(e) => {
              e.preventDefault();
              setIsOpenModal(false);
          }}>Discard</Button>
          </Form.Group>
        </Form>
      </Modal.Content>
    </Modal>
  );
}

export default AddModal;
