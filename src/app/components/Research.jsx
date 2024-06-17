import React from "react";
import ResearchItem from "./ResearchItem";

const data = [
  {
    title: "5G: The Stimulant to Digital Uprising in India",
    author: "Tarun Singh, M. Dahiya",
    place:
      "International Conference on Machine Learning, Big Data, Cloud and Parallel Computing (COM-IT-CON), 2022, pp. 726-730, 2022.",
    desc: "The main objective of the paper is to discuss the role of 5G in Indian telecom sector and in other sectors too. It was expected that all 5G mobile technologies may be functional and operational by 2020. 5G comprises of advanced features and support advanced technologies, therefore its demand is much more awaited in the market, and it is the commanding technology in coming future which governs the telecom sector. This paper also discusses the key factors that can enable so that the rise in IoT devices and growth in supporting technologies can be seen. This paper also reviews the generations of mobile communication with their respective advantages and disadvantages. The paper also examines the impacts of 5G technologies on various sectors like industries, commerce, education, healthcare, agriculture, finance and social sectors.",
    link: "https://www.researchgate.net/publication/362706049_5G_The_Stimulant_to_Digital_Uprising_in_India",
  },
  {
    title: "An Analysis on Recommendation Systems in Machine Learning",
    author: "Tarun Singh, Anees Ahmed Choudhary, Akash",
    place:
      "International Research Journal of Engineering and Technology (IRJET), 2021.",
    desc: "With the increase in growth of the digital world and the influx of huge amount of information availability, a method to find the right choice in selecting and filtering an item to choose the right product from the pool of information has become necessary. To solve this problem, recommendations systems have been developed which can help the users in getting recommendations utilizing their previous searches and purchases. Recommendation systems are used in many areas which include and not limited to online shopping, news media, music, movie recommendation. They are highly deployed and utilized in companies like Amazon, Netflix, and YouTube.",
    link: "https://www.researchgate.net/publication/354527303_An_Analysis_on_Recommendation_Systems_in_Machine_Learning?_sg%5B0%5D=NDVW3CpDKC3KO5XXhaJRHFwPw0yNAiBMnyTYlJ5rpJvMrqG06ifRocjl2ukNvZ7oOMj-i4-_LkuKoS4y1jpRfTtWd2gNDld_u9kYHoGP.HMqWPWG9WcTQfARNYz5_O9IqU7MaS1Z27GGjNiHjU-ZGB8MIqwuJolDYHhDElggtA8fc-1Ll8MyvC0_L7JiZpw",
  },
];

function Research() {
  return (
    <section className="py-[30px] w-[100%] min-w-[100%]">
      <div className="flex gap-5 items-center">
        <h3 className="text-3xl font-[800] text-white sm:text-5xl">Research</h3>
        <div className="mt-2 h-[4px] min-w-0 flex-grow bg-white"></div>
      </div>
      <div className="mt-[80px] w-[100%] flex items-center justify-center">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 w-[100%]">
          {data.map((research, index) => (
            <ResearchItem
              key={index}
              title={research.title}
              author={research.author}
              place={research.place}
              desc={research.desc}
              link={research.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Research;
