import React from 'react';
import './App.css';
import Headers from './Headers';
import Sidebar from './Sidebar';
import SearchPage from './SearchPage';
import RecommendViedeo from './RecommendViedeo';
import { BrowserRouter as  Router, Route, Switch} from 'react-router-dom';

function App() {
  
  
  return (
    <div className='app'>
      <Router>
      <Headers />
        <Switch>
           <Route   path='/search/:searchTerm' >
           <div className='App_page'>
            <Sidebar />
            <SearchPage />
            </div>
                 
                
  
            </Route>
          
          <Route exact path='/'>
           
               <div className='App_page'>
                 <Sidebar/>
                  <RecommendViedeo/>
                 </div>
          </Route>
        </Switch>
      </Router>
     
      
    
    </div>
  );
  
}

export default  App;
