import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import {Question} from '@/Components/homeComponents/NextuiIcons/question';
import {Message} from '@/Components/homeComponents/NextuiIcons/message'

export default function SelectToLearn() {
    const GeneralContent =
        "This includes all of the messages of general things";
    const LecturesContent =
        "This include all of the messages about lectures, such as unfinished discussions in lectures and some lectures' details"
    const VitamineContent = 
        "This includes all of the messages of vitamines, easy for you to search for some tests details and information"
    const ProjectsContent = 
        "This includes all of the messages of projects, easy for you to search for new projects and some prp"
    const SocialContent = 
        "This includes all of the messages of social, easy for you to search for activities"
      const GenneralKey = "General introduction"
      const LecturesKey = "Lectures introduction"
      const VitamineKey = "Vitamine introduction"
      const ProjectsKey = "Projects introduction"
      const SocialKey = "Social introduction"
    return (
      <Accordion variant="splitted" className="w-full">
        <AccordionItem key={GenneralKey} aria-label="Accordion 1" title={<div>General</div>}>
          {GeneralContent}
        </AccordionItem>
        <AccordionItem key={LecturesKey} aria-label="Accordion 2" title={<div>Lectures</div>}>
          {LecturesContent}
        </AccordionItem>
        <AccordionItem key={VitamineKey} aria-label="Accordion 3" title={<div>Vitamine</div>}>
          {VitamineContent}
        </AccordionItem>
        <AccordionItem key={ProjectsKey} aria-label="Accordion 4" title={<div>Projects</div>}>
          {ProjectsContent}
        </AccordionItem>
        <AccordionItem key={SocialKey} aria-label="Accordion 5" title={<div>Social</div>}>
          {SocialContent}
        </AccordionItem>
    </Accordion>
    );
  }
