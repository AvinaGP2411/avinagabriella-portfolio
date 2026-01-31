import person from "../../assets/avina/fotoku.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "QA Experience",
    description: "1+ Year",
  },

  {
    id: 3,
    title: "Web Projects",
    description: "7+",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              Avina Gabriella Pranomo
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            I’m a{" "}
            <span className="bg-highlight">
              fresh graduate of Informatics Engineering
            </span>{" "}
            with a strong interest in Quality Assurance. I have hands-on
            experience in manual testing, test case creation, and application
            validation through academic and internship projects, supported by
            skills in web development, UI/UX, and administrative tasks.
          </p>
          <p className="text-center lg:text-start">
            <a
              className="btn btn-xs xxs:btn-lg bg-pink-500 hover:bg-pink-600 text-white border-none"
              href="https://www.linkedin.com/in/avina-pranomo/"
            >
              Go to my LinkedIn
            </a>
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`mw-[380px] sm:w-[440px] md:w-[460px] lg:w-[520px] aspect-[4/5] mx-auto relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
