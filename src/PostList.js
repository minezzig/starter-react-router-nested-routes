import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

function PostList() {
  // use useRouteMatch hook to get the path, save it as path
  // path = /users/:userId/posts
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <p>Here are a list of the user’s posts</p>
      </Route>
      <Route path={`${path}/:postId`}>
        <p>Here is a single post</p>
      </Route>
    </Switch>
  );
}

export default PostList;
