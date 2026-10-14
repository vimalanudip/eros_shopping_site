function Categories({
  selectedCategory = "All",
  setSelectedCategory = () => {},
}) {
  const categories = [
    "All",
    "spring-summer",
    "sweatshirt",
    "sneakers",
    "gadgets",
    "outdoor",
  ];

  return (
    <section className="categories">
      {categories.map((category) => (
        <button
  key={category}
  className={selectedCategory === category ? "active" : ""}
  onClick={() => setSelectedCategory(category)}
>
  {category}
</button>
      ))}
    </section>
  );
}

export default Categories;