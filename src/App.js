import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: (
      <em>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium,
        quaerat <p style={{ color: "red" }}>temporibus quas dolore provident</p>
        nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.
      </em>
    ),
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [currentNum, setCurrentNum] = useState(0);
  return (
    <div className="accordion">
      {data.map((item, index) => (
        <AccordionItem
          item={item}
          num={index + 1}
          key={index}
          currentNum={currentNum}
          setCurrentNum={setCurrentNum}
        />
      ))}
    </div>
  );
}

function AccordionItem({ item, num, currentNum, setCurrentNum }) {
  const isOpen = currentNum === num ? true : false;
  function handleToggle() {
    setCurrentNum(isOpen ? null : num);
  }

  return (
    <div className="item" onClick={handleToggle}>
      <p className="number">{num < 10 ? `0${num}` : num}</p>
      <p className={`title ${isOpen ? "open" : ""} `}>{item.title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <p className="content-box">{item.text}</p>}
    </div>
  );
}

export default App;
