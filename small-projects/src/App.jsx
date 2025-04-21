import Accordion from "./components/Accordian";
import { accordionData } from "./utils/content";

const App = () => {
  return (
    <div>
      <div className="accordion">
        {accordionData.map(({ title, content }, index) => (
          <Accordion 
            key={`accordion-${index}`} 
            title={title} 
            content={content} 
          />
        ))}
      </div>
    </div>
  );
};

export default App;