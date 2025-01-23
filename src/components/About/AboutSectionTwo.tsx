import Image from "next/image";
import ClientCompanies from "./ClientCompanyCorousel";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
          {/* <ClientCompanies/> */}
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[28/24] max-w-[600px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/brands/20943573.jpg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/brands/20943573.jpg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Bug free code
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                We ensure that your projects are delivered with the highest quality, rigorously tested for performance and functionality. Say goodbye to unexpected crashes and errors with our clean, maintainable, and reliable code.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Premier support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Our dedicated support team is available to assist you every step of the way. From initial setup to troubleshooting, we prioritize your success with fast and effective solutions tailored to your needs.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Seamless Integration
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                Our solutions are designed to integrate effortlessly with your existing systems and tools. Whether it’s third-party APIs, databases, or custom workflows, we ensure a smooth and efficient implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
