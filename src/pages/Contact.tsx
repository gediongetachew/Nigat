import Logo from "../assets/Logo.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import arrow from "../assets/icons/arrowright.svg";
import { Link } from "react-router-dom";
import { ROUTES } from "../util/data";
import BG from '../assets/contactSmall.svg'
const ContactSchema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  phoneNumber: Yup.string().matches(
    /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
    "Invalid phone number"
  ),

  message: Yup.string().required("Message is required"),
});

const ContactUs = () => {
  return (
  
      
      
      <article
        className="relative flex flex-col font-trap-Regular px-x-axis py-6 bg-primary text-white pb-10    "
        
      >
              <section className="w-full flex lg:hidden">
            <Link to={ROUTES[0]}>
              <img
                src={Logo}
                alt="logo"
                className="w-[81px] lg:w-[203px] h-[40px] lg:h-[65px]"
              />
            </Link>
          </section>
         {/* <div
    className="block md:hidden  "
    style={{
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${BG})`, // Use the background image for small screens
      backgroundSize: "cover",
      backgroundPosition: "center",
      position:'absolute',
      top:0,
      left:0,
      
      zIndex: 1
    }}
  /> */}
        

        <section className="lg:mr-[170px] align-middle mt-32">
          <section className="justify-center w-[50%] text-nowrap font-bold text-[40px] sm:text-[48px] lg:text-[80px] xl:text-[96px] uppercase  mt-[6vh] lg:w-1/2 px-[2%] my-10">
            <div className="leading-[50px] lg:leading-[105px]">
            <p>Get In touch</p>
            <p> With Us !</p>
            </div>

            <p className="font-[400] text-[15px] xl:text-[24px] normal-case mt-4  px-2 text-wrap w-96  sm:w-full leading-[20px] lg:leading-[40px] ">
              Ethiopian coffee experiences that delight the senses while
              promoting sustainable farming practices and community engagement.
            </p>
          </section>

          <Formik
            initialValues={{
              fullName: "",
              email: "",
              phoneNumber: "",
              message: "",
            }}
            validationSchema={ContactSchema}
            onSubmit={() => {}}
          >
            {() => (
              <Form>
                <section
                  className={`flex flex-col lg:grid grid-col-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-10 gap-y-10 w-full mt-20 px-[2%] `}
                >
                  <div className="w-full">
                    <Field
                      type="text"
                      name="fullName"
                      placeholder="Your Name"
                      className={`font-[600] w-full pt-4 pb-8 px-4 bg-inherit border-b text-2xl placeholder:text-white `}
                    />
                    <ErrorMessage
                      name="fullName"
                      component="div"
                      className="text-secondary"
                    />
                  </div>

                  <div className="w-full">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className={`font-[600] w-full pt-4 pb-8 px-4 bg-inherit border-b text-2xl placeholder:text-white `}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-secondary"
                    />
                  </div>

                  <div className="w-full">
                    <Field
                      type="tel"
                      name="phoneNumber"
                      placeholder="Phone Number (optional)"
                      className={`font-[600] w-full pt-4 pb-8 px-4 bg-inherit border-b text-2xl placeholder:text-white  `}
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="text-secondary"
                    />
                  </div>

                  <div className="w-full col-span-3">
                    <textarea
                      className="text-area font-[600] w-full pt-4 pb-8 px-4 bg-inherit border-b text-2xl placeholder:text-white "
                      placeholder="Message"
                      rows={3}
                      name="message"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-secondary"
                    />
                  </div>
                </section>

                <div className="flex justify-center md:justify-end col-span-3 w-full px-[2%]">
                  <button
                    type="submit"
                    className={
                      "flex items-center justify-end gap-8 lg:gap-12 text-secondary-light mt-16 lg:mt-20 mb-36"
                    }
                  >
                    <p className="font-bold text-2xl sm:text-[25px] lg:text-[32px] pt-1 uppercase">
                      Leave us a Message
                    </p>
                    <div
                      className={
                        "bg-secondary-light flex justify-center items-center  rounded-lg lg:rounded-2xl w-[36px] h-[40px] lg:w-[72px] lg:h-[70px] cursor-pointer hover:opacity-90"
                      }
                    >
                      <img src={arrow} alt="arrow" className="" />
                    </div>
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </section>
      </article>
  
  );
};

export default ContactUs;
