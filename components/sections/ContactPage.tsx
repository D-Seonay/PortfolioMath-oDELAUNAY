"use client";

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { FaPaperPlane } from "react-icons/fa";



function ContactForm() {
  const [state, handleSubmit] = useForm("meqyegyw");
  if (state.succeeded) {
    return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Thanks for your message!</h1>
      <p className="text-lg">I'll get back to you as soon as possible.</p>
      </div>
    ); 
  }
  else if (state.errors) {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Something went wrong.</h1>
      <p className="text-lg">Please try again later.</p>
      </div>
    );
  }
  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">
          First Name
        </label>
        <input
          id="firstname"
          type="firstname" 
          name="firstname"
          required
        />
        <ValidationError
          prefix="First name" 
          field="firstname"
          errors={state.errors}
        />
        <label htmlFor="lastname">
          Last Name
        </label>
        <input
          id="lastname"
          type="lastname" 
          name="lastname"
          required
        />
        <ValidationError
          prefix="Last name" 
          field="lastname"
          errors={state.errors}
        />
        <label htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          required
        />
        <ValidationError 
          prefix="Email" 
          field="email"
          errors={state.errors}
        />
        <label htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder='Message'
          required
        />
        <ValidationError 
          prefix="Message" 
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          className={`group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 ${
            state.submitting
              ? "cursor-not-allowed opacity-65"
              : "hover:scale-110 hover:bg-gray-950 active:scale-105"
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
      </button>
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;