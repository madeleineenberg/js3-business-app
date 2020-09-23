import React, { useState, useEffect } from "react";
import { SubTitle } from "../styled/Heading";
import { Container } from "../styled/Container";
import { useHistory } from "react-router-dom";
import UserKit from "../data/UserKit";

export default function CustomerDetailPage(props) {
  const [customer, setCustomer] = useState([]);
  const customerId = props.match.params.id;
  const userKit = new UserKit();
  const history = useHistory();

  useEffect(() => {
    getCustomerDetail();
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
    userKit
      .deleteCustomer(customerId)
      .then((res) => res.json())
      .then(() => history.push("/home"));
  }

  return (
    <Container>
      <div>
        <SubTitle>{customer.name}</SubTitle>
        <button onClick={handleDelete}>Delete Customer</button>
        <p>Name: {customer.name}</p>
        <p>Organisation Number: {customer.organisationNr}</p>
        <p>VatNr: {customer.vatNr}</p>
        <p>Reference: {customer.reference}</p>
        <p>Payment term: {customer.paymentTerm}</p>
        <p>Website: {customer.website}</p>
        <p>Email: {customer.email}</p>
        <p>Phone Number: {customer.phoneNumber}</p>
      </div>
    </Container>
  );
}
