import Logo from "../assets/Logoblack.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import arrow from "../assets/icons/arrowgold.svg";
import { Link } from "react-router-dom";
import { ROUTES } from "../util/data";

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

  product: Yup.string(),
  location: Yup.string(),

  message: Yup.string().required("Message is required"),
});

const Order = () => {
  return (
    <main className=" bg-secondary font-trap-Regular">
      <div className="" />

     


      <article
        className="px-x-axis text-white pb-10 bg-secondary z-[400] lg:z-0  mt-20 lg:mt-28 "
        style={{
          
          top: 0,
          left: 0,
          width: "100%",
        }}
      >
       

        <article className="px-[5%] lg:mr-[150px] pt-[100px] lg:pt-28">
        <section className=" text-[48px] lg:text-[96px] uppercase leading-[52px] lg:leading-[105px] mt-[6vh] w-full lg:w-1/2 px-[1%] my-10">


            <p className="font-bold">Order Now</p>

            <p className="font-[400] text-2xl normal-case mt-4 ">
              Ethiopian coffee experiences that delight the senses while
              promoting sustainable farming practices and community engagement.
            </p>
          </section>

          <Formik
            initialValues={{
              fullName: "",
              email: "",
              phoneNumber: "",
              product: "",
              location: "",
              message: "",
            }}
            validationSchema={ContactSchema}
            onSubmit={() => {}}
          >
            {() => (
              <Form>
                <section className="grid grid-cols-3 gap-x-10 gap-y-10 w-full mt-10 ">
                  <div className="col-span-3 lg:col-span-1 w-full flex flex-col">
                    <Field
                      type="text"
                      name="fullName"
                      placeholder="Your Name"
                      className="font-[600] w-full pt-4 pb-8 px-4 bg-inherit z-20 border-b text-2xl placeholder:text-white"
                    />
                    <ErrorMessage
                      name="fullName"
                      component="div"
                      className="text-white"
                    />
                  </div>

                  <div className="col-span-3 lg:col-span-1 w-full flex flex-col">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="font-[600] w-full pt-4 pb-8 px-4 bg-inherit z-20 border-b text-2xl cursor-text placeholder:text-white"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-white"
                    />
                  </div>

                  <div className="col-span-3 lg:col-span-1 w-full flex flex-col">
                    <Field
                      type="tel"
                      name="phoneNumber"
                      placeholder="Phone Number (optional)"
                      className="font-[600] w-full pt-4 pb-8 px-4 bg-inherit z-20 border-b text-2xl placeholder:text-white"
                    />
                    <ErrorMessage
                      name="phoneNumber"
                      component="div"
                      className="text-white"
                    />
                  </div>

                  <div className="col-span-3 w-full flex flex-col">
                    <Field
                      type="text"
                      name="product"
                      placeholder="Product Description"
                      className="font-[600] w-full pt-4 pb-8 px-4 bg-inherit z-20 border-b text-2xl placeholder:text-white"
                    />
                    <ErrorMessage
                      name="product"
                      component="div"
                      className="text-white"
                    />
                  </div>

                  <div className="col-span-3 w-full flex flex-col">
                    <Field
                      type="text"
                      name="location"
                      placeholder="Location"
                      className="font-[600] w-full pt-4 pb-8 px-4 bg-inherit z-20 border-b text-2xl placeholder:text-white"
                    />
                    <ErrorMessage
                      name="location"
                      component="div"
                      className="text-white"
                    />
                  </div>

                  <div className="w-full col-span-3">
                    <textarea
                      className="text-area font-[600] w-full pt-4 pb-8 px-4 bg-inherit z-20 border-b text-2xl placeholder:text-white"
                      placeholder="Message"
                      rows={3}
                      name="message"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-white"
                    />
                  </div>
                </section>

                <div className="flex justify-end col-span-3 w-full">
                  <button
                    type="submit"
                    className={
                      "flex items-center justify-end gap-6 lg:gap-12  text-white mt-12 lg:mb-36"
                    }
                  >
                    <p className="font-bold text-[20px]  lg:text-[32px] pt-1 uppercase">
                      Leave us a Message
                    </p>
                    <div
                      className={
                        "bg-white flex justify-center items-center  rounded-2xl w-[72px] h-[70px] cursor-pointer hover:opacity-90"
                      }
                    >
                      <img src={arrow} alt="arrow" className="" />
                    </div>
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </article>
      </article>
    </main>
  );
};

export default Order;


