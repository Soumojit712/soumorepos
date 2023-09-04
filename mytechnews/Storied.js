import React, { useEffect } from 'react'
import { useGlobalContext } from './context';

const Storied = () => {
 
  const utl="#";
  const { hits , isLoading , removePost } = useGlobalContext();
  if(isLoading){
    return <>
      <h1>Loading..</h1>
    </>
  }
  

  return (
     <div className='stories-div'> 
        {hits.map((curPost)=>{
          const { title , author , objectID , url , num_comments } = curPost;

          return (
                <div className="card" key={objectID}>
                  <h2>{title}</h2>
                  <p>
                    By <span> {author}</span> | <span>{num_comments}</span> comments
                  </p>
                  <div className='card-button'>
                    <a href={url} target="_blank" rel="noreferrer">Read more</a>
                    <a href={utl} onClick={(e) => { e.preventDefault(); removePost(objectID); }}>Remove</a>
                  </div>
                </div>
          );
     })}
     </div>
  );
};

export default Storied;
