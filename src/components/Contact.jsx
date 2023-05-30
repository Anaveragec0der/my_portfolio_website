import { FaGithub, FaLinkedin, FaGoogle } from "react-icons/fa";
import Section from "./common/Section";
import contact from "../assets/mobile.png";

export default function Contact() {
  const SOCIAL = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/priyanshu-vishwakarma-63b54423b/",
      icon: <FaLinkedin />,
    },
    {
      id: 2,
      link: "https://github.com/Anaveragec0der",
      icon: <FaGithub />,
    },
  ];
  const gmail = {
    id: 2,
    icon: <FaGoogle />,
  };

  return (
    <Section
      // {📱 ☎️ 📞}
      title="Contact ☎️"
      subtitle="These are the ways through which you can contact me.
        Hope to hear form you soon : )"
    >
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <div>
          {" "}
          <img
            src={contact}
            alt=" contact-information"
            className="w-32 h-32 ml-7"
          />{" "}
        </div>
        <div>
          <p className="text-sm md-text-base max-w-xs md:max-w-lg font-light text-gray-500 ">
            I am open to talk regarding freelancing or full-time opportunities.
            Feel free to contact me using your preferred medium
          </p>
        </div>
        <div className="flex w-full items-center justify-evenly text-3xl">
          {SOCIAL.map(({ id, link, icon }) => {
            return (
              <a
                key={id}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="duration-200 ease-in-out hover:text-rose-600"
              >
                {icon}
              </a>
            );
          })}
          <a
            key={gmail.id}
            href="mailto:priyanshuvishwakarma445@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {gmail.icon}
          </a>
        </div>
        {/* {bottom form} */}
        <div className="p-8 text-left w-full flex items-center justify-center">
          <form
            action="https://getform.io/f/a458405c-f648-412a-a374-6eb676e2809e"
            method="POST"
          >
            <div className="gap-4 w-full">
              <div className="flex flex-col">
                <label className="capitalize text-sm py-2 font-extralight">
                  Name
                </label>
                <input
                  type="text"
                  name="Name"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col my-2">
                <label className="capitalize text-sm py-2 font-extralight">
                  Phone
                </label>
                <input
                  type="text"
                  name="Phone"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col my-2">
                <label className="capitalize text-sm py-2 font-extralight">
                  Email
                </label>
                <input
                  type="text"
                  name="Email"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>
              <div className="flex flex-col">
                <label className="capitalize text-sm py-2 font-extralight">
                  Message
                </label>
                <textarea
                  rows="10"
                  name="Message"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none"
                ></textarea>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <button className="my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white px-6 py-3 uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}
