import Marquee from "react-fast-marquee";
import logoAncora from "../../assets/avina/AncoraLogoDark.png";
import logoSeruniPutih from "../../assets/avina/seruniputih2.jpg";
import logoEvlogia from "../../assets/avina/Evlogia.jpg";
import logo1080px from "../../assets/avina/logo1080px.png";
import logoAtm from "../../assets/avina/atm.jpg";

const commonSVGClass = "h-6 sm:h-8 md:h-10 fill-[#B8BCC2]";

const brandLogos = [
  {
    id: "ancora",
    content: (
      <img
        src={logoAncora}
        alt="PT Ancora"
        className="h-8 sm:h-12 md:h-14 object-contain opacity-80 hover:opacity-100 transition"
      />
    ),
  },

  {
    id: "seruniputih",
    content: (
      <img
        src={logoSeruniPutih}
        alt="SD & SMP Seruni Putih"
        className="h-8 sm:h-12 md:h-16 object-contain opacity-80 hover:opacity-100 transition"
      />
    ),
  },
  
  {
    id: "evlogia",
    content: (
      <img
        src={logoEvlogia}
        alt="Personal Color Analysis Evlogia"
        className="h-8 sm:h-12 md:h-14 object-contain opacity-80 hover:opacity-100 transition"
      />
    ),
  },
  
  {
    id: "1080px",
    content: (
      <img
        src={logo1080px}
        alt="1080px"
        className="h-8 sm:h-12 md:h-16 object-contain opacity-80 hover:opacity-100 transition"
      />
    ),
  },
  
  {
    id: "atm",
    content: (
      <img
        src={logoAtm}
        alt="ATM"
        className="h-8 sm:h-12 md:h-16 object-contain opacity-80 hover:opacity-100 transition"
      />
    ),
  },
];

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-4xl text-center">
        <p className="section-title mb-6">
          Academic & Professional Collaborations
        </p>

        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          Participated in internship and academic projects, supporting testing
          and development tasks while learning real-world workflows. These
          experiences allowed me to work closely with teams, understand real
          business needs, and deliver structured, reliable solutions.
        </p>
      </div>

      <Marquee pauseOnHover speed={80} className="mt-6">
        <div className="flex items-center gap-15">
          {brandLogos.map((item) => (
            <div
              key={item.id}
              className="px-8 py-8 sm:py-10 flex items-center"
            >
              {item.content}
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default HappyClients;