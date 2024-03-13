import SocialLinks from "./SocialLinks";

const HeroDetail = () => {
  return (
    <div className="bg-primary-blue px-5 md:px-20 py-10 pt-20">
      <div className="md:flex justify-between mt-12 md:mt-28">
        {/* Hero Details */}
        <div className="mb-5 md:mt-10">
          <div className="mb-2">
            <h4 className=" text-aqua-color">A passsionate</h4>
          </div>

          <div className="mb-3">
            <strong className=" text-main-heading-color text-4xl">
              Full-Stack Web Developer
            </strong>
          </div>

          <div className="mb-5">
            <p className=" text-secondary-font-color">
              I am interested in working on challenging web-based applications
              or projects, as well as utilizing my development knowledge to
              provide solutions for clients.
            </p>
          </div>

          {/* Social Links */}
          <SocialLinks />
        </div>

        {/* Hero Image */}
        <div>
          <div className="md:h-[600px] md:w-[500px]">
            <img
              src="src/assets/img/mushkir.png"
              alt="Mushkir Image / Mohamed Mushkir Image"
              className=" h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDetail;
