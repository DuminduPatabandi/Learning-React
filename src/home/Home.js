import { useState } from "react";
import BlogList from "../blogList/BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'lorem santhausium...', author: 'mario', id: 1},
        {title: 'Sherlok Holms ko', body: 'lorem santhausium...', author: 'Gandhi', id: 2},
        {title: 'Assassination of kings', body: 'lorem santhausium...', author: 'mario', id: 3}
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }


    return ( 
        <div className="home">
            <BlogList blogs = {blogs} title = "All Blogs!" handleDelete = { handleDelete }/>
            <BlogList blogs = {blogs.filter((blog) => blog.author === 'mario')} title = "Mario's Blogs!"/>
        </div>
     );
}
 
export default Home;