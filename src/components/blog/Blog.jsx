import img1 from "../../components/blog/picsblog/functional2.jpg";
import img2 from "../../components/blog/picsblog/blog2.jpg";
import img3 from "../../components/blog/picsblog/blog3.jpeg";
import img4 from "../../components/blog/picsblog/blog4.png";
import img5 from "../../components/blog/picsblog/blog5.jpg";
import img6 from "../../components/blog/picsblog/blog6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const blogData = [
  {
    id: 1,
    image: img1,
    date: "28 Jan, 2026",
    // comments: 246,
    title: "Functional vs Usability Testing: What I Learned from Real Projects",
    excerpt:
      "Through real projects, I learned how functional testing ensures system correctness, while usability testing focuses on how easily users can interact with the application.",
    link: "#!",
  },
  {
    id: 2,
    image: img2,
    date: "28 Jan, 2026",
    title: "How I Test a Website Before It Goes Live",
    excerpt:
      "Before launching a website, I follow a structured QA process that covers functional testing, usability checks, responsiveness, performance validation, and basic security testing to minimize risks and ensure a smooth user experience.",
  },
  {
    id: 3,
    image: img3,
    date: "28 Jan, 2026",
    title: "From Research to Real Users: Personal Color Analysis Web App",
    excerpt:
      "This web-based system analyzes the suitability of clothing colors based on the user's skin tone. The process begins with color compatibility research and is implemented using the Naive Bayes classification algorithm to calculate the percentage (%) of color suitability.",
    link: "#!",
  },
  {
    id: 4,
    image: img4,
    date: "28 Jan, 2026",
    title: "Building a Personal Color Recommendation System Using Naive Bayes",
    excerpt:
      "The purpose of this research is to develop a website-based system capable of analyzing clothing color suitability according to skin tone using the Naive Bayes method. The research stages include data selection, preprocessing, Naive Bayes model construction, and testing using testing data. The evaluation results show that the Naive Bayes method achieved an accuracy of 95.45%, a recall value of 95.35%, and a precision value of 100%. The high precision value indicates that there were no false positive predictions, while the recall value shows that some positive data were not perfectly predicted by the system.",
    link: "#!",
  },
  {
    id: 5,
    image: img5,
    date: "28 Jan, 2026",
    title: "Mistakes I Made When Building My Websites",
    excerpt:
      "Through building multiple websites, I encountered common mistakes such as insufficient planning, inconsistent variable naming, server configuration issues, and data loss due to missing backups. These experiences helped me improve my development and quality assurance practices.",
    link: "#!",
  },
  {
    id: 6,
    image: img6,
    date: "28 Jan, 2026",
    title: "What Makes a Website Easy to Use?",
    excerpt:
      "Based on my experience testing and building websites, this article highlights key usability principles that make a website easy to use, including clear navigation, consistent design, responsive layout, fast loading time, and meaningful user feedback.",
    link: "#!",
  },
];

const Blog = () => {
  return (
    <div className="content py-25 px-2 relative" id="blog">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">Insights & Case Studies</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
          Explore my insights on quality assurance practices, system development
          processes, and project-based case studies derived from academic and
          professional experiences.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {blogData?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10" /* pagination margin bottom to 40px */
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoBlog data={data} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
