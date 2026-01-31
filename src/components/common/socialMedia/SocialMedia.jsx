import {
  faWordpress,
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  { icon: faWordpress, link: "https://avinagabpra.wordpress.com/" },
  { icon: faGithub, link: "https://github.com/AvinaGabPra" },
  { icon: faInstagram, link: "https://instagram.com/avina_2411" },
  { icon: faLinkedin, link: "https://linkedin.com/in/avina-pranomo" },
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      className={`text-pink-500 hover:bg-pink-500 p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md`}
      key={index}
    >
      <FontAwesomeIcon
        icon={item.icon}
        className={`text-xl w-4.5 aspect-square`}
      />
    </a>
  ));
};

export default SocialMedia;
