import React, { useMemo } from "react";
import ChatBox from "./ChatBox";
import { FilePdf, X } from "phosphor-react";
import { useSelector, useDispatch } from "react-redux";
import { userActivityActions } from "../store";
import { IColumnsData, IMessage } from "../interfaces";

interface OpenTaskPaneProps {
    activeTaskId: string,
}
interface ChecklistProps {
    items:any
}
interface LinkedFilesListProps {
    items:any
}

// TODO: remedy this any
const Checklist:any = (props:ChecklistProps) => {

    const listComponent = useMemo(() => {
    
        return <div className="flex flex-col">
            {props.items.map((item:any, index:number) => (
                <div key={index} className="flex items-center">
                    <input type="checkbox" className="mr-2"/>
                    {item.description}
                </div>
            ))}
        </div>
    }, [props.items]);
  
    return listComponent;
}

// TODO: remedy this any
const LinkedFilesList:any = (props:LinkedFilesListProps) => {

    const listComponent = useMemo(() => {
    
        return <div className="flex flex-col">
            {props.items.map((item:any, index:number) => (
                <div key={index} className="flex items-center">
                    <a href="{item.fileUrl}" className="flex items-center">
                        <FilePdf size={18} className="mr-2" />
                        {item.fileName}
                    </a>
                    <p className="ml-1">is {item.description}</p>
                </div>
            ))}
        </div>
    }, [props.items]);
  
    return listComponent;
}


const OpenTaskPane = (props:OpenTaskPaneProps) => {

    const dispatch = useDispatch()

    const dummyData:IColumnsData = useSelector((state:any) => state.dummyData)
    const taskInfo:any = (dummyData as IColumnsData).tasks[props.activeTaskId]

    

    // This will close the OpenTask in the right pane since it clears the activeTaskId in redux state
    const closeClickHandler = () => {
            dispatch(userActivityActions.userProjectActivity(''));
    }

    const styles:any = {
        openTaskRightPane: {
            boxShadow: '-10px 35px 25px rgb(0, 0, 0, .2)'
        },
        columns: {
            gridTemplateColumns: '1fr 5fr', 
            gap: '1rem 1rem', 
            gridAutoRows: 'min-content',
        }
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

    return <div 
        className="w-full flex flex-col pt-3 border-l pt-4 px-2 h-full max-h-full z-30 bg-white text-sm overflow-y-auto"
        style={styles.openTaskRightPane}
    >
        
        <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
                <div className="bg-pink rounded w-12 h-12 mr-6"></div>
                <h2 className="font-bold text-3xl pt-2">{ taskInfo.content }</h2>
            </div>
            <X size={40} className="cursor-pointer" onClick={() => closeClickHandler()}/>
        </div>

        <div className="grid w-5/6 mb-4" style={styles.columns}>

            <p className="font-bold">Due Date</p>
            <p className="text-gray-500">{ taskInfo.dueDate }</p>

            <p className="font-bold">Description</p>
            <p className="text-gray-500">{ taskInfo.description }</p>

            <p className="font-bold">Checklist</p>
            <Checklist items={ taskInfo.checklist } />

            <p className="font-bold">Linked Files</p>
            <LinkedFilesList items={ taskInfo.linkedFiles }/>
        </div>

        <div className="">
            <ChatBox  
                taskView={true} 
                messages={dummyMessages}
                currentUserId={1}
            />
        </div>

    </div>
}

export default OpenTaskPane;