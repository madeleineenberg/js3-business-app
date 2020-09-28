import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import UserInfo from "../components/UserInfo";

//styles
import {
  SubTitle,
  Heading,
  CustomerInfo,
  BoldText,
  ErrorMessage,
} from "../styled/Heading";
import { Container, TextWrapper } from "../styled/Container";
import { Grid, GridBox } from "../styled/Grid";
import { Label, Input, FormCreateCustomer } from "../styled/Form";
import { CreateButton, DeleteButton } from "../styled/Buttons";
import { Ul } from "../styled/List";

//data
import UserKit from "../data/UserKit";

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
      <Heading>Customer Detail</Heading>
      {customer && (
        <Grid>
          <UserInfo />
          <GridBox column="1 / span 2">
            <SubTitle color="rgb(240, 151, 151)">Update Customer</SubTitle>
            <FormCreateCustomer onSubmit={handleSubmit(onSubmit)}>
              <Label>Customer Name</Label>
              <Input
                border="rgb(240, 151, 151)"
                name="customerName"
                defaultValue={customer.name}
                placeholder="Customer Name"
                ref={register}
              />
              <Label>Organisation Number</Label>
              <Input
                border="rgb(240, 151, 151)"
                name="organisationNr"
                defaultValue={customer.organisationNr}
                placeholder="Organisation Number"
                ref={register}
              />
              <Label>Vat Number</Label>
              <Input
                border="rgb(240, 151, 151)"
                name="vatNr"
                defaultValue={customer.vatNr}
                placeholder="VatNr"
                ref={register({
                  required: true,
                  pattern: {
                    value: /^(SE[0-9]{10}$)/i,
                    message: "Need to start with SE and include 10 digits ",
                  },
                })}
              />
              {errors.vatNr && (
                <ErrorMessage>{errors.vatNr.message}</ErrorMessage>
              )}
              <Label>Reference</Label>
              <Input
                border="rgb(240, 151, 151)"
                name="reference"
                defaultValue={customer.reference}
                placeholder="Reference"
                ref={register}
              />
              <Label>Payment Term</Label>
              <Input
                border="rgb(240, 151, 151)"
                name="paymentTerm"
                defaultValue={customer.paymentTerm}
                placeholder="Payment Term"
                ref={register({
                  required: true,
                  min: 1,
                })}
              />
              {errors.paymentTerm && (
                <ErrorMessage>Need at least 1 digit</ErrorMessage>
              )}
              <Label>Website</Label>
              <Input
                border="rgb(240, 151, 151)"
                name="website"
                defaultValue={customer.website}
                placeholder="Website"
                ref={register}
              />
              <Label>Email</Label>
              <Input
                border="rgb(240, 151, 151)"
                name="email"
                defaultValue={customer.email}
                placeholder="email"
                ref={register}
              />
              <Label>Phone Number</Label>
              <Input
                border="rgb(240, 151, 151)"
                name="phoneNumber"
                defaultValue={customer.phoneNumber}
                placeholder="Phone Number"
                ref={register}
              />
              <CreateButton
                hover="rgb(240, 151, 151)"
                border="rgb(240, 151, 151)"
                type="Submit"
                value="Update"
              />
            </FormCreateCustomer>
          </GridBox>
          <GridBox column="3 /span 2">
            <SubTitle color="#d65db1">{customer.name}</SubTitle>
            <Ul>
              <li>
                <BoldText color="#d65db1">
                  Name: <CustomerInfo>{customer.name}</CustomerInfo>
                </BoldText>
                <BoldText color="#d65db1">
                  Organisation Number:{" "}
                  <CustomerInfo>{customer.organisationNr}</CustomerInfo>
                </BoldText>
                <BoldText color="#d65db1">
                  VatNr: <CustomerInfo>{customer.vatNr}</CustomerInfo>
                </BoldText>
                <BoldText color="#d65db1">
                  Reference: <CustomerInfo>{customer.reference}</CustomerInfo>
                </BoldText>
                <BoldText color="#d65db1">
                  Payment term:{" "}
                  <CustomerInfo>{customer.paymentTerm}</CustomerInfo>
                </BoldText>
                <BoldText color="#d65db1">
                  Website: <CustomerInfo>{customer.website}</CustomerInfo>
                </BoldText>
                <BoldText color="#d65db1">
                  Email: <CustomerInfo>{customer.email}</CustomerInfo>
                </BoldText>
                <BoldText color="#d65db1">
                  Phone Number:
                  <CustomerInfo> {customer.phoneNumber}</CustomerInfo>
                </BoldText>
              </li>
              <Container>
                <TextWrapper>
                  <DeleteButton onClick={handleDelete}>
                    Delete Customer
                  </DeleteButton>
                </TextWrapper>
              </Container>
            </Ul>
          </GridBox>
        </Grid>
      )}
    </Container>
  );
}
