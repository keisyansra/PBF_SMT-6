import { useRouter } from "next/router";

const CategoryPage = () => {
  const { query } = useRouter();
  const { slug } = query;

  return (
    <div>
      <h1>Category Page</h1>

      <h3>Parameter URL:</h3>

      <ul>
        {Array.isArray(slug) &&
          slug.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
  );
};

export default CategoryPage;