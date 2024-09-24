import React, { useState } from 'react';

const LikeButton = ({ likeCount }) => {
  const [count, setCount] = useState(likeCount);

  return (
    <button onClick={() => setCount(count + 1)}>
      Likes: {count}
    </button>
  );
};

export default LikeButton;

