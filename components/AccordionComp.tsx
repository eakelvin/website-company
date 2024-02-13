import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"

const AccordionComp = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Are you open to taking on projects that are already underway?</AccordionTrigger>
        <AccordionContent>
          Our decision to accept an ongoing project depends on how well it aligns with the technology stack used in its development. 
          We thoroughly assess the technical needs of each project to ensure that our expertise can seamlessly integrate with it. 
          Although we may encounter projects that require adjustments, we prioritize acceptance only when we are confident in our ability to deliver results from their current stage.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger> Can you incorporate my own designs into the project? </AccordionTrigger>
        <AccordionContent>
          Certainly, integrating your designs is not a problem as long as they meet our high-quality standards. 
          In such cases, our priority shifts to ensuring the accuracy, completeness, and alignment of the designs with the project's development plan. 
          Leveraging our expertise, we may suggest alternative approaches if they are deemed beneficial, with the aim of achieving optimal outcomes through iterative design refinement.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>How do you determine project costs?</AccordionTrigger>
        <AccordionContent>
          We determine project costs by providing the client with comprehensive specifications that outline all aspects of the selected project, including a detailed breakdown of associated expenses. 
          These specifications are meticulously crafted to encompass all relevant elements, ensuring transparency and clarity regarding project scope, budget allocation, and deliverables
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>Do you offer support and maintenance after the project launch?</AccordionTrigger>
        <AccordionContent>
          Yes, we offer ongoing maintenance and support services for projects initiated by our clients. 
          This commitment ensures continuous support and responsiveness to address any minor requests or adjustments throughout the project's lifecycle. 
          Our maintenance contract includes provisions for handling minor changes, troubleshooting, and ensuring the sustained functionality and performance of the project over time.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

export default AccordionComp