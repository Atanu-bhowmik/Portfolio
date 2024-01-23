import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/pageHeaderContent";
import { FaDatabase } from "react-icons/fa";
import { DiJava } from "react-icons/di";
import { SiSolidity } from "react-icons/si";
import { FaPython } from "react-icons/fa6";
import './styles.scss';
const personalDetails = [
  {
    label: "Name",
    value: "Atanu Bhowmik",
  },
  {
    label: "Age",
    value: "21",
  },
  {
    label: "Email",
    value: "bhowmikatanu343@gmail.com",
  },
];
const jobsummary = "Transforming Ideas into Robust Backend Solutions As a seasoned backend developer with a passion for turning concepts into functional and scalable realities, I specialize in crafting powerful backend systems that drive seamless and efficient applications.My expertise lies in designing and implementing robust server - side architectures, optimizing database performance and ensuring the smooth flow of data for optimal user experiences";
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeaderContent
        headertext="About Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <h3>BackEnd Developer</h3>
          <p>{jobsummary}</p>
          <h3>Personal Information</h3>
          <ul>
            {
              personalDetails.map((item, i) => (
                <li key={i}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="about__content__skillWrapper">
          <div className="about__content__skillWrapper__innercontent">
            <div>
              <FaDatabase size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <DiJava size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <SiSolidity size={60} color="var(--yellow-theme-main-color)" />
            </div>
            <div>
              <FaPython size={60} color="var(--yellow-theme-main-color)" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
