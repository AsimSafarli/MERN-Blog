import React, { useState } from "react";

function Post() {
    const [postDate, setPostDate] = useState(new Date());
    const author ='Asim Safar'
  return (
    <div className="flex flex-row justify-around items-center">
        <div className="w-96">
          <img src="Assets/blog.jpg" alt="" srcset="" />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-bold">The Best React Blogs to Follow Now</h2>
          <p className="text-slate-400">Author:{author} {postDate.toLocaleDateString()}</p>
          <p>
            When you start dealing with React for the very first time, its
            <br></br>
            official Documentation will be the best option for learning and
            <br></br>
            support. Once you get into the groove, you can start drawing on a
            <br></br>
            multitude of deep-dive React blogs and resources in many different
            <br></br>
            formats.
          </p>
        </div>
     
     
      </div>
  );
}

export default Post;
