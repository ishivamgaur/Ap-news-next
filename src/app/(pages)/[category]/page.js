import CategoryPage from "@/components/CategoryPage";
import { categories } from "@/data/categories";

// This generates the static paths for your categories at build time.
export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.path.substring(1),
  }));
}


export default async function Page({ params }) {
  // Find the category data based on the URL parameter
  let parameters = await params;
  console.log("parameters", parameters);
  const categoryData = categories.find(
    (cat) => cat.path.substring(1) === parameters.category
  );


  // You might want to handle the case where the category is not found
  if (!categoryData) {
    // In a real app, you would call notFound() from 'next/navigation'
    return <div>Category not found.</div>;
  }

  return <CategoryPage {...categoryData} />;
}
