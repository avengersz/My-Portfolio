import React from 'react';
import BlogCard from '../BlogCard/BlogCard';

const Blogs = () => {
  const blogContents = [{
    id: 1,
    cover:"https://miro.medium.com/max/700/1*X3P5a3VqgPYqk_bbkmJMrw.jpeg",
    title: "Top 10 Things I have Learned",
    description: 'I make my day somewhere valuable by learning more about JavaScript. So I will give a brief description of what I have learned so far...',
    link:""
  },{
    id: 2,
    cover:"https://www.cloudways.com/blog/wp-content/uploads/Why-ReactJS-Should-be-a-Perfect-Choice-for-Your-Next-Front-end-Application-Banner.jpg",
    title: "Why React.js is my favorite?",
    description: 'Its easy to learn and easy to explore. Yes, React.js is easy to learn. Within just 1 week of study, you can make an entire website.....',
    link:""
  },{
    id: 3,
    cover:"https://miro.medium.com/max/800/1*utN6q3uKPz6TpmjffgW_-w.png",
    title: "My Interview preparation with JavaScript",
    description: 'You have to always be ready with JavaScript if you looking for a developer Job. Because no matter what language you like most or.......',
    link:""
  }
]
  return (
    <div className="container mb-5 mt-5" id="blogs">
      <h1 className="h1">Most Recent Blogs</h1>
      <hr/>
      <div className="d-flex flex-wrap justify-content-center">
        {
          blogContents.map(blogs => <BlogCard blogs={blogs} key={blogs.id}></BlogCard>)
        }
      </div>
    </div>
  );
};

export default Blogs;