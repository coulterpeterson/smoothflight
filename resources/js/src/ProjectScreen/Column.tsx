import React, { useMemo, MouseEvent } from 'react';
import { 
    Droppable,
    Draggable,
    DroppableStateSnapshot, 
    DroppableProvided,
 } from 'react-beautiful-dnd'; 
import { useDispatch } from 'react-redux';
import { userActivityActions } from '../store';
import Task from './Task';
import { ITask, IColumn } from '../interfaces';
import { Plus, DotsThree } from "phosphor-react";

interface ColumnProps {
    index: number,
    column: IColumn,
    tasks: ITask[]
}
interface InnerListProps {
    tasks: ITask[]
}

// TODO: remedy this any
const InnerList:any = (props:InnerListProps) => {

    const listComponent = useMemo(() => {
        return props.tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} />
        ));
    }, [props.tasks]);
  
    return listComponent;
}

const Column:React.FC<ColumnProps> = (props:ColumnProps) => {

    const dispatch = useDispatch()

    // This will close the OpenTask in the right pane since it clears the activeTaskId in redux state
    const columnClickHandler = (event: MouseEvent) => {
        const targetClasses = (event.target as HTMLTextAreaElement).className;
        if( targetClasses.includes('taskList') || targetClasses.includes('column-header') )
        {
            dispatch(userActivityActions.userProjectActivity(''));
        }
    }

    return    <Draggable draggableId={props.column.id} index={props.index}>
        {(provided) => (
            <div className="column w-72 min-h-8 flex flex-col"
                {...provided.draggableProps}
                ref={provided.innerRef}
                onClick={columnClickHandler}
            >
                <div className="column-header px-4 font-bold text-lg flex content-center justify-between" {...provided.dragHandleProps}>
                    {props.column.title}
                    <div className="flex">
                        <Plus size={"1.1em"} weight="bold" className="self-center cursor-pointer mr-1" />
                        <DotsThree size={"1.1em"} weight="bold" className="self-center cursor-pointer" />
                    </div>
                </div>
                <Droppable droppableId={props.column.id} type="task">
                    {(provided:DroppableProvided, snapshot:DroppableStateSnapshot) => (
                        <div className={`taskList flex-grow px-1 py-4 rounded transition ${snapshot.isDraggingOver ? "bg-pink-lightest" : "bg-transparent"}`}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <InnerList tasks={props.tasks} />
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </div>
        )}
    </Draggable>
}

export default Column;