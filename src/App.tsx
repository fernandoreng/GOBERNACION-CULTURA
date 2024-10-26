import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import BlogPost from './components/BlogPost';
import CategoryButtons from './components/CategoryButtons';
import Footer from './components/Footer';

const blogPosts = [
  {
    id: 1,
    title: "EVENTO CULTURAL",
    excerpt: "Exploring how artificial intelligence is transforming the way we build software...",
    image: "img/Captura de pantalla 2024-10-10 141849.png",
    date: "Mar 15, 2024",
    author: "John Doe"
  },
  {
    id: 2,
    title: "EVENTO CULTURAL 2",
    excerpt: "Learn the best practices for creating web applications that can handle millions of users...",
    image: "img/Captura de pantalla 2024-10-10 141313.png",
    date: "Mar 14, 2024",
    author: "Jane Smith"
  },
  {
    id: 3,
    title: "EVENTO CULTURAL 3",
    excerpt: "Discover upcoming trends and technologies that will shape the future of web development...",
    image: "img/Captura de pantalla 2024-10-10 140709.png",
    date: "Mar 13, 2024",
    author: "Mike Johnson"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Banner />
        <CategoryButtons />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Eventos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPost key={post.id} {...post} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;