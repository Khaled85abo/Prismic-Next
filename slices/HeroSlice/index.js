import { PrismicNextImage } from "@prismicio/next";
import CustomLink from "../../components/CustomLink";
import RichText from "../../components/RichText";

const HeroSlice = ({ slice }) => (
  <section className="section relative bg-black">
    <div>
      <PrismicNextImage field={slice?.primary?.image} objectFit="cover" />
    </div>
    <div className="buttons-div">
      {slice?.items?.map((item, i) => (
        <CustomLink
          key={i}
          text={item.cta_text}
          link={item.cta_link}
          className="mt-4 inline-flex rounded-full bg-white px-5 py-2 text-sm font-medium uppercase"
        />
      ))}
    </div>
    <div className="container relative py-48">
      <RichText
        field={slice.primary.title}
        className="text-2xl text-white font-bold"
      />
      <RichText field={slice.primary.description} className="text-white" />
    </div>
  </section>
);

export default HeroSlice;
