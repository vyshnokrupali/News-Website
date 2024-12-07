import { useState } from "react";
import Navbar from "./components/Navbar";
import NewsCategory from "./components/NewsCategory";

const App = () => {
  const [category, setCategory] = useState("general");
  const [search, setSearch] = useState(""); // Make sure this state is here

  return (
    <div>
      <Navbar setCategory={setCategory} setSearch={setSearch} />{" "}
      {/* Passing setSearch */}
      <NewsCategory category={category} search={search} />
    </div>
  );
};

export default App;
