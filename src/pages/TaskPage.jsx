import TheTaskInfoCard from "../components/TheTaskInfoCard";
import taskList from "../data/taskList.json";
import TheFootNote from "../components/TheFootNote";

const TaskPage = () => {
  return (
    <div className="bg-secondary-font-color min-h-screen font-Sen">
      <div className="pt-[200px] p-10 pb-20 flex justify-center flex-wrap gap-10">
        {taskList[0].tasks.map(
          ({ id, title, github, imgLink, live, techStacks, type }) => {
            // { id, title, github, imgLink, live, techStacks, type }
            // console.log(el);
            return (
              <TheTaskInfoCard
                key={id}
                imgUrl={imgLink}
                title={title}
                description="Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows."
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
  );
};

export default TaskPage;
