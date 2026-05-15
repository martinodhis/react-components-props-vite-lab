import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import Links from "./Link";

function App() {
  return (
    <div className="App blog-container">
      <Links />
      <section id="home">
        <Header name={blogData.name} />
      </section>
      <section id="about">
        <About image={blogData.image} about={blogData.about} />
      </section>
      <main id="articles">
        <ArticleList posts={blogData.posts} />
      </main>
    </div>
  );
}

export default App;