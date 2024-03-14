import TheTaskInfoCard from "../components/TheTaskInfoCard";

const TaskPage = () => {
  return (
    <div className="bg-secondary-font-color min-h-screen font-Sen">
      <div className="pt-[200px] p-10 flex justify-center flex-wrap gap-10">
        <TheTaskInfoCard
          imgUrl="https://i.ibb.co/nkPcSxY/screencapture-mushkir-github-io-Mushkir-Resume-2024-03-14-17-43-03.png"
          title="My Resume"
          description="Enter a freshly updated and thoughtfully furnished peaceful home surrounded by ancient trees, stone walls, and open meadows."
          liveUrl="https://mushkir.github.io/Mushkir_Resume"
          githubUrl="https://github.com/Mushkir/Mushkir_Resume"
          techStacks={["HTML", "CSS"]}
          type="F"
        />
      </div>
    </div>
  );
};

export default TaskPage;
