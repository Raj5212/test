import React from 'react';
import HOME from './HOME';
import ABOUT from './ABOUT';
import SERVICES from './SERVICES';
import WORK from './WORK';
import BLOG from './BLOG';
import CONTACT from './CONTACT';
import { BrowserRouter as  Switch, Route, } from 'react-router-dom';




const App = () => {
  return (
    <>
    <Switch>

    <Route path = "/"  componant={HOME}/>
    <Route path = "/ABOU"  componant={ABOUT}/>
    <Route path = "/SERVICES"  componant={SERVICES}/>
    <Route path = "/WORK"  componant={WORK}/>
    <Route path = "/BLOG"  componant={BLOG}/>
    <Route path = "/CONTACT"  componant={CONTACT}/>
    
    </Switch>
  
    </>
  );
};

export default App;