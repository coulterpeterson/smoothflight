export interface IColumn {
        id: string;
        title: string;
        taskIds: string[];
}
export interface ITask {
    id: string;
    content: string;
    dueDate: string;
}

export interface IColumnsData {
    tasks: {
        [key: string]: ITask,
      };
    columns: {
        [key: string]: IColumn
    };
    columnOrder: string[];
}

export interface IMessage {
    index?: number,
    fromThisUser: boolean,
    content: string,
    timestamp: string,
}
