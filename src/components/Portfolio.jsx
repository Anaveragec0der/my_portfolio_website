import Section from "./common/Section";
import {FaGithub, FaExternalLinkSquareAlt} from "react-icons/fa"
import p1 from "../assets/p1.png"
import p2 from "../assets/p2.png"
import p3 from "../assets/p1.png"
import p4 from "../assets/p2.png"
import p5 from "../assets/p5.png"
export default function Portfolio(){
    const projects=[
        {
            id:1,
            image:p1,
            title:"rarebnb",
            github:"https://github.com/Anaveragec0der/rarebnb",
            demo: "https://rarebnb.vercel.app"
        },
        {
            id:2,
            image:p2,
            title:"Visuorythm",
            github:"https://github.com/Anaveragec0der/Visuorythm",
            demo:"https://visuorythm.web.app"
        },
        {
            id:3,
            image:p3,
            title:"To-do List",
            github:"https://github.com/Anaveragec0der/todolist-v2",
            demo:"https://a-to-do-list.onrender.com"
        },
        {
            id:4,
            image:p4,
            title:"News letter signup page",
            github:"https://github.com/Anaveragec0der/newsLetterSignup",
            demo:"https://newslettersignup-6cgo.onrender.com"
        },
        {
            id:5,
            image:p5,
            title:"Simon Game",
            github:"https://github.com/Anaveragec0der/SimonGame",
            demo:"https://anaveragec0der.github.io/SimonGame"
        },
    ]
    return(
        <Section 
        title="Portfolio 🗃️"
        subtitle="Welcome to my portfolio! Here, you'll find a collection of projects
        I've worked on throughout my journey as a developer.
        Each project represents a valuable learning experience 
        and showcases my skills and dedication. I invite you to explore and discover 
        the diverse range of work I've completed, each project contributing 
        to my growth as a professional."
        >
            <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">

                {projects.map(({id,image,title,github,demo})=>(
                    <div key={id} className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden">
                        <img src={image} alt={title} className="w-2/3" />
                        <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
                            <h2 className="text-xl">{title}</h2>
                            <a className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110" href={github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                            <a className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110" href={demo} target="_blank" rel="noopener noreferrer"><FaExternalLinkSquareAlt/></a>
                        </div>
                    </div>
                ))}
            </div>

        </Section>
    )
}