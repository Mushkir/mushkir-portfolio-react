import TheTaskInfoCard from "../components/TheTaskInfoCard";
import taskList from "../data/taskList.json";
import TheFootNote from "../components/TheFootNote";
import TheHeaderProgressBar from "../components/HeaderProgressBar/TheHeaderProgressBar";

const TaskPage = () => {
  return (
    <div className="bg-secondary-font-color min-h-screen font-Sen">
      <TheHeaderProgressBar />

      <div className="pt-[190px]">
        <h3 className=" text-center text-3xl font-semibold text-primary-blue">
          Here is a list enumerating the majority of my professional endeavors
        </h3>
        <div className="p-3 sm:p-10 sm:pb-20 flex justify-center flex-wrap gap-10">
          {taskList[0].tasks.map(
            ({
              id,
              title,
              github,
              imgLink,
              live,
              techStacks,
              type,
              description,
            }) => {
              // { id, title, github, imgLink, live, techStacks, type }
              // console.log(el);
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
                />
              );
            }
          )}
        </div>

        <TheFootNote />
      </div>
    </div>
  );
};

export default TaskPage;
