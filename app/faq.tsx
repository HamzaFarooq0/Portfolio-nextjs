import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"



const FAQS = () => {
  return (
    <div className=" mt-10 md:py-10 bg-[#f6f5f4] w-full
        rounded-3xl
        
        ">
      <div className=" p-10 md:p-4 md:px-20">
        <div className="text-3xl md:text-7xl font-bold text-black">
          Have questions ?
        </div>
        <div className="  font-semibold text-3xl md:text-6xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
          Get answers.
        </div>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger> How does the money back guarantee work?</AccordionTrigger>
            <AccordionContent>
            If you are unhappy with your site within 5 days following the completion of your project, we will provide a refund for the cost of your project, up to a maximum of $1000. This cap is in place because projects over $1000 typically involve more time and resources, and this policy helps us balance our commitment to customer satisfaction with the need to cover our costs for larger projects.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>How much do you charge for website hosting?</AccordionTrigger>
            <AccordionContent>
            Unless you have your own webserver, you will need hosting in order to make your website available on the internet. We can provide this service to you for $30/month.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>
              
How long does it take to design and launch a website?
            </AccordionTrigger>
            <AccordionContent>
            The duration needed to complete your website can significantly vary depending on its complexity. A basic website with five pages and a contact form might be ready in under a week, while a site with custom web applications and large e-commerce stores could require substantially more time.

            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>
              
What happens if I encounter technical issues with my website?
            </AccordionTrigger>
            <AccordionContent>
            Should you face any technical difficulties with your website, rest assured that we will address them promptly. You can contact us through email, phone, or our contact page. Our team will promptly diagnose and resolve any problems to ensure your website operates smoothly. Additionally, we offer regular maintenance and updates to prevent common technical issues.
            </AccordionContent>
          </AccordionItem>
        </Accordion>


      </div>
    </div>);
}

export default FAQS;