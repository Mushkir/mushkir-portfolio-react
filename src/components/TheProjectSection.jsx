import TaskCard from "./TaskCard";
import { useNavigate } from "react-router-dom";
import taskList from "../data/taskList.json";

const TheProjectSection = () => {
  console.log(taskList[0].tasks[24]);

  const navigate = useNavigate();

  const navigateTaskPage = () => {
    const path = "/tasks";
    navigate(path);
  };

  return (
    <div className=" bg-primary-blue px-5 md:px-20 py-20" id="works">
      <h4
        className="text-3xl text-center md:text-left font-semibold text-main-heading-color mb-10"
        data-aos="fade-right"
        data-aos-duration="2500"
      >
        Explore My Works
      </h4>

      {/* Card */}
      <div className="sm:flex items-center justify-center sm:gap-16 flex-wrap">
        {/* Instagram clone */}
        <TaskCard
          imgSource={taskList[0].tasks[24].imgLink}
          title={taskList[0].tasks[24].title}
          liveUrl={taskList[0].tasks[24].live}
          githubUrl={taskList[0].tasks[24].github}
          techStacks={taskList[0].tasks[24].techStacks}
        />

        {/* JS DOM Landing page idea */}
        <TaskCard
          imgSource={taskList[0].tasks[7].imgLink}
          title={taskList[0].tasks[7].title}
          liveUrl={taskList[0].tasks[7].live}
          githubUrl={taskList[0].tasks[7].github}
          techStacks={taskList[0].tasks[7].techStacks}
        />

        {/*  Interns Profile */}
        <TaskCard
          imgSource={taskList[0].tasks[10].imgLink}
          title={taskList[0].tasks[10].title}
          liveUrl={taskList[0].tasks[10].live}
          githubUrl={taskList[0].tasks[10].github}
          techStacks={taskList[0].tasks[10].techStacks}
        />

        {/* Post Finder - React App */}
        <TaskCard
          imgSource={taskList[0].tasks[17].imgLink}
          title={taskList[0].tasks[17].title}
          liveUrl={taskList[0].tasks[17].live}
          githubUrl={taskList[0].tasks[17].github}
          techStacks={taskList[0].tasks[17].techStacks}
        />
      </div>

      <button
        className=" border border-aqua-color text-aqua-color px-5 py-2 rounded-md flex items-center gap-2 mx-auto mt-10 hover:bg-aqua-color hover:text-primary-blue hover:transition 500 hover:font-semibold"
        onClick={navigateTaskPage}
        data-aos="fade-right"
        data-aos-duration="2500"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
          >
            <g fill="currentColor">
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></path>
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"></path>
            </g>
          </svg>
        </div>
        Explore more...
      </button>
    </div>
  );
};

export default TheProjectSection;
