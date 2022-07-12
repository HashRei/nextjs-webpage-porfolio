import { Stack, Input, Textarea, useToast } from "@chakra-ui/react";
import styles from "../styles/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { userinfo, headings, ctaTexts } from "../Constants/userinfo";
import * as emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contact = ({ currentTheme }) => {
  emailjs.init(process.env.USER_ID);
  const toast = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({});

  const onSubmit = ({ username, email, text }) => {
    emailjs
      .send(
        process.env.SERVICE_ID,
        process.env.TEMPLATE_ID,
        { username, email, text },
        process.env.USER_ID
      )
      .then(
        (result) => {
          toast({
            description: "You reached us!",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          console.log(result.text);
        },
        (error) => {
          toast({
            description: "Contact form didn't work, try again",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
          console.log(error.text);
        }
      );
    reset();
  };

  const iconStyles = {
    backgroundColor: currentTheme.tertiary,
    color: "#101010",
    boxShadow: currentTheme.boxShadow,
  };

  return (
    <>
      <div className={styles.contactWrapper}>
        <div className={styles.contactHeading}>
          <h2 className={styles.contact}>{headings.contact}</h2>
        </div>
        <form
          className={styles.form}
          style={{
            borderColor: currentTheme.text,
            backgroundColor:
              currentTheme.name === "light" ? "#F0F0F0" : "#DCDCDC",
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Stack spacing={4}>
            <Input
              type="text"
              name="username"
              placeholder="Your Name"
              focusBorderColor={currentTheme.tertiary}
              isRequired
              autoComplete="off"
              onChange={(e) => {
                setName(e.target.value);
              }}
              style={{ backgroundColor: "#fafafa", color: "#101010" }}
              {...register("username", {
                required: true,
                maxLength: 50,
              })}
            />
            {errors?.username?.type === "maxLength" && (
              <p>Name cannot exceed 20 characters</p>
            )}

            <Input
              type="email"
              name="email"
              placeholder="yourname@email.com"
              focusBorderColor={currentTheme.tertiary}
              autoComplete="off"
              isRequired
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              style={{ backgroundColor: "#fafafa", color: "#101010" }}
              {...register("email", {
                required: "required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
            />
            {errors.email && <span role="alert">{errors.email.message}</span>}
            <Textarea
              placeholder="Message for me!"
              resize="vertical"
              focusBorderColor={currentTheme.tertiary}
              isRequired
              name="text"
              autoComplete="off"
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              style={{ backgroundColor: "#fafafa", color: "#101010" }}
              {...register("text", { maxLength: 500 })}
            />
            {errors?.text?.type === "maxLength" && (
              <p>Description cannot exceed 500 characters</p>
            )}

            <div>
              <div
                className={styles.submit}
                style={{ backgroundColor: currentTheme.tertiary }}
              >
                <button type="submit">{ctaTexts.submitBTN}</button>
              </div>
            </div>
          </Stack>
        </form>
      </div>
      <div className={styles.socialIconDiv}>
        {userinfo.socials
          ? userinfo.socials.map((social, key) => {
              return (
                <div className={styles.socialIcon} style={iconStyles} key={key}>
                  <Link href={social.link}>
                    <a>
                      <FontAwesomeIcon icon={social.icon} />
                    </a>
                  </Link>
                </div>
              );
            })
          : null}
      </div>
    </>
  );
};

export default Contact;
