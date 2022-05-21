import React from "react";


export const PostCard = ({title, cover, id ,body}) => {


    return (
        <div className='post' >
            <img src={cover} alt={title} />
            <div className="post-content" >
                <h1>{title}  {id}</h1>
                <p>{body}</p>

            </div>
        </div>
    )
}