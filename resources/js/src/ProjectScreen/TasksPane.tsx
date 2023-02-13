import React, { useState, useMemo, MouseEvent } from 'react';
import { 
  DragDropContext,
  DropResult,
  Droppable 
} from 'react-beautiful-dnd';
import { useSelector, useDispatch } from 'react-redux';
import { userActivityActions } from '../store';
import Column from './Column';
import AddColumnPlaceholder from './AddColumnPlaceholder';
import { ITask, IColumn, IColumnsData } from '../interfaces';

interface InnerListProps {
  column:IColumn,
  taskMap:{ [index:string] : {content: string} },
  index:number,
}

const InnerList: React.FC<InnerListProps> = (props:InnerListProps) => {
  const listComponent = useMemo(() => {
    const { column, taskMap, index } = props;
    const tasks: ITask[] = column.taskIds.map((taskId:string) : any => (taskMap[taskId]) );
    return <Column key={column.id} column={column} tasks={tasks} index={index} />;
  }, [props.column, props.taskMap, props.index]);

  return listComponent;
}

// class InnerList extends React.PureComponent<{column:IColumn,taskMap:{ [index:string] : {content: string} },index:number}> {
  
//   render() {
//     const { column, taskMap, index } = this.props;
//     const tasks: ITask[] = column.taskIds.map((taskId:string) : any => (taskMap[taskId]) );
//     return <Column key={column.id} column={column} tasks={tasks} index={index} />;
//   }
// }

const TasksPane: React.FC = () => {

    //const [columnsData, setColumnsData] = useState<IColumnsData>(dummyData)

    const dispatch = useDispatch()
    const columnsData:IColumnsData = useSelector((state:any) => state.dummyData)
    const setColumnsData = (newColumnsData:any) => {
      dispatch(userActivityActions.dummyDataUpdate(newColumnsData));
    }

    const onDragEnd = (result:DropResult):void => {
        // Source is what column the card was pulled from, desination where dropped
        const { destination, source, draggableId, type } = result;

        if(!destination) {
          return;
        }

        if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
        ) {
          // User dropped the card back in the same place, so do nothing
          return;
        }

        if (type === 'column') {
          const newColumnOrder = Array.from(columnsData.columnOrder);
          newColumnOrder.splice(source.index, 1);
          newColumnOrder.splice(destination.index, 0, draggableId);

          const newState = {
            ...columnsData,
            columnOrder: newColumnOrder,
          };
          setColumnsData(newState);
          return;
        }

        const start = columnsData.columns[source.droppableId];
        const finish = columnsData.columns[destination.droppableId];

        if(start === finish) {
          const newTaskIds = Array.from(start.taskIds);
          newTaskIds.splice(source.index, 1); // Remove one item from that index
          newTaskIds.splice(destination.index, 0, draggableId); // Remove nothing, add draggableId
  
          const newColumn = {
            ...start,
            taskIds: newTaskIds,
          };
  
          const newState = {
            ...columnsData,
            columns: {
              ...columnsData.columns,
              [newColumn.id]: newColumn, // Will override the existing column alongside the rest of the columns
            }
          };
  
          setColumnsData(newState);
          return;
        }

        // Moving from one column to another
        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
          ...start,
          taskIds: startTaskIds,
        };

        const finishTaskIds = Array.from(finish.taskIds);
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
          ...finish,
          taskIds: finishTaskIds,
        };

        const newState = {
          ...columnsData,
          columns: {
            ...columnsData.columns,
            [newStart.id]: newStart,
            [newFinish.id]: newFinish,
          },
        };
        setColumnsData(newState);

        // Clicking but not moving a task (treated as standard click now)
        // if( arraysEqual(startTaskIds,finishTaskIds) ) {

        // }

        
        

        // We've now finished the optimistic front-end update; backend time...
        // TODO: add call to backend to persist the re-order of the card and/or column
    };

    return  <div className="tasks-pane-wrapper pt-3 flex w-3/4 overflow-x-scroll h-full">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="all-columns" direction="horizontal" type="column">
          {provided => (
            <div className='columns-wrapper flex'
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {columnsData.columnOrder.map((columnId, index) => {
                  const column = columnsData.columns[columnId];
                  return (
                    <InnerList 
                      key={column.id} 
                      column={column} 
                      taskMap={columnsData.tasks} 
                      index={index}
                    />
                  );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <AddColumnPlaceholder />
      </div>
}

export default TasksPane;