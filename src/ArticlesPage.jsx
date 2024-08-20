import axios from "axios";
import { useEffect, useState } from "react";
import { ArticlesIndex } from "./ArticlesIndex";

export function ArticlesPage() {
  const [articles, setArticles] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("http://localhost:3000/articles.json").then((response) => {
      console.log(response.data);
      setArticles(response.data);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <div>
        <ArticlesIndex articles={articles} />
      </div>
    </main>
  );
}
