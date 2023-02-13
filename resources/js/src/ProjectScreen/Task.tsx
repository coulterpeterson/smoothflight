import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux'
import { userActivityActions } from '../store/index';
import { ITask } from '../interfaces';
import { UserCircle, ChatCircle } from 'phosphor-react';

interface TaskProps {
    index: number,
    task: ITask,
}


const Task:React.FC<TaskProps> = (props:TaskProps) => {

    const labelStyles:any = {
        background: 'linear-gradient(rgba(255,0,0,1) 0%, rgba(255,0,0,1) 33%, #FF38B9 33%, #FF38B9 66%, rgba(6,114,247,1) 66%, rgba(6,114,247,1) 100%)'
    };

    const dispatch = useDispatch();

    const taskClickHandler = (taskId:string) => {
        dispatch(userActivityActions.userProjectActivity(taskId));
    }

    return  <Draggable draggableId={props.task.id} index={props.index} disableInteractiveElementBlocking={true}>
        {(provided, snapshot) => (
            <div className={`sf-card rounded w-64 mx-auto mb-2 border border-gray-200 ${snapshot.isDragging ? "bg-pink text-white" : "bg-white text-black"}`}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                onClick={() => taskClickHandler(props.task.id)}
            >
                <div className="card-content p-2 flex h-32">
                    <div className="left-labels w-3 h-full rounded-full border border-white" style={labelStyles}></div>
                    <div className="right-content pl-2 flex flex-col flex-grow">
                        <div className="task-title font-semibold text-lg">{props.task.content}</div>
                        <div className={`due-date italic flex-grow ${snapshot.isDragging ? "text-white" : "text-gray-400"}`}>Due {props.task.dueDate}</div>
                        <div className={`assigned flex ${snapshot.isDragging ? "text-white" : "text-gray-500"}`}>
                            <UserCircle size={30} />
                            <UserCircle size={30} />
                            <UserCircle size={30} />
                        </div>
                    </div>
                    <div className="far-right-column flex flex-col justify-end">
                        <div className={`flex content-center justify-center ${snapshot.isDragging ? "text-white" : "text-gray-400"}`}>
                        <ChatCircle size={24}/>
                        3
                        </div>
                    </div>
                </div>
            </div>
        )}
    </Draggable>
}

export default Task;