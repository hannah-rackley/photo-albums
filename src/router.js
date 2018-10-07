import { HashRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import SmartHomepage from './Components/Homepage'
import SmartUserAlbumsPage from './Components/UserAlbumsPage'

const Router = () => {
    return (
       <HashRouter>
           <div>
               <Switch>
                   <Route exact path='/home' component={SmartHomepage} />
                   <Route exact path='/user/:id' component={SmartUserAlbumsPage} />
                   <Route exact path='/album/:id' component={AlbumPage} />
                   {/* <Route exact path='/photo/:id' component={PhotoPage} /> */}
               </Switch>
           </div>
       </HashRouter>
    )
}

export default Router;