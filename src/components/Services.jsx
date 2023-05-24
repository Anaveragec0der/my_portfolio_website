import Section from "./common/Section";
import webDev from "../assets/webdev.png"
import booking1 from "../assets/hotel1.png"

export default function Services() {
    const services=[
        {
            id:1,
            image:webDev,
            title:"Web Development"
        },
        {
            id:2,
            image:booking1,
            title:"Booking App"
        }

    ]
  return (
    <Section
      title={"Services 🛠️"}
      subtitle={
        "Here are all the services I provide. I hope I offer the service that you are looking for. If you do not find something that you are looking for then please send an email"
      }
    >
        <div className="grid gap-10 lg:grid-cols-2">
            {
                services.map(({id, image, title})=>(
                    <div key={id} className="flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110">
                        <img src={image} alt={title} className="w-36 h-36 md:w-44 md:h-44 object-contain"/>
                        <h3 mt-5 text-base>{title}</h3>
                    </div>
                ))
            }
        </div>
    </Section>
  );
}
