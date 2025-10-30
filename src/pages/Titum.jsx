import { useNavigate } from "react-router-dom";
import TheHeaderProgressBar from "../components/HeaderProgressBar/TheHeaderProgressBar";
import TheFootNote from "../components/TheFootNote";
import TheTaskInfoCard from "../components/TheTaskInfoCard";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import jsonData from "../data/taskList.json";

const Titum = () => {
  const navigate = useNavigate();

  const navigateToInternshipTask = () => {
    const path = "/tasks";
    navigate(path);
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-secondary-font-color font-Sen">
      <div className="px-3 ">
        <TheHeaderProgressBar />
      </div>

      <div className="pt-[190px]">
        <h3 className="mb-8 text-3xl font-semibold text-center text-primary-blue sm:mb-0">
          <TextGenerateEffect
            words={
              "Here is a list enumerating the majority of my professional endeavors"
            }
          />
        </h3>
        <div className="flex flex-wrap justify-center gap-10 p-3 sm:p-10 sm:pb-20">
          {jsonData[0].titum.map(
            ({
              id,
              title,
              github,
              imgLink,
              live,
              techStacks,
              type,
              description,
              projectType,
            }) => {
              // { id, title, github, imgLink, live, techStacks, type }
              // console.log(el);

            //   console.log(github);

              return (
                <TheTaskInfoCard
                  key={id}
                  imgUrl={imgLink}
                  title={title}
                  description={description}
                  liveUrl={live}
                  githubUrl={github}
                  techStacks={techStacks}
                  type={type}
                  projectType={projectType}
                />
              );
            }
          )}
        </div>

        <div className="justify-center p-3 mb-10 space-y-3 sm:flex sm:space-y-0 sm:space-x-5">
          <button
            type="button"
            onClick={navigateToInternshipTask}
            className="w-full sm:w-[300px] bg-primary-blue px-5 py-2 rounded-md text-white hover:opacity-90 border-2 border-primary-blue transition ease-in-out duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-opacity-50"
          >
            View Internship Tasks
          </button>

          <button
            type="button"
            onClick={navigateToHome}
            className="w-full sm:w-[200px] border-2 border-primary-blue px-5 py-2 rounded-md text-primary-blue hover:bg-primary-blue hover:transition 500 hover:text-white transition ease-in-out duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary-blue focus:ring-opacity-50"
          >
            Back to Home
          </button>
        </div>

        <TheFootNote />
      </div>
    </div>
  );
};

export default Titum;
