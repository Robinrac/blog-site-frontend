import BlogPosts from "./components/blogPosts";
import HomeHero from "./components/HomeHero";
import NavBar from "./components/HomeNavBar";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <HomeHero />
      <BlogPosts />
    </div>
  );
};

export default HomePage;
