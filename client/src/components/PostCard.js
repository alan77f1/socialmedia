import React from 'react';
import CardHeader from './home/cards/CardHeader';
import CardBody from './home/cards/CardBody';
import CardFooter from './home/cards/CardFooter';

import Comments from './home/comments/Comments';
import InputComment from './home/comments/InputComment';

const PostCard = ({ post }) => {
  return (
    <div className="card my-3">
      <CardHeader post={post} />
      <CardBody post={post} />
      <CardFooter post={post} />

      <Comments post={post} />
      <InputComment post={post} />
    </div>
  );
};

export default PostCard;
