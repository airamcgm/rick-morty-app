import React from "react";
import { Switch, Route } from "react-router-dom";
import routes from "./routes";

const Pages = () => {
  return (
    <div>
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
        <Route path="*" render={() => <h1>Not Found</h1>} />
      </Switch>
    </div>
  );
};

export default Pages;