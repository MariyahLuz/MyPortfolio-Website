import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "educ.jpg" },
    { label: "Work History", logoSrc: "work.jpg" },
    { label: "Programming Skills", logoSrc: "work1.jpg" },
    { label: "Projects", logoSrc: "proj.png" },
    { label: "Interests", logoSrc: "likes.png" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 70 },
    { skill: "React JS", ratingPercentage: 70 },
    { skill: "Python", ratingPercentage: 40},
    { skill: "Laravel", ratingPercentage: 20},
    { skill: "Node JS", ratingPercentage: 40},
    { skill: "Mongo Db", ratingPercentage: 10 },
    { skill: "Core Java", ratingPercentage: 60},
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap",
    },
    {
      title: "Mobile E-shop ",
      duration: { fromDate: "2020", toDate: "2022" },
      description:
        "An ecommerce mobile application designed to sell products online with payment system integration",
      subHeading:
        "Technologies Used:  Ionic, HTML, CSS, JavaScript",
    },
    // {
    //   title: "School Website",
    //   duration: { fromDate: "2020", toDate: "2021" },
    //   description:
    //     "My high School website",
    //   subHeading:
    //     "Technologies Used: ReactJS, TailWind Css, JavaScript.",
    // },
    // {
    //   title: "News Application",
    //   duration: { fromDate: "2022", toDate: "2022" },
    //   description:
    //     "News application that displays both local and international news.",
    //   subHeading:
    //     "Technologies Used: ReactJS, Bootstrap, JavaScript.",
    // },
    {
      title: "Crowd Funding Application",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "A web based crowd funding application. ",
      subHeading:
        "Technologies Used: NodeJs, Css, HTML.",
    },
    {
      title: "Messaging Application",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A messaging application that works like whatsapp.",
      subHeading:
        "Technologies Used: ReactJS, TailWind Css, JavaScript.",
    },

  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Makerere Universty"}
        subHeading={"BACHELOR OF SCIENCE IN COMPUTER SCIENCE"}
        fromDate={"2019"}
        toDate={"2024"}
      />

      <ResumeHeading
        heading={"Caltec Academy Makerere"}
        subHeading={"O-Level and A-Level"}
        fromDate={"2012"}
        toDate={"2017"}
      />
      <ResumeHeading
        heading={"Primary "}
        subHeading={"Guiding Star Primary School"}
        fromDate={"2009"}
        toDate={"2011"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"MPAMPE"}
          subHeading={"FrontEnd Developer"}
          fromDate={"2021"}
          toDate={"2022"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as a FrontEnd Developer.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed a crowd funding website to allow people with financial need create campaigns for funding.
          </span>
          <br />
          <span className="resume-description-text">
            - I have as well worked on several other Personal based projects with both the FrontEnd and backend.
          </span>
          <br />
          <span className="resume-description-text">
            - I stretch my mental capacity to develope the UI as per the given
            designs.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Leadership"
        description="Apart from being a tech enthusiast and a code writer, I am so passionate about leadership and I have been a leader since my high school after being elected headgirl and as well as the women affairs minister at university."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something I can never compromise with." />
      <ResumeHeading
        heading="Teaching"
        description="I feel blessed sharing my knowledge however little, with someone else."/>
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
