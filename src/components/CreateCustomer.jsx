import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { CustomerContext } from "../contexts/CustomerContext";
import UserKit from "../data/UserKit";

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
    <div>
      <h2>Create New Customer</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="customerName" placeholder="Customer Name" ref={register} />
        <input
          name="organisationNr"
          placeholder="Organisation Number"
          ref={register}
        />
        <input
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
        <input name="reference" placeholder="Reference" ref={register} />
        <input name="paymentTerm" placeholder="Payment Term" ref={register} />
        <input name="website" placeholder="Website" ref={register} />
        <input name="email" placeholder="email" ref={register} />
        <input name="phoneNumber" placeholder="Phone Number" ref={register} />
        <input type="Submit" />
      </form>
    </div>
  );
}
