import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorkTogether = () => {
  return (
    <div className="py-25 max-w-169 mx-auto px-2">
      <div className="text-center">
        <p className="text-white md:font-semibold text-2xl sm:text-3xl md:text-5xl pb-8">
          Do you have a Project Idea? Let's discuss your project!
        </p>
        <p className="text-[#A5ACB5] text-xs sm:text-lg font-normal text-center pb-8">
          I'm always open to discussing new projects and creative ideas. Let's
          connect and build something amazing together.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=6281211786677&text=Hi%20Avina,%20I%20want%20to%20discuss%20a%20project."
          className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3
                bg-pink-500 hover:bg-pink-600
                text-white border-none shadow-none
                duration-300 transition-all
                ms-4 text-xs xxs:text-[14px] sm:text-[16px]"
        >
          Let's work Together
          <FontAwesomeIcon
            icon={faArrowRight}
            size="l"
            style={{ color: "#FFFFFF" }}
            className="ms-3"
          />
        </a>
      </div>
    </div>
  );
};

export default WorkTogether;
