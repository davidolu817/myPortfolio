import React from "react";
import {AiFillAppstore} from "react-icons/ai";
import {FaMobile, FaGlobe} from "react-icons/fa";
import {SiProgress, SiAntdesign} from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do"/>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
      <Card
        title="Business Stratagy"
        des="Business strategy is a plan of action that sets out how an organization 
        will achieve its objectives in the long-term."
        
      />
      <Card
        title="App Development"
        des="App development is the process of creating software applications that run 
        on mobile devices such as smartphones and tablets."
        icon={<AiFillAppstore/>}
      />
      <Card
        title="SEO Optimisation"
        des="SEO optimization is essential for any website to increase 
        its visibility and reach online."
        icon={<SiProgress />}
      />
      <Card
        title="Mobile Development"
        des="Mobile development is the process of creating software applications
        that run on mobile devices."
        icon={<FaMobile/>}
      />
      <Card
        title="UX Design"
        des="UX design, also known as user experience design, is the process of designing digital products or
        services that are easy to use and provide a satisfying experience for the user."
        icon={<SiAntdesign/>}
      />
      <Card
        title="Hosting Website"
        des="Website hosting is the process of storing and making available web content,
        such as HTML files, images, and multimedia, on a server owned or leased by a hosting provider."
        icon={<FaGlobe/>}
      />
      </div>
    </section>
  );
};

export default Features;
