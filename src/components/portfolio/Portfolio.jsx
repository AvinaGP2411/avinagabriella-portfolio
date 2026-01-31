import Projects from "./Projects";
import card1 from "../../assets/avina/magang-profil.png";
import card2 from "../../assets/avina/kopitoseeyou.jpeg";
import card3 from "../../assets/avina/seruniputih.jpeg";
import card4 from "../../assets/avina/1080pxstudio.jpeg";
import card5 from "../../assets/avina/personalcolors.png";
import card6 from "../../assets/avina/personalcolors-admin.png";
import portfolio from "../../assets/avina/Portfolio-Avina.pdf";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "IT ADMIN & QA TESTER",
    title: "Website Functional Testing (Internship Project)",
    description:
      "Performed functional and usability testing on a company website during my internship, including test case creation, bug reporting, and validation of fixes to ensure system quality and reliability.",
    link: "",
  },
  {
    id: 2,
    image: card2,
    category: "WEB DEVELOPMENT",
    title: "KOPITO SEE YOU (Personal Project)",
    description:
      "Designed an intuitive dashboard for product management, emphasizing clarity and user efficiency. This project was built as part of my learning journey following tutorials from online resources.",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    category: "WEB DEVELOPMENT",
    title: "Website PPDB (Academic Project)",
    description:
      "Created a PPDB admin dashboard that streamlines student registration management through intuitive navigation, clear data presentation, and user-friendly workflows.",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    category: "WEB DEVELOPMENT",
    title: "Website 1080px Studio (Company Profile Project)",
    description:
      "Delivered a responsive company profile website for 1080px Studio, focused on clear brand presentation, usability, and cross-device compatibility for real-world use.",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    category: "WEB DEVELOPMENT",
    title:
      "User-Based Personal Color Analysis System Using Naive Bayes (Thesis Project)",
    description:
      "Developed a web-based personal color analysis system as a final thesis project, implementing data mining techniques using the Naive Bayes method to analyze user skin tone characteristics and generate personalized clothing color recommendations.",
    link: "#!",
  },
  {
    id: 6,
    image: card6,
    category: "WEB DEVELOPMENT",
    title:
      "Admin Dashboard for Personal Color Recommendation System (Thesis Project)",
    description:
      "Designed and implemented an admin dashboard for the Personal Color Analysis System, enabling administrators to manage user data, color classification results, and system workflows through a clear, efficient, and user-friendly interface.",
    link: "#!",
  },
];

const Portfolio = ({ data }) => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Here are some of my learning and project experiences in quality
            assurance, web development, and UI/UX, built through academic and
            personal projects.
          </p>
          <a
            href={portfolio}
            className="btn hover:border-pink-500 hover:text-pink-500 bg-white text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 mt-5 xs:py-5.75 px-6 max-sm:w-full"
          >
            Download File
            <span classDownload FileName="ms-1 xs:ms-3">
              <FontAwesomeIcon icon={faDownload} size="l" className="" />
            </span>
          </a>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      {/*<div className="text-center">
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>*/}
    </div>
  );
};

export default Portfolio;
