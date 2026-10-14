function Blogs() {
  return (
    <div className="blogs">
      <p className="blog-title">OUR BLOGS & NEWS</p>

      {/* Blogs Wrapper Block */}
      <div className="blog-wrapper">

        {/* Left Slider Arrow */}
        <div className="blog-arrow left-arrow">
          <i className="fa-solid fa-chevron-left"></i>
        </div>

        {/* Blog Post Card 1 */}
        <div className="blog-card">
          <img
            src="/assets/blogs_and_news_girl.png"
            alt="Fashion Blog"
          />
        </div>

        {/* Blog Post Card 2 */}
        <div className="blog-card">
          <img
            src="/assets/Shape (20).png"
            alt="Fashion Blog"
          />
        </div>

        {/* Right Slider Arrow */}
        <div className="blog-arrow right-arrow">
          <i className="fa-solid fa-chevron-right"></i>
        </div>

      </div>
    </div>
  );
}

export default Blogs;