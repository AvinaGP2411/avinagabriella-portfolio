import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Quality Assurance (QA)",
    description:
      "I ensure software quality by performing functional and usability testing, creating manual test cases, identifying bugs, and validating fixes based on real user scenarios.",
  },
  {
    id: 2,
    title: "UI / UX Design",
    description:
      "I design user-centered interfaces by understanding user needs, creating wireframes, and ensuring usability through clear layouts, consistent design, and intuitive user flows.",
  },
  {
    id: 3,
    title: "Web Development",
    description:
      "I build responsive and user-friendly web interfaces using HTML, CSS, JavaScript, and React, supported by modern CSS frameworks like Tailwind CSS and Bootstrap, focusing on clean structure, accessibility, and maintainable code.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I am primarily focused on Quality Assurance, with strong experience
            in UI/UX design and front-end development as supporting skills to
            deliver reliable and user-friendly products.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            I am also open to opportunities in other technical roles related to
            software development and digital products, where I can continue to
            learn and contribute my skills.
          </p>
        </div>
        {/* <a
          href="#!"
          className="mt-5 md:mt-12.5 btn bg-pink-500 text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a> */}
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
