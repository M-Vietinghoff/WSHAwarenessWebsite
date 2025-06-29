import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mockBlogs } from '../data/blogData.js';
import './Blog.css';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBlogs = mockBlogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="blog-container">
      <div className="blog-wrapper">
        {/* Header Section */}
        <div className="blog-header">
          <h1 className="blog-title">
            Safety & Support Blog
          </h1>
          <p className="blog-subtitle">
            Resources, insights, and support for creating safer workplaces for women and non-binary people
          </p>
        </div>

        {/* Search Section */}
        <div className="search-section">
          {/* Search Bar */}
          <div className="search-container">
            <input
              type="text"
              placeholder="Search by title or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
            <svg className="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Results Count */}
        <div className="results-count">
          <p>
            Showing {filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Blog Grid */}
        {filteredBlogs.length > 0 ? (
          <div className="blog-grid">
            {filteredBlogs.map(blog => (
              <article key={blog.id} className="blog-card">
                {/* Blog Image */}
                <div className="blog-image-container">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="blog-image"
                  />
                </div>

                {/* Blog Content */}
                <div className="blog-content">
                  {/* Read Time */}
                  <div className="blog-read-time">
                    <span>{blog.readTime}</span>
                  </div>

                  {/* Title */}
                  <Link to={`/blog/${blog.id}`}>
                    <h2 className="blog-post-title">
                      {blog.title}
                    </h2>
                  </Link>

                  {/* Excerpt */}
                  <p className="blog-excerpt">
                    {blog.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="blog-tags">
                    {blog.tags.map(tag => (
                      <span
                        key={tag}
                        className="blog-tag"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Author and Date */}
                  <div className="blog-footer">
                    <div className="blog-author">
                      <div className="author-avatar">
                        {blog.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="author-info">
                        <p className="author-name">{blog.author}</p>
                        <p className="author-date">{formatDate(blog.date)}</p>
                      </div>
                    </div>
                    <Link 
                      to={`/blog/${blog.id}`}
                      className="read-more-link"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* No Results */
          <div className="no-results">
            <svg className="no-results-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
            </svg>
            <h3 className="no-results-title">No articles found</h3>
            <p className="no-results-text">
              Try adjusting your search criteria.
            </p>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="newsletter-section">
          <h3 className="newsletter-title">
            Stay Informed & Supported
          </h3>
          <p className="newsletter-description">
            Subscribe to our newsletter for the latest resources, safety tips, and support information for workplace safety.
          </p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button className="newsletter-button">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}