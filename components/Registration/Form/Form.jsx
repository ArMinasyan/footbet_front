// hooks and helpers
import useTranslation from "next-translate/useTranslation";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// components
import { InputContainer } from "/components/common/auth/InputContainer/InputContainer";
import { FileInput } from "./FileInput/FileInput";
import { Button } from "./Button/Button";
// styles
import styles from "./Form.module.scss";
// icons
import userIcon from "/public/images/register/user-input.svg";
import calendar from "/public/images/register/calendar.svg";
import email from "/public/images/register/mail.svg";
import phone from "/public/images/register/phone.svg";
import key from "/public/images/register/key.svg";
import { isMobile, request, setCookie } from "../../../lib/er.lib";
import {
  GET_ACCOUNT_INFO,
  LOGIN,
  REGISTER,
} from "../../../lib/request-destinations";
import { Ball } from "../../common/auth/BallRightCorner/Ball";

import { ToastContainer, toast } from "react-toastify";
import { useRef, useState } from "react";
import { useRouter } from "next/dist/client/router";
import { login } from "../../../redux/features/userSlice";
import { useDispatch } from "react-redux";

// import { DatePickerInput } from 'carbon-components-react';

export function Form({ title }) {
  const [date, setDate] = useState(null);
  const formRef = useRef();
  const dispatch = useDispatch();
  const router = useRouter();
  const dRef = useRef();

  const formatDate = (date) =>
    !date
      ? ``
      : `${date.getFullYear()}-${(date.getMonth() + 1 + "").padStart(
        2,
        "0"
      )}-${(date.getDate() + "").padStart(2, "0")}`;
  // const formatDateForSubmit = (date) => !date ? `${(date.getMonth() + 1 + "").padStart(2, "0")}-${(date.getDate() + "").padStart(2, "0")}` :

  const // translation consfigs
    { t } = useTranslation("common"),
    translationPath = "registration.inputPlaceHolders.",
    translate = (key) => t(`${translationPath}${key}`),
    // yup configs
    schema = yup.object().shape({
      username: yup
        .string()
        .required()
        .matches(/(^[A-Za-z]{1,8})([ ]{0,1})([A-Za-z]{1,10})/gm),
      dateOfBirth: yup.string().required(),
      email: yup
        .string()
        .required()
        .matches(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      mobile: yup
        .string()
        .required()
        .matches(/^[+]{1}[0-9]+$/gm),
      password: yup.string().required().min(8),
    }),
    // form configs
    {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm({
      mode: "onChange",
      resolver: yupResolver(schema),
    }),
    submit = async (e) => {
      e.preventDefault();
      const registerFormData = new FormData(formRef.current);
      const dateOfBirth = isMobile()
        ? formatDate(new Date(date))
        : registerFormData.get(`dateOfBirth`) || "";
      const [year, month, _date] = dateOfBirth.split(`-`);
      if (year && month && _date) {
        registerFormData.delete(`dateOfBirth`);
        registerFormData.append(`dateOfBirth`, [month, _date, year].join(`.`));
      }

      try {
        const register_response = await request(REGISTER, registerFormData);

        toast(`Successfully registered`);

        if (register_response?.status === 200) {
          const { token } = (
            await request(LOGIN, {
              email: formRef.current.email.value,
              password: formRef.current.password.value,
            })
          ).data?.data;
          setCookie(`access-token`, token, 1);

          const user = (await request(GET_ACCOUNT_INFO, {}, { auth: true }))
            .data?.data;
          dispatch(login(user));
        }

        router.push(`/`);
      } catch (error) {
        if (!error.response.success) {
          toast(error.response.data?.validationError?.message ||
            error.response.data?.message ||
            `Не удалось зарегистрироватся`, {
            type: `error`,
          });
        }
      }
    };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title_container}>
          <p>{title}</p>
        </div>
        <form ref={formRef}>
          <FileInput
            id="upload_file_input"
            type="file"
            other={register("profile_img")}
          />
          <InputContainer
            label={userIcon}
            id="name"
            type="text"
            placeholder={translate("fullName")}
            errors={!!errors.username}
            other={register("username")}
          />
          {isMobile() ? (
            <>
              <InputContainer
                label={calendar}
                className={`hidden`}
                id="birth_date"
                type="text"
                placeholder={translate("birthDate")}
                errors={!!errors.dateOfBirth}
                other={{
                  ...register("dateOfBirth"),
                  // onClick:()=>setShowCalendar(true),
                  // onFocus: (e) => setShowCalendar(true),
                  value: formatDate(new Date(date)),
                }}
              />
              {
                <div className={styles.dateInput}>
                  <label>
                    <span>
                      <img src={calendar.src} alt="icon"/>
                    </span>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </label>
                </div>
              }
            </>
          ) : (
            <InputContainer
              label={calendar}
              id="birth_date"
              type="text"
              onClick={() => {
                if (dRef.current) {
                  dRef.current.focus();
                }
              }}
              innerRef={dRef}
              placeholder={translate("birthDate")}
              errors={!!errors.dateOfBirth}
              other={{
                ...register("dateOfBirth"),
                onFocus: (e) => (e.target.type = "date"),
                onBlur: (e) => (e.target.type = "text"),
              }}
            />
          )}
          <InputContainer
            label={email}
            id="email"
            type="text"
            placeholder={translate("email")}
            errors={!!errors.email}
            other={register("email")}
          />
          <InputContainer
            label={phone}
            id="phone_number"
            type="text"
            placeholder={translate("phone")}
            errors={!!errors.mobile}
            other={register("mobile")}
          />
          <InputContainer
            label={key}
            id="password"
            type="password"
            placeholder={translate("password")}
            errors={!!errors.password}
            other={register("password")}
          />
          <Button content={translate("buttonTitle")} onClick={submit}/>
        </form>
      </div>
      <div className={styles.ball}>
        <Ball/>
      </div>
      <ToastContainer/>
    </>
  );
}
