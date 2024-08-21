import axios from "axios";
import { useState } from "react";
import { ArticlesIndex } from "./ArticlesIndex";

export function ArticlesPage() {
  const [searchTerms, setSearchTerms] = useState("API");
  const [articles, setArticles] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    console.log("searchTerms:", searchTerms);
    axios.get("http://localhost:3000/articles.json?search_terms=" + searchTerms + "").then((response) => {
      console.log(response.data);
      setArticles(response.data);
    });
  };

// useEffect(handleIndex); // Doing Search button instead. Live reload Will get {"status"=>"error",
  //  "code"=>"rateLimited",
  //  "message"=>
  //   "You have made too many requests recently. Developer accounts are limited to 100 requests over a 24 hour period (50 requests available every 12 hours). Please upgrade to a paid plan if you need more requests."}


  return (
    <div className="container mx-auto p-4 mt-4 pl-4 pr-4">
      <div className="flex justify-center mb-4">
        <input
          type="text"
          value={searchTerms}
          onChange={(e) => setSearchTerms(e.target.value)}
          className="w-full p-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
          placeholder="Search articles"
        />
        <button
          onClick={handleIndex}
          className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Search
        </button>
      </div>
        <ArticlesIndex articles={articles} />
    </div>
  );
}
