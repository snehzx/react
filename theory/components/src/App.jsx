import PostComponent from "./props/prop";
import reactLogo from "./assets/react.svg";
const cards = [
  {
    image: reactLogo,
    title: "React",
    description: "React-Basics",
    timing: "20:10",
    tool: "react + vite",
  },
  {
    image: "https://1000logos.net/wp-content/uploads/2020/09/MongoDB-Logo.jpg",
    title: "MongoDb",
    description: "Relationships in MongoDb",
    timing: "23:10",
    tool: "Mongoose",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bebC_d4eWwJ-x9ntqDuT94TvOgumSBVWHg&s",
    title: "NodeJs",
    description: "framework in nodeJs",
    tool: "express",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDyzz3h7_3Mj7n1tJQuEMwf2XT6C1WCwqpQQ&s",
    title: "SQL",
    description: " orm tool for Postgresql",
    timing: "18:20",
    tool: "Prisma",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqea62MI9LsCBEPZ4WCRjBO7eKY08zYXacGg&s",
    title: "devops",
    timing: "15:40",
    tool: "docker",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/960px-Tailwind_CSS_Logo.svg.png",
    title: "Style",
    description: "styling with css",
    timing: "16:39",
    tool: "tailwindcss",
  },
];

function App() {
  return (
    <div>
      {cards.map((card, index) => (
        <PostComponent
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          timing={card.timing}
          tool={card.tool}
        />
      ))}
    </div>
  );
}

export default App;
