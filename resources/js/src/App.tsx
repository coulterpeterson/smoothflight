import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom';
import { ArrowLeft } from 'phosphor-react';


import ProjectScreen from './ProjectScreen/ProjectScreen';
import SettingsScreen from './SettingsScreen/SettingsScreen';
import AccountScreen from './AccountScreen/AccountScreen';
import { Provider } from 'react-redux';
import store from './store/index';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/techstack">
                    <div className="w-screen h-screen flex flex-col items-center justify-center">
                        <Link to="/" className="absolute top-10 left-10"><ArrowLeft size={48} /></Link>
                        <div className="p-10 shadow-2xl text-lg w-auto border border-gray-100 flex flex-col justify-center font-mono font-bold">
                            <div className="font-extrabold text-3xl mb-6">In-Progress Tech Stack</div>
                            <ul className="list-disc pl-6">
                                <li>Laravel</li>
                                <li>React</li>
                                <li>TypeScript</li>
                                <li>Tailwind CSS</li>
                                <li>React-Beautiful-DND</li>
                                <li>Redux Toolkit</li>
                            </ul>
                        </div>
                    </div>
                </Route>
                <Route path="/account">
                    <AccountScreen />
                </Route>
                <Route path="/settings">
                    <SettingsScreen />
                </Route>
                <Route path="/:id">
                    {/* For loading a specifically requested project */}
                    <ProjectScreen/>
                </Route>
                <Route exact path="/">
                    {/* Will load last opened project by default */}
                    <ProjectScreen />
                </Route>
            </Switch> 
        </Router>
    );
};

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));