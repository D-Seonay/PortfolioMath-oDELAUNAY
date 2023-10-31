const ContactPage = () => {
    return (
        <div className="contact relative bg-zinc-900">
            <div className="text-[200px] font-black font-'Poppins'">CONTACT ME</div>
            <div className="p-2.5 bg-neutral-800 rounded-[10px] justify-start items-start gap-2.5 inline-flex">
                <div className="w-[533px] relative bg-sky-700 rounded-[10px]">
                    <div className="text-white text-[35px] font-medium font-'Poppins'">Contact Information</div>
                    <div className="flex-col justify-center items-start gap-[73px] inline-flex">
                        <div className="justify-center items-center gap-[45px] inline-flex">
                            <div className="w-[45px] relative" />
                            <div className="text-white text-[26px] font-medium font-'Poppins'">contact@seonay.eu</div>
                        </div>
                        <div className="justify-center items-center gap-[33px] inline-flex">
                            <div className="w-11 h-11 relative" />
                            <div className="text-white text-[26px] font-medium font-'Poppins'">07 82 19 97 54</div>
                        </div>
                        <div className="justify-center items-center gap-[35px] inline-flex">
                            <div className="w-[45px] relative">
                                <div className="w-[33.75px] h-[40.73px] left-[5.62px] top-[1.87px] absolute" />
                            </div>
                            <div className="text-white text-[26px] font-medium font-'Poppins'">Nantes, France</div>
                        </div>
                    </div>
                    <div className="w-[425px] h-[425px] bg-blue-900 rounded-full" />
                    <div className="w-[126px] h-[126px] bg-white bg-opacity-75 rounded-full" />
                    <div className="justify-center items-center gap-[19px] inline-flex">
                        <div className="w-[75px] relative">
                            <div className="w-[75px] h-[75px] rounded-full" />
                        </div>
                        <div className="w-[75px] relative">
                            <div className="w-[75px] h-[75px] rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Forms*/}
            <div className="w-[1027px] p-5 flex-col justify-end items-end gap-10 inline-flex">
                <form className="flex-col justify-center items-center gap-10 flex">
                    <div className="flex-col justify-center items-start gap-2.5 flex">
                        <div className="h-[111px] justify-end items-start gap-[30px] inline-flex">
                            {/* ... First name input ... */}
                            <div className="w-[445px] p-2.5 border-b-2 border-white flex-col justify-start items-start gap-2.5 inline-flex">
                                <div className="w-[429px] h-7 text-white text-[17px] font-medium font-'Poppins'">First name</div>
                                <input
                                    type="text"
                                    className="text-white text-[26px] font-medium font-'Poppins' w-full border-none bg-transparent outline-none"
                                    placeholder="Enter your first name"
                                />
                            </div>
                            {/* ... Last name input ... */}
                            <div className="w-[445px] p-2.5 border-b-2 border-white flex-col justify-start items-start gap-2.5 inline-flex">
                                <div className="w-[429px] h-7 text-white text-[17px] font-medium font-'Poppins'">Last name</div>
                                <input
                                    type="text"
                                    className="text-white text-[26px] font-medium font-'Poppins' w-full border-none bg-transparent outline-none"
                                    placeholder="Enter your last name"
                                />
                            </div>

                        </div>
                        <div className="h-[111px] justify-end items-start gap-[30px] inline-flex">

                            {/* ... Email input ... */}
                            <div className="w-[445px] p-2.5 border-b-2 border-white flex-col justify-start items-start gap-2.5 inline-flex">
                                <div className="w-[429px] h-7 text-white text-[17px] font-medium font-'Poppins'">Email</div>
                                <input
                                    type="email"
                                    className="text-white text-[26px] font-medium font-'Poppins' w-full border-none bg-transparent outline-none"
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* ... Phone input ... */}
                            <div className="w-[445px] p-2.5 border-b-2 border-white flex-col justify-start items-start gap-2.5 inline-flex">
                                <div className="w-[429px] h-7 text-white text-[17px] font-medium font-'Poppins'">Phone number</div>
                                <input
                                    type="tel"
                                    className="text-white text-[26px] font-medium font-'Poppins' w-full border-none bg-transparent outline-none"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                        </div>

                    </div>
                    <div className="flex-col justify-center items-start gap-5 flex">
                        <div className="text-white text-[22px] font-bold font-'Poppins'">What type of website do you need?</div>
                        <div className="w-[920px] px-5 justify-between items-center inline-flex">

                            {/* ... Web Design ... */}
                            <div className="justify-center items-center gap-3 flex">
                                <input type="radio" id="webDesign" name="websiteType" value="Web Design" />
                                <label htmlFor="webDesign" className="text-white text-[25px] font-medium font-'Poppins'">Web Design</label>
                            </div>
                            {/* ... Web Development ... */}

                            <div className="justify-center items-center gap-3 flex">
                                <input type="radio" id="webDevelopment" name="websiteType" value="webDevelopment" />
                                <label htmlFor="webDevelopment" className="text-white text-[25px] font-medium font-'Poppins'">Web Development</label>
                            </div>
                            {/* ... Other ... */}

                            <div className="justify-center items-center gap-3 flex">
                                <input type="radio" id="Other" name="websiteType" value="Other" />
                                <label htmlFor="Other" className="text-white text-[25px] font-medium font-'Poppins'">Other</label>
                            </div>
                        </div>
                    </div>
                    <div className="w-[930px] h-[111px] p-2.5 border-b-2 border-white flex-col justify-center items-start gap-2.5 flex">
                        <div className="w-[429px] h-7 text-white text-[17px] font-medium font-'Poppins'">Message</div>
                        <textarea
                            className="text-white text-[26px] font-medium font-'Poppins' w-full border-none bg-transparent outline-none"
                            placeholder="Write your message ..."
                        ></textarea>
                    </div>
                    <div className="px-10 py-5 bg-sky-700 rounded-[10px] flex-col justify-center items-center gap-2.5 flex">
                        <button className="text-white text-[22px] font-medium font-'Poppins'">Send Message</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export { ContactPage };