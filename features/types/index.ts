import * as React from "react";
import { NextPage } from "next";
import { ComponentType, ReactElement, ReactNode } from "react";

export enum Ierror {
  general,
  network,
  invalidEmailOrPassword,
}
export type IThunkApi = {
  rejectValue: Ierror;
};
export type Ilogin = {
  email: string;
  password: string;
};

export type IUser = {
  accessToken: string;
  id: string;
  firstName: string;
  token: null;
  lastName: string;
  email: string;
  role: string;
  phone: string;
  folioNumber: null;
  isVerified: boolean;
};

export interface CartItem {
  id: number;
  src: string;
  name: string;
  available: number;
  quantity: number;
  price: number;
}

export interface IregisterUser {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword?: string;
}
export interface IWishList {
  id?: string;
  coverImage: string | undefined;
  price: string;
  name: string;
  day: string;
  month: string;
  year: string;
}
export interface IOTP {
  otp: string;
}
export interface IresetPassword {
  token: any;
  password: string;
  confirmPassword?: string;
}
export interface IchangePassword {
  oldpassword: string;
  password: string;
  confirmPassword?: string;
}
export interface IloginUser {
  email: string;
  password: string;
}
export interface IforgotPassword {
  email: string;
}

export interface IWithdrawal {
  amount: string;
  bankName: string;
  accountNumber: string;
}

export type Page<P = {}> = NextPage<P> & {
  // You can disable whichever you don't need
  getLayout?: (page: ReactElement) => ReactNode;
  layout?: ComponentType;
};
export interface StyleProps {
  id?: string;
  label?: string | ReactNode;
  showPassword?: boolean;
  children?: string | ReactNode;
  onKeyUp?: any;
  onFocus?: any;
  onClick?: any;
  style?: any;
  height?: any;
  vmargin?: string;
  hmargin?: string;
  error?: boolean;
  ghost?: boolean;
  defaultChecked?: boolean;
  register?: any;
  helper?: string;
  defaultText?: string;
  borderBottom?: boolean;
  display?: string;
  showClearIcon?: boolean;
  clearField?: any;
  onKeyDown?: any;
  onKeyPress?: any;
  field?: any;
  onBlur?: any;
  accept?: string | undefined;
  alt?: string | undefined;
  autoComplete?: string | undefined;
  autoFocus?: boolean | undefined;
  htmlFor?: string | undefined;
  capture?: boolean | "user" | "environment" | undefined;
  checked?: boolean | undefined;
  crossOrigin?: string | undefined;
  disabled?: boolean | undefined;
  enterKeyHint?:
    | "enter"
    | "done"
    | "go"
    | "next"
    | "previous"
    | "search"
    | "send"
    | undefined;
  dialoglabel?: boolean | undefined;
  form?: string | undefined;
  formAction?: string | undefined;
  formEncType?: string | undefined;
  formMethod?: string | undefined;
  formNoValidate?: boolean | undefined;
  formTarget?: string | undefined;
  list?: string | undefined;
  max?: number | string | undefined;
  maxLength?: number | undefined;
  min?: number | string | undefined;
  minLength?: number | undefined;
  multiple?: boolean | undefined;
  name?: string | undefined;
  pattern?: string | undefined;
  placeholder?: string | undefined;
  readOnly?: boolean | undefined;
  required?: boolean | undefined;
  options?: any;
  components?: any | undefined;
  src?: string | undefined;
  step?: number | string | undefined;
  type?: React.HTMLInputTypeAttribute | undefined;
  value?: string | ReadonlyArray<string> | number | undefined;
  onChange?:
    | React.ChangeEventHandler<
        HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
      >
    | any
    | undefined;
  isMulti?: boolean;
  getOptionLabel?: any;
  getOptionValue?: any;
  isSearchable?: boolean | undefined;
  closeMenuOnSelect?: boolean | undefined;
  hideSelectedOptions?: boolean | undefined;
}

export interface NumberProps {
  id?: string;
  label?: string | ReactNode;
  children?: string | ReactNode;
  onKeyUp?: any;
  onFocus?: any;
  onClick?: any;
  dialoglabel?: boolean;
  style?: any;
  error?: boolean;
  ghost?: boolean;
  defaultChecked?: boolean;
  register?: any;
  helper?: string;
  onKeyDown?: any;
  onKeyPress?: any;
  field?: any;
  onBlur?: any;
  autoComplete?: string | undefined;
  autoFocus?: boolean | undefined;
  htmlFor?: string | undefined;
  capture?: boolean | "user" | "environment" | undefined;
  checked?: boolean | undefined;
  crossOrigin?: string | undefined;
  disabled?: boolean | undefined;
  enterKeyHint?:
    | "enter"
    | "done"
    | "go"
    | "next"
    | "previous"
    | "search"
    | "send"
    | undefined;
  name?: string | undefined;
  placeholder?: string | undefined;
  readOnly?: boolean | undefined;
  required?: boolean | undefined;
  type?: React.HTMLInputTypeAttribute | undefined;
  value?: string | number | null | undefined;
  onChange?: React.ChangeEventHandler | any | undefined;
}
