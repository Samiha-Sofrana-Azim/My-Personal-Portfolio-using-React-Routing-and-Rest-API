import { useState, useMemo } from "react";
import "./style.css";

const title = [
  {
    id: "1",
    name : "Java",
    about:"Ut velit omnis rem ipsum quia et tenetur dolorem a tempore culpa. Non sequi ratione sit eaque velit aut debitis nihil aut neque temporibus. Qui fugit illo ut dolorum blanditiis id ratione dolor?",
  },
  {
    id: "2",
    name: "Python",
    about:"Et velit corporis quo omnis ut commodi animi. Ea corporis quia sit omnis alias ut magnam officia et labore molestiae est magnam expedita qui provident consectetur et voluptatem voluptas? Qui tenetur quae et quisquam culpa cum aspernatur sint est tempore consequuntur qui expedita quisquam. Ut laborum rerum ut quaerat iusto ut quas dicta et voluptate tempora et Quis sint ut corrupti error ea asperiores Quis."
  },{
  id: "3",
  name: "PHP",
 about:"Lorem ipsum dolor sit amet. Sed voluptatem alias qui nihil assumenda sit tenetur doloremque ut culpa nisi qui nulla voluptas ab quaerat dolores. Qui officiis quisquam et sunt enim sit beatae laudantium nam reprehenderit aliquid.",
  },
  {
    id: "4",
    name: "HTML",
    about:"Et velit corporis quo omnis ut commodi animi. Ea corporis quia sit omnis alias ut magnam officia et labore molestiae est magnam expedita qui provident consectetur et voluptatem voluptas? Qui tenetur quae et quisquam culpa cum aspernatur sint est tempore consequuntur qui expedita quisquam. Ut laborum rerum ut quaerat iusto ut quas dicta et voluptate tempora et Quis sint ut corrupti error ea asperiores Quis.",
  },
  {
    id: "5",
    name: "CSS3",
    about:"Lorem ipsum dolor sit amet. Sed voluptatem alias qui nihil assumenda sit tenetur doloremque ut culpa nisi qui nulla voluptas ab quaerat dolores. Qui officiis quisquam et sunt enim sit beatae laudantium nam reprehenderit aliquid.",
  },
  {
    id: "6",
    name: "Javascript",
    about:"Ut velit omnis rem ipsum quia et tenetur dolorem a tempore culpa. Non sequi ratione sit eaque velit aut debitis nihil aut neque temporibus. Qui fugit illo ut dolorum blanditiis id ratione dolor?",
  },
];
const Blog = () => {
  const [text, setText] = useState("");
  const [search, setSearch] = useState("");
  console.log("text", text);
  console.log("search", search);
  const handleText = (e) => {
  setText(e.target.value);
  };
  const handleSearch = () => {
    setSearch(text);
  };
  const filteredTitle = useMemo(
    () =>
      title.filter((title) => {
        console.log("filtering title");
        return title.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search]
  );
  return (
    <div>
      <input type="text" value={text} onChange={handleText} />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {filteredTitle.map((filteredTitle) => (
          <li key={filteredTitle.id}>{filteredTitle.name}
          <div>{filteredTitle.about}</div></li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
