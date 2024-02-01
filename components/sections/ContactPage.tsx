"use client";
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaPaperPlane } from "react-icons/fa";
import { motion, useViewportScroll, useTransform } from "framer-motion";

function ContactForm() {
  const [state, handleSubmit] = useForm("meqyegyw");
  const { scrollYProgress } = useViewportScroll();
  const [isFilled, setIsFilled] = useState({
    firstname: false,
    lastname: false,
    email: false,
    message: false,
  });

  const yProgress = useTransform(scrollYProgress, [0, 1], ['45vh', '0vh']);

  if (state.succeeded) {
    return <p className="text-center text-primary text-xl font-bold">Thanks for contacting me!</p>;
    
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setIsFilled((prevState) => ({
      ...prevState,
      [name]: value.trim() !== "",
    }));
  };

  return (
    <div className="w-full h-full p-5 relative flex flex-col items-center">
      <div className="text-[6em] md:text-[128px]  w-full font-bold text-transparent text-center md:text-left" style={{ WebkitTextStroke: '1px white' }}>CONTACT</div>
    <motion.form
    
      className="mb-3 sm:mb-8 grid-cols-1 md:grid-cols-2 mx-5 md:mx-9  w-full md:w-2/3 h-auto p-3 border-4 border-neutral-800 rounded-[10px] "
      style={{ y: yProgress }}
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl font-bold text-center text-primary">Contact Me</h1>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col gap-4 m-3 w-1/2">
        <label htmlFor="firstname" className={`flex flex-col gap-1 text-lg text-primary font-bold ${isFilled.firstname ? 'block' : 'hidden'}`}>
          First Name
        </label>
        <input
          id="firstname"
          type="text" 
          name="firstname"
          placeholder='First Name'
          required
          className="rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 p-2 w-1/9 md:w-full bg-white bg-opacity-10"
          onChange={handleInputChange}
        />
        <ValidationError
          prefix="First name" 
          field="firstname"
          errors={state.errors}
        />
      </div>

      <div className="flex flex-col gap-4 m-3 w-1/2">
        <label htmlFor="lastname" className={`flex flex-col gap-1 text-lg text-primary font-bold ${isFilled.lastname ? 'block' : 'hidden'}`}>
          Last Name
        </label>
        <input
          id="lastname"
          type="text" 
          name="lastname"
          placeholder='Last Name'
          required
          className="rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 p-2 w-1/9 md:w-full bg-white bg-opacity-10"
          onChange={handleInputChange}
        />
        <ValidationError
          prefix="Last name" 
          field="lastname"
          errors={state.errors}
        />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <label htmlFor="email" className={`flex flex-col gap-1 text-lg text-primary font-bold ${isFilled.email ? 'block' : 'hidden'}`}>
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          required
          placeholder='Email Address'
          className="rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 p-2 m-3 bg-white bg-opacity-10"
          onChange={handleInputChange}
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
      </div>

      <div className="flex flex-col gap-4">
        <label htmlFor="message" className={`flex flex-col gap-1 text-lg text-primary font-bold ${isFilled.message ? 'block' : 'hidden'}`}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder='Message'
          required
          style={{ resize: 'none' }}
          className="rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 p-2 m-3 bg-white bg-opacity-10"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleInputChange(e)}
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
      </div>

      <motion.button
        type="submit"
        className={`group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-primary text-white rounded-full outline-none transition-all focus:scale-110 ${
          state.submitting
            ? "cursor-not-allowed opacity-65"
            : "hover:scale-110 hover:bg-secondary active:scale-105"
        } dark:bg-white dark:bg-opacity-10`}
        disabled={state.submitting}
      >
        {state.submitting ? (
          <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
        ) : (
          <>
            Submit{" "}
            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
          </>
        )}
      </motion.button>
    </motion.form>
    </div>
  );
}



function App() {
  return (
    <ContactForm />
  );
}

export default App;
