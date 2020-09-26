import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { CustomerContext } from "../contexts/CustomerContext";
import UserKit from "../data/UserKit";

//styles
import { GridBox } from "../styled/Grid";
import { Label, Input, FormCreateCustomer } from "../styled/Form";
import { SubTitle } from "../styled/Heading";

export default function CreateCustomer() {
  const { register, handleSubmit, errors } = useForm();
  const { getCustomerList } = useContext(CustomerContext);
  const userKit = new UserKit();

  const onSubmit = (data, e) => {
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
    e.target.reset();
    userKit
      .createCustomer(payload)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        getCustomerList();
      });
  };

  return (
    <GridBox column="3 /span 2" color="#212121">
      <SubTitle color="#d65db1">Create New Customer</SubTitle>
      <FormCreateCustomer onSubmit={handleSubmit(onSubmit)}>
        <Label>Customer Name</Label>
        <Input name="customerName" placeholder="Customer Name" ref={register} />
        <Label>Organisation Number</Label>
        <Input
          name="organisationNr"
          placeholder="Organisation Number"
          ref={register}
        />
        <Label>Vat Number</Label>
        <Input
          name="vatNr"
          placeholder="VatNr"
          ref={register({
            required: true,
            pattern: {
              value: /^(SE[0-9]{12}$)/i,
              message: "Need to start with SE",
            },
          })}
        />
        {errors.vatNr && <p>{errors.vatNr.message}</p>}
        <Label>Reference</Label>
        <Input name="reference" placeholder="Reference" ref={register} />
        <Label>Payment Term</Label>
        <Input name="paymentTerm" placeholder="Payment Term" ref={register} />
        <Label>Website</Label>
        <Input name="website" placeholder="Website" ref={register} />
        <Label>Email</Label>
        <Input name="email" placeholder="email" ref={register} />
        <Label>Phone Number</Label>
        <Input name="phoneNumber" placeholder="Phone Number" ref={register} />
        <input type="Submit" />
      </FormCreateCustomer>
    </GridBox>
  );
}
