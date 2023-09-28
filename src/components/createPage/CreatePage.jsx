import BlogPosts from "../homePage/components/blogPosts";
import CreatePost from "./components/CreatePost";

const CreatePage = () => {
    return(
        <div>
            <CreatePost />
            <BlogPosts />

        </div>
    )
}

export default CreatePage;