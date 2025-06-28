import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockBlogs } from '../data/blogData.js';

export default function BlogPost() {
  const { id } = useParams();
  const blog = mockBlogs.find(post => post.id === parseInt(id));

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
            <Link 
              to="/blog" 
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link 
            to="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>

        {/* Blog Post Content */}
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Featured Image */}
          <div className="h-64 md:h-96 overflow-hidden">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="p-8">
            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {blog.title}
            </h1>

            {/* Meta Information */}
            <div className="flex items-center justify-between mb-6 pb-6 border-b border-gray-200">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                  {blog.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{blog.author}</p>
                  <p className="text-sm text-gray-500">{formatDate(blog.date)}</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">{blog.readTime}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {blog.tags.map(tag => (
                <span
                  key={tag}
                  className="inline-block bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Excerpt */}
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-8">
              <p className="text-lg text-gray-700 italic">
                {blog.excerpt}
              </p>
            </div>

            {/* Main Content */}
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {blog.content}
              </p>
              
              {/* Additional content sections - you can expand this */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding the Impact</h2>
                  <p className="text-gray-700 leading-relaxed">
                    The effects of workplace harassment extend far beyond the immediate incident. Research shows that experiencing or witnessing harassment can lead to decreased job satisfaction, reduced productivity, and significant mental health challenges. It's important to understand that these reactions are normal and valid responses to inappropriate behavior.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Taking Action</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Whether you're experiencing harassment yourself or supporting someone who is, taking action is crucial. This doesn't always mean formal reporting - sometimes it means documenting incidents, seeking support from trusted colleagues or friends, or connecting with professional resources. Remember, every situation is unique, and you have the right to choose the approach that feels safest and most appropriate for your circumstances.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Resources and Support</h2>
                  <p className="text-gray-700 leading-relaxed">
                    If you're dealing with workplace harassment, you don't have to face it alone. Many organizations offer confidential support services, and there are legal protections in place to help. Consider reaching out to your HR department, employee assistance programs, or external advocacy organizations for guidance and support.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-12 bg-gray-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Need Support?</h3>
              <p className="text-gray-700 mb-4">
                If this article resonates with your experience, remember that help is available. You deserve a safe and respectful workplace.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  to="/resources" 
                  className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Find Resources
                </Link>
                <Link 
                  to="/contact" 
                  className="inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related Articles */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {mockBlogs
              .filter(post => post.id !== blog.id)
              .slice(0, 2)
              .map(relatedBlog => (
                <Link 
                  key={relatedBlog.id}
                  to={`/blog/${relatedBlog.id}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="h-32 overflow-hidden">
                    <img
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-gray-900 mb-2 line-clamp-2">
                      {relatedBlog.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {relatedBlog.excerpt}
                    </p>
                    <div className="mt-3 text-sm text-gray-500">
                      {relatedBlog.readTime}
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}