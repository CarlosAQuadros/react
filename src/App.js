
import React from 'react';
import './App.css';
import Button from './components/Button';
import { PostCard } from './components/PostCard';
import TextInput from './components/TextInput';
import { loadPosts } from './utils/load-posts';

class App extends React.Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPage: 99,
    count: 0
  }
  async componentDidMount() {
    await this.loadPosts()
  }


  loadPosts = async () => {
    const { page, postsPerPage } = this.state

    const postsAndPhotos = await loadPosts()

    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos
    })

  }
  handleLoadMorePosts = () => {

    const { page, postsPerPage, allPosts, posts } = this.state;

    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)

    posts.push(...nextPosts)

    this.setState({ posts, page: nextPage })

    console.log('load more posts');
  }
  handleChange = (e) => {
    const { value } = e.target
    this.setState({ searchValue: value })
  }

  render() {

    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;

    const filteredPosts = !!searchValue ?
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase())
      })
      : posts

    return (
      <div className='container'>
        <TextInput
          handleChange={this.handleChange}
          searchValue={searchValue}
        />
        <div className="posts">
          {
            filteredPosts.map(post => (
              <PostCard
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                cover={post.cover}

              />
            ))
          }
        </div>
        <div className='buttonContainer'>
          {!searchValue && (
            <Button
              disabled={page + postsPerPage >= allPosts.lenght}
              text={'load more posts'}
              onClick={this.handleLoadMorePosts}
            ></Button>

          )}
        </div>
      </div>
    )
  };
}

export default App;
