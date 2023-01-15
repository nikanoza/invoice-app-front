import { SubmitHandler, useForm } from "react-hook-form";
import schema, { FormValues } from "schema";
import styled, { css } from "styled-components";
import { ArrowLeft } from "svg";
import { InvoiceType, StyledComponentsProps } from "types";
import { zodResolver } from "@hookform/resolvers/zod";
import Backdrop from "./Backdrop";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import InvoiceInfoForm from "./InvoiceInfoForm";
import ItemsInForm from "./ItemsInForm";
import { requestBodyTransformer } from "helpers";
import { addInvoice, updateInvoice } from "services";

const FormComponent: React.FC<{
  darkMode: boolean;
  edit: boolean;
  close: () => void;
  setInvoices: React.Dispatch<React.SetStateAction<InvoiceType[]>>;
  invoice?: InvoiceType;
  setInvoice?: React.Dispatch<React.SetStateAction<InvoiceType | null>>;
  invoices?: InvoiceType[];
}> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
    setValue,
    trigger,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: props.edit ? props.invoice : {},
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const newInvoice = requestBodyTransformer(
      data,
      props.edit ? props.invoice?.status : "pending"
    );
    if (!props.edit) {
      try {
        const response = await addInvoice(newInvoice);
        props.setInvoices((state) => [...state, response.data]);
        props.close();
      } catch (error) {}
    } else {
      await updateInvoice(newInvoice, props.invoice?.id || "");
      const clone = props.invoices?.slice();
      const invoiceIndex = clone?.findIndex(
        (invoice) => invoice.id === props.invoice?.id
      );
      if (clone) {
        clone[invoiceIndex || 1] = {
          ...newInvoice,
          id: props.invoice?.id || "",
        };
        props.setInvoices(clone);
        if (props.setInvoice) {
          props.setInvoice({ ...newInvoice, id: props.invoice?.id || "" });
        }
        props.close();
      }
    }
  };

  const saveAsDraft = async () => {
    const result = await trigger();
    if (result) {
      const data = getValues();
      const newInvoice = requestBodyTransformer(data, "draft");
      try {
        const response = await addInvoice(newInvoice);
        props.setInvoices((state) => [...state, response.data]);
        props.close();
      } catch (error) {}
    }
  };

  const closeHandler = () => {
    props.close();
  };

  const items = props.edit
    ? props.invoice?.items.map((invoice) => {
        return {
          name: invoice.name,
          price: invoice.price,
          quantity: invoice.quantity,
        };
      })
    : [];

  return (
    <Backdrop>
      <Card dark={props.darkMode} onSubmit={handleSubmit(onSubmit)}>
        <PaddingBox>
          <ReturnBox>
            <ArrowLeft />
            <CloseModal type="button" onClick={() => props.close()}>
              <Text dark={props.darkMode}>Go Back</Text>
            </CloseModal>
          </ReturnBox>
          <Title dark={props.darkMode}>
            {props.edit ? `Edit #${props.invoice?.id}` : "New Invoice"}
          </Title>
          <FormSection>Bill From</FormSection>
          <BillFrom
            register={register}
            darkMode={props.darkMode}
            errors={errors}
          />
          <FormSection style={{ marginTop: "16px" }}>Bill To</FormSection>
          <BillTo
            register={register}
            darkMode={props.darkMode}
            errors={errors}
          />
          <InvoiceInfoForm
            register={register}
            darkMode={props.darkMode}
            errors={errors}
            setValue={setValue}
            paymentTerms={props.edit ? props.invoice?.paymentTerms : 1}
          />
          <ItemsInForm
            darkMode={props.darkMode}
            errors={errors}
            setValue={setValue}
            items={items || []}
          ></ItemsInForm>
        </PaddingBox>
        <Gradient />
        <Controls dark={props.darkMode}>
          <Discard
            dark={props.darkMode}
            type="button"
            onClick={closeHandler}
            edit={props.edit}
          >
            {props.edit ? "Cancel" : "Discard"}
          </Discard>
          <Draft
            dark={props.darkMode}
            type="button"
            edit={props.edit}
            onClick={saveAsDraft}
          >
            Save as Draft
          </Draft>
          <Save type="submit">
            {props.edit ? "Save Changes" : "Save & Send"}
          </Save>
        </Controls>
      </Card>
    </Backdrop>
  );
};

export default FormComponent;

const Card = styled.form(
  (props: StyledComponentsProps) => css`
    width: 100%;
    max-width: 616px;
    height: 100%;
    background-color: ${props.dark ? "var(--SemiDark)" : "var(--Light)"};
    overflow: auto;
    @media (min-width: 768px) {
      overflow: visible;
      border-radius: 0px 20px 20px 0px;
      margin-top: 80px;
      height: calc(100% - 80px);
    }
    @media (min-width: 1440px) {
      height: 100%;
      margin-top: 0;
      max-width: 719px;
    }
  `
);

const ReturnBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 23.66px;
  align-self: flex-start;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Text = styled.h3(
  (props: StyledComponentsProps) => `
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  text-transform: capitalize;
  color: ${props.dark ? "white" : "var(--Dark)"};
`
);

const CloseModal = styled.button(
  (props: StyledComponentsProps) => css`
    outline: none;
    border: none;
    background-color: transparent;
    color: ${props.dark ? "white" : "var(--Dark)"};
  `
);

const Title = styled.h1(
  (props: StyledComponentsProps) => css`
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.5px;
    color: ${props.dark ? "white" : "var(--Dark)"};
    margin-top: 24px;
    @media (min-width: 768px) {
      margin-top: 10px;
    }
  `
);

const FormSection = styled.h2`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: var(--Violet);
  margin-top: 24px;
`;

const Gradient = styled.div`
  margin-top: 24px;
  width: 100%;
  height: 64px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0%,
    rgba(0, 0, 0, 0.1) 100%
  );
  @media (min-width: 768px) {
    padding-left: 117px;
  }
`;

const Controls = styled.div(
  (props: StyledComponentsProps) => css`
    width: 100%;
    height: 91px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 7px;
    background-color: ${props.dark ? "var(--darkBlue)" : "white"};
    @media (min-width: 768px) {
      border-bottom-right-radius: 20px;
      padding: 0 56px 0 56px;
    }
    @media (min-width: 768px) {
      padding-left: 117px;
    }
  `
);

const Button = styled.button`
  padding: 16px;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  outline: none;
  border: none;
  border-radius: 24px;
  cursor: pointer;
`;

const Discard = styled(Button)(
  (props: StyledComponentsProps) => css`
    color: ${props.dark ? "var(--lightGray)" : "var(--Sky)"};
    background-color: ${props.dark ? "var(--darkGray)" : "#F9FAFE"};
    @media (min-width: 768px) {
      margin-left: ${props.edit ? "auto" : "0"};
      justify-self: ${props.edit ? "flex-end" : "flex-start"};
    }
  `
);

const Draft = styled(Button)(
  (props: StyledComponentsProps) => css`
    color: ${props.dark ? "var(--Gray)" : "var(--Sky)"};
    background-color: var(--HeaderBackground);
    display: ${props.edit ? "none" : "block"};
    @media (min-width: 768px) {
      margin-left: auto;
      justify-self: flex-end;
    }
  `
);

const Save = styled(Button)`
  color: white;
  background-color: var(--Violet);
`;

const PaddingBox = styled.div`
  padding: 94px 24px 0px 24px;
  @media (min-width: 768px) {
    overflow: auto;
    height: calc(100% - 80px - 110px);
    padding: 14px 56px 0px 56px;
  }
  @media (min-width: 1440px) {
    margin-left: 103px;
  }
`;
