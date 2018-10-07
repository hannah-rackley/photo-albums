import { HashRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import SmartHomepage from './Components/Homepage'
import SmartUserAlbumsPage from './Components/UserAlbumsPage'
import SmartAlbumPage from './Components/AlbumPage';
import SmartPhotoPage from './Components/PhotoPage';

const Router = () => {
    return (
       <HashRouter>
           <div>
               <Switch>
                   <Route exact path='/' component={SmartHomepage} />
                   <Route exact path='/user/:id' component={SmartUserAlbumsPage} />
                   <Route exact path='/album/:id' component={SmartAlbumPage} />
                   <Route exact path='/photo/:id' component={SmartPhotoPage} />
               </Switch>
           </div>
       </HashRouter>
    )
}

export default Router;