import TaskCard from "./TaskCard";
import taskList from "../data/taskList.json";

const TheProjectSection = () => {
  const imgSource = taskList[0].tasks[0].imgLink;

  console.log(taskList[0].tasks[0].title);

  return (
    <div className=" bg-primary-blue px-5 md:px-20 py-20">
      <h4 className="text-3xl text-center md:text-left font-semibold text-main-heading-color mb-10">
        Explore My Works
      </h4>

      {/* Card */}
      <div className="flex items-center justify-center gap-16 flex-wrap">
        <TaskCard
          imgSource={taskList[0].tasks[0].imgLink}
          title={taskList[0].tasks[0].title}
          liveUrl="https://mushkir.github.io/Mushkir_Resume"
          githubUrl="https://github.com/Mushkir/mushkir_portfolio"
        />
      </div>
    </div>
  );
};

export default TheProjectSection;
