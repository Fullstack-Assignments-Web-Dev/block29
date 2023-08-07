import React, { useRef, useState } from "react";

export default function Create() {
  const baseURL = "https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-ET-WEB-PT-D/players/";

  const post_name = useRef('');
  const post_breed = useRef('');
  const post_imageUrl = useRef(null);

//   const [postResult, setPostResult] = useState(null);

  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  }
  
  async function postData() {
    const postData = {
      name: post_name.current.value,
      breed: post_breed.current.value,
      imageUrl: post_imageUrl.current.value,
    };

    try {
      const res = await fetch(`${baseURL}`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": "token-value",
        },
        body: JSON.stringify(postData),
        
      });
      window.location.reload();
      if (!res.ok) {
        const message = `An error has occured: ${res.status} - ${res.statusText}`;
        throw new Error(message);
      }

      const data = await res.json();

      const result = {
        status: res.status + "-" + res.statusText,
        headers: {
          "Content-Type": res.headers.get("Content-Type"),
          "Content-Length": res.headers.get("Content-Length"),
        },
        data: data,
      };

      setPostResult(fortmatResponse(result));
    } catch (err) {
      setPostResult(err.message);
    }
  }
  
  const clearPostOutput = () => {
    setPostResult(null);
  }
  
  return (
    <div className="card">
      <div className="card-header">Add New Player</div>
      <div className="card-body">
        <div className="form-group">
          <input type="text" className="form-control" ref={post_name} placeholder="Name" />
        </div>
        <div className="form-group">
          <input type="text" className="form-control" ref={post_breed} placeholder="Breed" />
        </div>

        <div className="form-group">
          <input type="text" className="form-control" ref={post_imageUrl} placeholder="ImageURL" />
        </div>
<br />
        <button className="btn btn-sm btn-primary" onClick={postData}>Submit</button>
        <button className="btn btn-sm btn-warning ml-2" onClick={clearPostOutput}>Clear</button>

      
      </div>
    </div>
  );
}

