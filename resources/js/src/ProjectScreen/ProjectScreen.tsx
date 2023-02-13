import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../shared/Header';
import TasksPane from './TasksPane';
import RightPane from './RightPane';
import BottomBar from './BottomBar';

const ProjectScreen: React.FC = () => {
    const belowHeaderStyle = {height: 'calc(100% - 72px)'};

    return <div className="ProjectScreen__container h-full">
        <Header />
        {/*<Link to="/account">Account</Link>
        <Link to="/settings">Settings</Link>*/}

        <div className="flex flex-col" style={belowHeaderStyle}>
            <div className="flex h-full">
                <TasksPane />
                <RightPane />
            </div>
            <BottomBar />
        </div>

    </div>
}

export default ProjectScreen;
