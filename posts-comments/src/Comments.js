import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

const user = <FontAwesomeIcon icon={faUserCircle} size='2x'/>

export default function Comments({showComment, id, comments}){

    if(!showComment) return null

    const postComment = comments.filter(item=>item.postId===id);

    return(
        <>
        <hr/>
        {postComment.map(item=>{
            return <div className='comments' key={item.id}>
                        <h4>{user}{item.email}</h4>
                        <p>{item.body}</p>
                    </div>
        })}
        </>
    )
}
