"use client"
import NewsCard from '../../../components/NewsCard' ;
import { newsData } from "../../../data/newsData";

const Elections = () => {
  const electionArticles = newsData.filter((item) => item.category === 'ELECTIONS');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-gray-800 border-l-4 border-red-700 pl-4">
            Elections
          </h1>
          <p className="text-gray-600 mt-2 pl-4">Political coverage and election updates</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {electionArticles.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Elections;
