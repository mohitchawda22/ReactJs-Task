import React, { useContext } from 'react';
import { blogPosts } from '../../data/blogPost';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeProvider';


function BlogSection() {

  const {theme}=useContext(ThemeContext)
  return (
    <div className={`py-5 ${theme==="light"?"light":"dark"}`}>
      <div className="container">
        <h2 className="text-center display-6 mb-2">New Blog Posts</h2>
        <p className="text-center mb-5">Read Today's News.</p>

        <div className="row">
          {blogPosts.map((post) => (
            <div key={post.id} className="col-md-4 mb-4">
              <div className="position-relative">
                <div className="position-relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-100"
                    style={{ height: "300px", objectFit: "cover" }}
                  />
                </div>
                <div className="position-absolute top-0 start-0 bg-danger text-white p-2">
                  <div className="fw-bold">{post.date.split(" ")[0]}</div>
                  <div className="small">{post.date.split(" ")[1]}</div>
                </div>
              </div>
              <div className="mt-3">
                <h3 className="h5 mb-2">{post.title}</h3>
                <p className="">{post.excerpt}</p>
                <Link to={`/blog/${post.slug}`} className="text-danger text-decoration-none border border-danger p-2">
                  Read More <i className="bi bi-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogSection;
