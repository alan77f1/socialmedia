import React from 'react';
import CreateStory from '../story/CreateStory';

import { Route, Switch, useRouteMatch } from 'react-router-dom';
import StoryDetail from './StoryDetail';
Story.propTypes = {};

function Story(props) {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.url}/create`} component={CreateStory}></Route>
      <Route path={`${match.url}/:storyId`} component={StoryDetail}></Route>
    </Switch>
  );
}

export default Story;
