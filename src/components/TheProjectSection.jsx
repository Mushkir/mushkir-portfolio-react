import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import jsonData from "../data/taskList.json";
import TaskCard from "./TaskCard";

const TheProjectSection = () => {
  const { academic, titum, personal } = jsonData[0];

  const firstCard = titum[1];
  const secondaryCard = personal[1];
  const thirdCard = titum[0];

  const navigate = useNavigate();

  const navigateTaskPage = (e) => {
    e.preventDefault();

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton:
          "px-5 py-2 bg-primary-blue text-white rounded-md mx-3 mb-3 sm:mb-0 w-full sm:w-[200px]",
        cancelButton:
          "px-5 py-2 bg-green-700 text-white rounded-md mx-3 mb-3 sm:mb-0 w-full sm:w-[200px]",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Choose category!",
        text: "Dear viewer! Please choose category of the projects / tasks to explore!",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Internship Tasks",
        cancelButtonText: "Projects in Titum",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          const path = "/tasks";
          navigate(path);
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          const academicProjectPath = "/titum";
          navigate(academicProjectPath);
        }
      });
  };

  return (
    <div className="px-5 py-20 bg-primary-blue md:px-20" id="works">
      <h4
        className="mb-10 text-3xl font-semibold text-center md:text-left text-main-heading-color"
        data-aos="fade-right"
        data-aos-duration="2500"
      >
        Explore My Works
      </h4>

      {/* Card */}
      <div className="flex-wrap items-center justify-center sm:flex sm:gap-16">
        {/* Titum */}
        <TaskCard
          imgSource={firstCard.imgLink}
          title={firstCard.title}
          liveUrl={firstCard.live}
          githubUrl={""}
          techStacks={firstCard.techStacks}
          remarks={firstCard.remarks}
        />

        {/* Hafil King Travels */}
        <TaskCard
          imgSource={secondaryCard.imgLink}
          title={secondaryCard.title}
          liveUrl={secondaryCard.liveUrl}
          techStacks={secondaryCard.techStacks}
        />

        <TaskCard
          imgSource={thirdCard.imgLink}
          title={thirdCard.title}
          liveUrl={""}
          githubUrl={thirdCard.github}
          techStacks={thirdCard.techStacks}
          remarks={thirdCard.remarks}
        />

        {/* City taxi */}
        {/* <TaskCard
          imgSource={academic[1].imgLink}
          title={academic[1].title}
          liveUrl={academic[1].live}
          githubUrl={academic[1].github}
          techStacks={academic[1].techStacks}
        /> */}

        {/*  E-Book */}
        <TaskCard
          imgSource={academic[2].imgLink}
          title={academic[2].title}
          liveUrl={academic[2].live}
          githubUrl={academic[2].github}
          techStacks={academic[2].techStacks}
        />
      </div>

      <button
        className="flex items-center gap-2 px-5 py-2 mx-auto mt-10 border rounded-md border-aqua-color text-aqua-color hover:bg-aqua-color hover:text-primary-blue hover:transition 500 hover:font-semibold"
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
