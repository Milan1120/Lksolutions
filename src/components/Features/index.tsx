import SectionTitle from "../Common/SectionTitle";
import Tech from "../Tech";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Main Features"
            paragraph="web and mobile app development company specializing in industries like healthcare, eCommerce, and finance. They leverage technologies such as Java, .NET, and MySQL to deliver impactful solutions."
            center
          />

          {/* <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div> */}
          <Tech />
        </div>
      </section>
    </>
  );
};

export default Features;
