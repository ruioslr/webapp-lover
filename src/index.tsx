import React from 'react';
import ReactDom from 'react-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useParams,
} from 'react-router-dom';
import Home from 'pages/home';
import My from 'pages/my';
import styles from './style.less';
import 'animate.css';

import Bottom, { IProps as BottomProps } from 'components/Bottom';

const bottoms: BottomProps['items'] = [
  {
    name: 'home',
    url: '/home',
  },
  {
    name: 'list',
    url: '/list',
  },
  {
    name: 'my',
    url: '/my',
  },
];

const routeConfig: Array<{
  path: string;
  Component: React.ElementType;
}> = [
  {
    path: '/home',
    Component: Home,
  },
  {
    path: '/my',
    Component: My,
  },
];

function App() {
  return (
    <div className={styles.main}>
      <Router>
        <AnimationRoute />
        <Bottom items={bottoms} visible={true} />
      </Router>
    </div>
  );
}

function AnimationRoute() {
  const location = useLocation();

  const transitionClasses = {
    enter: 'animate__animated',
    enterActive: 'animate__bounceInRight',
    // enterDone: "animate__animated",
    // exitDone: "animate__animated",
    exit: 'animate__animated',
    exitActive: 'animate__bounceOutLeft',
  };

  return (
    <div className={styles.main}>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames={transitionClasses}
          timeout={1000}
          appear={true}
        >
          <Switch location={location}>
            {routeConfig.map(({ path, Component }, index) => {
              return (
                <Route key={path} exact={true} path={path}>
                  <Component />
                </Route>
              );
            })}
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

ReactDom.render(<App />, document.querySelector('#root'));
