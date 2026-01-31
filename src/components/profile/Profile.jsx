import { useState } from "react";
import person from "../../assets/avina/fotoku.png";
import person2 from "../../assets/avina/fotoku2.jpeg";
import cv from "../../assets/avina/cv.pdf";
import transcripts from "../../assets/avina/transcripts.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  // 🔹 STATE DITAMBAHKAN
  const [showTranscript, setShowTranscript] = useState(false);

  return (
    <>
      <div
        className={`relative mx-4 xxl:mx-0.5 -bottom-6 lg:-bottom-10 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
        id="profile"
      >
        <div className="flex max-md:flex-col justify-between items-center gap-6">
          {/* Profile image */}
          <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126">
            <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
              <img
                className="bg-soft-white h-[120%] object-cover"
                src={person2}
                alt=""
              />
            </div>

            {/* Social media section */}
            <div className="relative bottom-9">
              <div className="flex justify-center">
                <div
                  className="px-6 max-w-66 py-3 z-50 text-center
                  bg-white rounded-[4px]
                  shadow-2xl drop-shadow-2xl shadow-white
                  text-pink-500
                  hover:text-pink-600
                  transition-colors duration-300"
                >
                  <SocialMedia />
                </div>
              </div>
            </div>
          </div>

          <div className="max-sm:w-full w-[33rem]">
            <h2 className="text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] max-md:text-center font-semibold mb-8">
              I am a Quality Assurance Enthusiast
            </h2>

            <div className="text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600">
              <p>
                I recently completed my Bachelor’s degree in Informatics
                Engineering and developed a strong foundation in quality
                assurance through academic projects, system validation, and a
                professional internship.
              </p>
              <p className="mt-3">
                I am detail-oriented, highly analytical, and focused on ensuring
                software quality by creating thorough manual test cases and
                validating real user scenarios.
              </p>
            </div>

            <div className="mt-8 flex max-md:justify-center">
              {/* 🔹 BUTTON TRANSCRIPTS (DITAMBAHKAN FUNCTION SAJA) */}
              <button
                onClick={() => setShowTranscript(!showTranscript)}
                className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3
                bg-pink-500 hover:bg-pink-600
                text-white border-none
                duration-300 transition-all
                ms-4 text-xs xxs:text-[14px] sm:text-[16px]"
              >
                {showTranscript ? "Hide Transcript" : "Transcript"}
              </button>

              <a
                className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-pink-500 bg-white duration-300 transition-all hover:text-pink-500 ms-4 text-xs xxs:text-[14px] sm:text-[16px]"
                href={cv}
                download="cv.pdf"
              >
                <FontAwesomeIcon icon={faDownload} /> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 PDF VIEWER — DITAMBAHKAN DI BAWAH */}
      {showTranscript && (
        <div className="mx-4 mt-20 rounded-2xl bg-white shadow-2xl p-6">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Academic Transcript
          </h3>

          <iframe
            src={transcripts}
            className="w-full h-[80vh] rounded-xl border"
            title="Transcript PDF"
          />
        </div>
      )}
    </>
  );
};

export default Profile;
