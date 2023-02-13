import React from 'react';
import { useSelector } from 'react-redux';
import ChatBox from './ChatBox';
import OpenTaskPane from './OpenTaskPane';
import { UserCircle } from 'phosphor-react';
import { IMessage, IColumnsData } from '../interfaces';

const RightPane:React.FC = () => {

    const activeTaskId:string = useSelector((state:any) => state.activeTaskId)
    const dummyData:IColumnsData = useSelector((state:any) => state.dummyData)

    const styles:any = {
        progressBar: {
            background: 'linear-gradient(90deg, #FF38B9 0%, #FF38B9 50%, #FFF 50%, #FFF 100%)'
        },
    }

    const dummyMessages:IMessage[] = [
        {
            fromThisUser: false,
            content: 'Hello Steve',
            timestamp: 'Jul 4, 1931',
        },
        {
            fromThisUser: false,
            content: 'Where are you?',
            timestamp: 'Jul 5, 1931',
        },
        {
            fromThisUser: true,
            content: 'You\'ve been asleep for a long time Cap.',
            timestamp: 'Sept 30, 2008',
        },
        {
            fromThisUser: true,
            content: 'You\'ve been asleep for a long time Cap.',
            timestamp: 'Sept 30, 2008',
        },
        {
            fromThisUser: true,
            content: 'You\'ve been asleep for a long time Cap.',
            timestamp: 'Sept 30, 2008',
        },
        {
            fromThisUser: true,
            content: 'You\'ve been asleep for a long time Cap.',
            timestamp: 'Sept 30, 2008',
        },
        {
            fromThisUser: true,
            content: 'You\'ve been asleep for a long time Cap.',
            timestamp: 'Sept 30, 2008',
        },
        {
            fromThisUser: false,
            content: 'Where are you?',
            timestamp: 'Jul 5, 1931',
        },
    ];

    if(activeTaskId == '') 
    {
        return <div className="w-1/4 flex flex-col pt-3 border-l pt-4 px-2 h-full max-h-full">
            <h2 className="font-bold text-3xl mb-4">Project Overview</h2>

            <h3 className="font-semibold text-2xl mb-4">Progress</h3>

            <div className="w-full rounded-full border-2 text-white p-2 mb-4" style={styles.progressBar}>
                50%
            </div>

            <h3 className="font-semibold text-2xl mb-4">Team</h3>

            <div className="flex justify-between content-center px-4 text-pink-light flex-grow">
                <UserCircle size={64} className="cursor-pointer"/>
                <UserCircle size={64} className="cursor-pointer"/>
                <UserCircle size={64} className="cursor-pointer"/>
                <UserCircle size={64} className="cursor-pointer"/>
            </div>

            <h3 className="font-semibold text-2xl mb-4">Big Picture Chat</h3>

            <ChatBox  
                taskView={false} 
                messages={dummyMessages}
                currentUserId={1}
            />

        </div>
    }
    else 
    {
        return <OpenTaskPane activeTaskId={activeTaskId} />
    }

    
}

export default RightPane;