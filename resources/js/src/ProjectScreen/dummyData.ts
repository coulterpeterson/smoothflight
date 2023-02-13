const dummyData = {
    tasks: {
        'task-1' : { 
            id: 'task-1', 
            content: 'Create UX design',
            dueDate: 'Jan 7, 2022',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna sem, aliquam vitae enim viverra, laoreet tempus odio. Ut auctor semper orci quis ullamcorper. Vivamus facilisis sem ac lectus condimentum ullamcorper nec ut mi. Sed semper enim id nisi commodo lacinia. Donec euismod ipsum sed tincidunt viverra.',
            checklist: [
                {
                    description: 'Task 1',
                    checked: true
                },
                {
                    description: 'Task 2',
                    checked: false
                },
            ],
            linkedFiles: [
                {
                    fileName: 'File_1.pdf',
                    fileUrl: '#',
                    description: 'the project summary',
                },
                {
                    fileName: 'File_2.pdf',
                    fileUrl: '#',
                    description: 'a collection of stock photos',
                },
            ],
            assignedUserIds: [1, 2, 3],
        },
        'task-2' : { 
            id: 'task-2', 
            content: 'Peform user testing',
            dueDate: 'Feb 2, 2022',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna sem, aliquam vitae enim viverra, laoreet tempus odio. Ut auctor semper orci quis ullamcorper. Vivamus facilisis sem ac lectus condimentum ullamcorper nec ut mi. Sed semper enim id nisi commodo lacinia. Donec euismod ipsum sed tincidunt viverra.',
            checklist: [
                {
                    description: 'Task 1',
                    checked: true
                },
                {
                    description: 'Task 2',
                    checked: false
                },
            ],
            linkedFiles: [
                {
                    fileName: 'File_1.pdf',
                    fileUrl: '#',
                    description: 'the project summary',
                },
                {
                    fileName: 'File_2.pdf',
                    fileUrl: '#',
                    description: 'a collection of stock photos',
                },
            ],
            assignedUserIds: [1, 2, 3], 
        },
        'task-3' : { 
            id: 'task-3', 
            content: 'Create Figma mockup',
            dueDate: 'Feb 31, 2022',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna sem, aliquam vitae enim viverra, laoreet tempus odio. Ut auctor semper orci quis ullamcorper. Vivamus facilisis sem ac lectus condimentum ullamcorper nec ut mi. Sed semper enim id nisi commodo lacinia. Donec euismod ipsum sed tincidunt viverra.',
            checklist: [
                {
                    description: 'Task 1',
                    checked: true
                },
                {
                    description: 'Task 2',
                    checked: false
                },
            ],
            linkedFiles: [
                {
                    fileName: 'File_1.pdf',
                    fileUrl: '#',
                    description: 'the project summary',
                },
                {
                    fileName: 'File_2.pdf',
                    fileUrl: '#',
                    description: 'a collection of stock photos',
                },
            ],
            assignedUserIds: [1, 2, 3], 
        },
        'task-4' : { 
            id: 'task-4', 
            content: 'Code the MVP',
            dueDate: 'Mar 6, 2022',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna sem, aliquam vitae enim viverra, laoreet tempus odio. Ut auctor semper orci quis ullamcorper. Vivamus facilisis sem ac lectus condimentum ullamcorper nec ut mi. Sed semper enim id nisi commodo lacinia. Donec euismod ipsum sed tincidunt viverra.',
            checklist: [
                {
                    description: 'Task 1',
                    checked: true
                },
                {
                    description: 'Task 2',
                    checked: false
                },
            ],
            linkedFiles: [
                {
                    fileName: 'File_1.pdf',
                    fileUrl: '#',
                    description: 'the project summary',
                },
                {
                    fileName: 'File_2.pdf',
                    fileUrl: '#',
                    description: 'a collection of stock photos',
                },
            ],
            assignedUserIds: [1, 2, 3], 
        },
        'task-5' : { 
            id: 'task-5', 
            content: 'Market MVP with promo',
            dueDate: 'Mar 17, 2022',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna sem, aliquam vitae enim viverra, laoreet tempus odio. Ut auctor semper orci quis ullamcorper. Vivamus facilisis sem ac lectus condimentum ullamcorper nec ut mi. Sed semper enim id nisi commodo lacinia. Donec euismod ipsum sed tincidunt viverra.',
            checklist: [
                {
                    description: 'Task 1',
                    checked: true
                },
                {
                    description: 'Task 2',
                    checked: false
                },
            ],
            linkedFiles: [
                {
                    fileName: 'File_1.pdf',
                    fileUrl: '#',
                    description: 'the project summary',
                },
                {
                    fileName: 'File_2.pdf',
                    fileUrl: '#',
                    description: 'a collection of stock photos',
                },
            ],
            assignedUserIds: [1, 2, 3], 
        },
        'task-6' : { 
            id: 'task-6', 
            content: 'Implement user feedback in sprints',
            dueDate: 'Apr 2, 2022',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus magna sem, aliquam vitae enim viverra, laoreet tempus odio. Ut auctor semper orci quis ullamcorper. Vivamus facilisis sem ac lectus condimentum ullamcorper nec ut mi. Sed semper enim id nisi commodo lacinia. Donec euismod ipsum sed tincidunt viverra.',
            checklist: [
                {
                    description: 'Task 1',
                    checked: true
                },
                {
                    description: 'Task 2',
                    checked: false
                },
            ],
            linkedFiles: [
                {
                    fileName: 'File_1.pdf',
                    fileUrl: '#',
                    description: 'the project summary',
                },
                {
                    fileName: 'File_2.pdf',
                    fileUrl: '#',
                    description: 'a collection of stock photos',
                },
            ],
            assignedUserIds: [1, 2, 3],
        },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Todo',
            taskIds: ['task-4', 'task-5', 'task-6'],
        },
        'column-2': {
            id: 'column-2',
            title: 'In Progress',
            taskIds: ['task-3'],
        },
        'column-3': {
            id: 'column-3',
            title: 'Completed – Success',
            taskIds: ['task-1', 'task-2'],
        },
        'column-4': {
            id: 'column-4',
            title: 'Completed – Pivot',
            taskIds: [],
        },
    },
    // For column orders
    columnOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
};

export default dummyData;