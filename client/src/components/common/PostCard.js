import React from 'react';
import CardHeader from '../layout/home/post_card/CardHeader';
import CardBody from '../layout/home/post_card/CardBody';
import CardFooter from '../layout/home/post_card/CardFooter';

import Comments from '../layout/home/comments/Comments';
import InputComment from '../layout/home/comments/InputComment';

const PostCard = ({ post, theme }) => {
  return (
    <div className="card my-3">
      <CardHeader post={post} />
      <CardBody post={post} theme={theme} />
      <CardFooter post={post} />

      <Comments post={post} />
      <InputComment post={post} />
    </div>
  );
};

export default PostCard;
