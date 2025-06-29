import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockBlogs } from '../data/blogData.js';
import './BlogPost.css';

export default function BlogPost() {
  const { id } = useParams();
  const blog = mockBlogs.find(post => post.id === parseInt(id));

  if (!blog) {
    return (
      <div className="blog-post-container">
        <div className="blog-post-wrapper">
          <div className="blog-post-not-found">
            <h1>Blog Post Not Found</h1>
            <p>The blog post you're looking for doesn't exist.</p>
            <Link to="/blog">
              ← Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="blog-post-container">
      <div className="blog-post-wrapper">
        {/* Back Button */}
        <div className="back-button-container">
          <Link to="/blog" className="back-button">
            <svg className="back-button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>

        {/* Blog Post Content */}
        <article className="blog-post-article">
          {/* Featured Image */}
          <div className="blog-post-image-container">
            <img
              src={blog.image}
              alt={blog.title}
              className="blog-post-image"
            />
          </div>

          {/* Article Content */}
          <div className="blog-post-content">
            {/* Title */}
            <h1 className="blog-post-main-title">
              {blog.title}
            </h1>

            {/* Meta Information */}
            <div className="blog-post-meta">
              <div className="blog-post-author-info">
                <div className="blog-post-author-avatar">
                  {blog.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="blog-post-author-details">
                  <p className="blog-post-author-name">{blog.author}</p>
                  <p className="blog-post-author-date">{formatDate(blog.date)}</p>
                </div>
              </div>
              <span className="blog-post-read-time">{blog.readTime}</span>
            </div>

            {/* Tags */}
            <div className="blog-post-tags">
              {blog.tags.map(tag => (
                <span key={tag} className="blog-post-tag">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Excerpt */}
            <div className="blog-post-excerpt">
              <p>{blog.excerpt}</p>
            </div>

            {/* Main Content */}
            <div className="blog-post-prose">
              <p>{blog.content}</p>
              
              {/* Additional content sections */}
              <div className="blog-post-sections">
                <div className="blog-post-section">
                  <h2>Understanding the Impact</h2>
                  <p>
                    The effects of workplace harassment extend far beyond the immediate incident. Research shows that experiencing or witnessing harassment can lead to decreased job satisfaction, reduced productivity, and significant mental health challenges. It's important to understand that these reactions are normal and valid responses to inappropriate behavior.
                  </p>
                </div>

                <div className="blog-post-section">
                  <h2>Taking Action</h2>
                  <p>
                    Whether you're experiencing harassment yourself or supporting someone who is, taking action is crucial. This doesn't always mean formal reporting - sometimes it means documenting incidents, seeking support from trusted colleagues or friends, or connecting with professional resources. Remember, every situation is unique, and you have the right to choose the approach that feels safest and most appropriate for your circumstances.
                  </p>
                </div>

                <div className="blog-post-section">
                  <h2>Resources and Support</h2>
                  <p>
                    If you're dealing with workplace harassment, you don't have to face it alone. Many organizations offer confidential support services, and there are legal protections in place to help. Consider reaching out to your HR department, employee assistance programs, or external advocacy organizations for guidance and support.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="blog-post-cta">
              <h3 className="blog-post-cta-title">Need Support?</h3>
              <p className="blog-post-cta-text">
                If this article resonates with your experience, remember that help is available. You deserve a safe and respectful workplace.
              </p>
              <div className="blog-post-cta-buttons">
                <Link to="/resources" className="blog-post-cta-primary">
                  Find Resources
                </Link>
                <Link to="/contact" className="blog-post-cta-secondary">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}