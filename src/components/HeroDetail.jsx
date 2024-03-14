import SocialLinks from "./SocialLinks";

const HeroDetail = () => {
  return (
    <div className="bg-primary-blue px-5 md:px-20 pt-28 pb-28">
      <div className="md:flex gap-20 justify-between mt-12 md:mt-28">
        {/* Hero Details */}
        <div className="mb-5 md:mt-10">
          <div className="mb-2">
            <h4 className="text-aqua-color tracking-wider">A Passsionate</h4>
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
          <div className="w-[250px] h-[250px] mx-auto md:h-[300px] md:w-[300px] rounded-full border-4 border-aqua-color">
            <img
              src="src/assets/img/mushkir-image.JPG"
              alt="Mushkir Image / Mohamed Mushkir Image"
              className=" h-full w-full object-cover rounded-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDetail;
