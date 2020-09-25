import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";

//styles
import { SubTitle } from "../styled/Heading";
import { Container } from "../styled/Container";
import { useHistory } from "react-router-dom";
//data
import UserKit from "../data/UserKit";
import UserInfo from "../components/UserInfo";

export default function CustomerDetailPage(props) {
  const [customer, setCustomer] = useState([]);
  const customerId = props.match.params.id;
  const userKit = new UserKit();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    getCustomerDetail(); // eslint-disable-next-line
  }, []);

  function getCustomerDetail() {
    userKit
      .getCustomerDetail(customerId)
      .then((res) => res.json())
      .then((data) => {
        setCustomer(data);
      });
  }

  function handleDelete() {
    userKit.deleteCustomer(customerId);
    alert("Customer is deleted");
    history.push("/home");
  }

  const onSubmit = (data) => {
    const payload = {
      name: data.customerName,
      organisationNr: data.organisationNr,
      vatNr: data.vatNr,
      reference: data.reference,
      paymentTerm: data.paymentTerm,
      website: data.website,
      email: data.email,
      phoneNumber: data.phoneNumber,
    };
    userKit
      .updateCustomer(payload, customerId)
      .then((res) => res.json())
      .then(() => history.push("/home"));
  };

  return (
    <Container>
      {customer && (
        <div>
          <SubTitle>{customer.name}</SubTitle>
          <p>Name: {customer.name}</p>
          <p>Organisation Number: {customer.organisationNr}</p>
          <p>VatNr: {customer.vatNr}</p>
          <p>Reference: {customer.reference}</p>
          <p>Payment term: {customer.paymentTerm}</p>
          <p>Website: {customer.website}</p>
          <p>Email: {customer.email}</p>
          <p>Phone Number: {customer.phoneNumber}</p>
          <button onClick={handleDelete}>Delete Customer</button>
          <div>
            <UserInfo />
          </div>
        </div>
      )}
      <div>
        <h2>Update Customer</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            name="customerName"
            defaultValue={customer.name}
            placeholder="Customer Name"
            ref={register}
          />
          <input
            name="organisationNr"
            defaultValue={customer.organisationNr}
            placeholder="Organisation Number"
            ref={register}
          />
          <input
            name="vatNr"
            defaultValue={customer.vatNr}
            placeholder="VatNr"
            ref={register({
              required: true,
              pattern: {
                value: /^(SE[0-9]{12}$)/i,
                message: "Need to start with SE and ",
              },
            })}
          />
          {errors.vatNr && <p>{errors.vatNr.message}</p>}
          <input
            name="reference"
            defaultValue={customer.reference}
            placeholder="Reference"
            ref={register}
          />
          <input
            name="paymentTerm"
            defaultValue={customer.paymentTerm}
            placeholder="Payment Term"
            ref={register}
          />
          <input
            name="website"
            defaultValue={customer.website}
            placeholder="Website"
            ref={register}
          />
          <input
            name="email"
            defaultValue={customer.email}
            placeholder="email"
            ref={register}
          />
          <input
            name="phoneNumber"
            defaultValue={customer.phoneNumber}
            placeholder="Phone Number"
            ref={register}
          />
          <button type="Submit">Update</button>
        </form>
      </div>
    </Container>
  );
}
