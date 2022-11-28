
import React, { useCallback } from 'react';
import './styles.css';
import { PostCard } from '../../components/PostCard';
import TextInput from '../../components/TextInput';
import { loadPosts } from '../../utils/load-posts';
import Button from '../../components/Button';
import { useState } from 'react';
import { useEffect } from 'react';
import { Posts } from '../../components/Posts';



export const Home = () => {

    const [posts, setPosts] = useState([])
    const [allPosts, setAllPosts] = useState([])
    const [page, setPage] = useState(0)
    const [postsPerPage, setPostsPerPage] = useState(10)
    //const [count, setCount] = useState()
    const [searchValue, setSearchValue] = useState()



    const filteredPosts = !!searchValue ?
        allPosts.filter(post => {
            return post.title.toLowerCase().includes(searchValue.toLowerCase())
        })
        : posts

    const handleLoadPosts = useCallback(async (page, postsPerPage) => {
        const postsAndPhotos = await loadPosts()
        setPosts(postsAndPhotos.slice(page, postsPerPage))
        setAllPosts(postsAndPhotos)

    }, [])


    useEffect(() => {

        handleLoadPosts(0, postsPerPage)
    }, [handleLoadPosts, postsPerPage])

    function handleLoadMorePosts() {
        const nextPage = page + postsPerPage;
        const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)
        posts.push(...nextPosts)
        setPosts(posts)
        setPage(nextPage)
        console.log('load more posts');
    }
    function handleChange(e) {
        console.log('handlechange')
        const { value } = e.target
        setSearchValue(value)
    }

    return (
        <div className='container'>
            <div className="searchContainer">
                <TextInput
                    handleChange={handleChange}
                    searchValue={searchValue}
                />
            </div>
            <Posts posts={filteredPosts} />

            <div className='buttonContainer'>
                {!searchValue && (
                    <Button
                        disabled={page + postsPerPage >= allPosts.lenght}
                        text={'load more posts'}
                        onClick={handleLoadMorePosts}
                    ></Button>

                )}
            </div>
        </div>
    )
};

export default Home

