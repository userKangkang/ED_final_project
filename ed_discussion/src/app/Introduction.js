import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";

export default function SelectToLearn() {
    const GeneralContent =
        "This includes all of the messages of general things";
    const VitamineContent = 
        "This includes all of the messages of vitamines, easy for you to search for some tests details and information"
    const ProjectsContent = 
        "This includes all of the messages of projects, easy for you to search for new projects and some prp"
    const SocialContent = 
        "This includes all of the messages of social, easy for you to search for activities"
    const AllContent = 
        "All above are included in All"
      const GenneralKey = "General introduction"
      const VitamineKey = "Vitamine introduction"
      const ProjectsKey = "Projects introduction"
      const SocialKey = "Social introduction"
      const AllKey = "All intrduction"
    return (
      <Accordion variant="splitted">
        <AccordionItem key={GenneralKey} aria-label="Accordion 1" title="General">
          {GeneralContent}
        </AccordionItem>
        <AccordionItem key={VitamineKey} aria-label="Accordion 2" title="Vitamins">
          {VitamineContent}
        </AccordionItem>
        <AccordionItem key={ProjectsKey} aria-label="Accordion 3" title="Projects">
          {ProjectsContent}
        </AccordionItem>
        <AccordionItem key={SocialKey} aria-label="Accordion 4" title="Social">
          {SocialContent}
        </AccordionItem>
        <AccordionItem key={AllKey} aria-label="Accordion 5" title="All">
          {AllContent}
        </AccordionItem>
      </Accordion>
    );
  }