import React from 'react';
import Logo from './img/logo.svg';
import Pic from './img/signingraphics.svg';
import Custbutton from './buttons/custbutton';
import Textinput from './textarea/textinput';

const display = () => {
  return (
    <div className="bg-light-green font-sans h-screen">
      <div className=" flex justify-center md:flex-none md:block">
        <img
          className=" mt-28 md:mt-0 md:pt-8 md:pl-10 relative md:absolute "
          src={Logo}
          alt="logo"
        />
      </div>

      <div className="md:h-screen flex md:mt-0 md:flex items-center justify-center">
        <div className="md:border mt-16 md:mt-0 md:mb-0 border-grey rounded-xl md:bg-white flex-row">
          <div className="md:mt-6  ">
            <span className="text-4xl font-bold md:ml-11 font-sans text-dark-grey ">
              Sign In
            </span>
          </div>
          <div className="md:flex">
            <div className="hidden md:block md:mt-6">
              <img className="md:ml-11 md:mr-11" src={Pic} alt="signin-pic" />
              <div className=" md:mt-10">
                <span className="md:tracking-wider md:text-md md:ml-14">
                  Not signed up yet?&nbsp;
                  <a className="md:text-dark-green md:hover:underline" href="/">
                    Register
                  </a>
                </span>
              </div>
              <br />
            </div>

            <div className="flex flex-col font-sans md:mr-11 md:p-0 gap-0 item-center md:mt-6  md:bottom-0">
              <Textinput type="text" placeholder="Email" />
              <Textinput type="text" placeholder="Password" />
              <div className="ml-40">
                <a
                  className="text-dark-green text-sm hover:underline tracking-wide"
                  href="/"
                >
                  forgot password
                </a>
              </div>
              <div>
                <Custbutton
                  type="signin"
                  className="bg-red justify-items-end mt-10 hover:bg-dark-red ml-36"
                >
                  Sign In
                </Custbutton>
              </div>

            </div>
            <div className="md:hidden block ml-7 mt-28 absolute bg-light-green ">
              <span className="tracking-wider text-md ">
                Not signed up yet?&nbsp;
                <a className="text-dark-green hover:underline" href="/">
                  Register
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default display;