import React from "react";

const Contacts = () => {
  return (
    <div>
      <div
        id="Contacts"
        className="ContactsContainer h-96 bg-[#0a192f] mb- flex flex-col pt-[80px] mt-[80px]"
      >
        <p className="text-3xl text-basicText font-sans font-bold ml-5 mt-10">Contacts:</p>
        <p className="ml-5 text-basicText font-sans">
          koharyboris@gmail.com
        </p>
        <p className="ml-5 text-basicText font-sans">+421905670063</p>
      </div>
    </div>
  );
};

export default Contacts;
