import TaskCard from "./TaskCard";
import taskList from "../data/taskList.json";

const TheProjectSection = () => {
  console.log(taskList[0].tasks[7]);

  return (
    <div className=" bg-primary-blue px-5 md:px-20 py-20">
      <h4 className="text-3xl text-center md:text-left font-semibold text-main-heading-color mb-10">
        Explore My Works
      </h4>

      {/* Card */}
      <div className="sm:flex items-center justify-center sm:gap-16 flex-wrap">
        {/* Instagram clone */}
        <TaskCard
          imgSource={taskList[0].tasks[4].imgLink}
          title={taskList[0].tasks[4].title}
          liveUrl={taskList[0].tasks[4].live}
          githubUrl={taskList[0].tasks[4].github}
        />

        {/* JS DOM Landing page idea */}
        <TaskCard
          imgSource={taskList[0].tasks[7].imgLink}
          title={taskList[0].tasks[7].title}
          liveUrl={taskList[0].tasks[7].live}
          githubUrl={taskList[0].tasks[7].github}
        />

        {/*  Interns Profile */}
        <TaskCard
          imgSource={taskList[0].tasks[5].imgLink}
          title={taskList[0].tasks[5].title}
          liveUrl={taskList[0].tasks[5].live}
          githubUrl={taskList[0].tasks[5].github}
        />

        {/* Post Finder - React App */}
        <TaskCard
          imgSource={taskList[0].tasks[6].imgLink}
          title={taskList[0].tasks[6].title}
          liveUrl={taskList[0].tasks[6].live}
          githubUrl={taskList[0].tasks[6].github}
        />
      </div>
    </div>
  );
};

export default TheProjectSection;
