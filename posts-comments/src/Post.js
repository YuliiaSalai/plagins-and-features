import React, { useEffect, useState } from 'react'
import sendRequest from './request'
import Comments from './Comments'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComments, faCommentSlash } from '@fortawesome/free-solid-svg-icons'

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';
const arrow = (direction) => <FontAwesomeIcon icon={direction} size='2x'/>

export default function Post(){

    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        sendRequest('GET', POSTS_URL).then(data=>{
            setPosts(data.map(post=>Object.assign(post,{showComment:false})));
        });
        sendRequest('GET',COMMENTS_URL).then(data=>{
            setComments(data)
        });
        console.log('request')
    },[]); 
    
    const toggleComment = id => {
        setPosts(posts.map(post=>{
            if(post.id === id){
                post.showComment = !post.showComment
            }
            return post;
        }));
    }
    
    return(
        <>
            {posts.map(i => {
                return <div className='post' key={i.id}>
                        <h2>{i.title.toUpperCase()}</h2>
                        <p>{i.body}</p>
                        <Comments showComment={i.showComment} id={i.id} comments={comments}/>
                        <button className='show-comments' onClick={()=>toggleComment(i.id)}>{!i.showComment ? 'Show comments' : 'Hide comments'}{!i.showComment ? arrow(faComments) : arrow(faCommentSlash)}</button>
            </div>
            })}
        </>
    )
}