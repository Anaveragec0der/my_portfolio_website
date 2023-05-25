import {FaGithub,FaLinkedin,FaArrowDown} from "react-icons/fa"
import avatar from "../assets/avatar.png"
export default function Hero(){
    const SOCIAL=[
        {
            id:1,
            link:"https://linkedin.com",
            icon:<FaLinkedin/>
        },
        {
            id:2,
            link:"https://github.com",
            icon:<FaGithub/>
        },
    ]
    window.addEventListener('scroll',function(){
        const downArrow=document.querySelector('.down-arrow')
        if(this.scrollY>=150) downArrow.classList.add('hide-down-arrow')
        else downArrow.classList.remove('hide-down-arrow')
    })
    return(
        <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
            <h2 className="text-5xl text-rose-600 uppercase font-bold">Priyanshu Vishwakarma</h2>
            <h3 className="py-3 text-2xl">Full Stack Developer</h3>
            <p className="max-w-xl font-light text-gray-500">
                Hello <span className="animate-pulse text-4xl">👋</span>,
                Welcome to my portfolio
                I'm a Full stack developer.
                I hold a Master's degree in Computer Applications. 
                Problem solving is something that has always intrigued me
                and it is what made me start programming.
                I also love making vector arts, 
                it is what made me pick up full stack development as
                a carrer path because now I can be creative when I am working
                at the front end and can solve problems when I'm at the backend
                thus getting best of both the worlds 
            </p>

            {/* {social icons} */}
            <div className="flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3">
            {SOCIAL.map(({ id, link, icon }) => {
            return (
              <a key={id} href={link} target="_blank" rel="noopener noreferrer">
                {icon}
              </a>
            );
          })}

                {/* avatar and resume */}

            </div>
            <div>
                <img src={avatar} alt="avatar" className="scale-110 w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-rose-600 rounded-2xl pt-5"/>
                <a href="/Priyanshu'sResume.pdf" download={true} className="flex items-center justify-center mt-10 bg-gradient-to-r from-rose-600 to-teal-500 text-white py-2 rounded-lg">Resume</a>
            </div>

            {/* arrow down animation */}
            <div className="mt-10 down-arrow">
                <FaArrowDown className="text-gray-400 text-2xl animate-bounce"/>
            </div>
        </section>
    )
}