import { createContext, useEffect, useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import Login from "./Login";

export const dataContext = createContext();
function Home() {

    const navigate = useNavigate();
    const [posts, setPosts] = useState(null);
    const dataas = "check useContext"
    useEffect(() => {

        const controller = new AbortController();
        const signal = controller.signal;
        //a callback delay added for delaying the fetch
        fetch('/posts.mockdata.json', { signal }).
            then(response => {
                return response.json()
            }).
            then((data) => {
                console.log(data)
                setPosts(data.posts);
            }).catch(err => {
                console.log(err)
            });

        return (() => {
            console.log("component unmounted");
            controller.abort()
        })
        //clean up function
    }, []);


    return (
        <div className="container">
            <Link to="/login">Login</Link>
            <div><Link to='/counter'>Counter</Link></div>
            {/* <Login data={posts}/> prop drilling */}
            <dataContext.Provider value={dataas}>
                {/* <Login /> */}
            </dataContext.Provider>

            <div className="row justify-content-center m-3">
                {/* <img className="card-img-top" src="..." alt="Card image cap"> */}
                {posts && posts.map((post) => {
                    return (
                        <div key={post.id} className="card m-3" style={{ width: '18rem' }} onClick={()=>{navigate(`/post/${post.id}`)}}> {/*setting id as params in url*/}
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                {/* <p className="card-text">{post.content}</p> */}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};

export default Home;