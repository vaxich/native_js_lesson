let todolist_1 = 'sdgsfjzg'
let todolist_2 = 'shshg'

const todolists = [
    {
        id: todolist_1,
        title: "what to learn",
        filter: "all",
        // tasks: [
        //     {id: 3, title:"html", isDone: false  },
        //     {id: 3, title:"html", isDone: false  },
        //     {id: 3, title:"html", isDone: false  },
        // ]
    },
    {
        id: todolist_2,
        title: "what to byu",
        filter: "all",
        // tasks: [
        //     {id: 3, title:"html", isDone: false  },
        //     {id: 3, title:"html", isDone: false  },
        //     {id: 3, title:"html", isDone: false  },
        // ]
    },
]


const tasks = {
    [todolist_1]: [
        { todolistId: 1, id: 1, title: "html", isDone: false },
        { todolistId: 1, id: 2, title: "css", isDone: true },
        { todolistId: 1, id: 3, title: "react", isDone: false }
    ],
    [todolist_2]: [
        { todolistId: 2, id: 4, title: "молоко", isDone: false },
        { todolistId: 2, id: 5, title: "чахар", isDone: false },
        { todolistId: 2, id: 6, title: "чай", isDone: true }
    ]
}

const addTodolist = (title) => {
    const todolistId = crypto.randomUUID();
    const newTodo = {
        id: todolistId,
        title: title,
        filter: "all"
    }
    const nextTodolistState = [newTodo, ...todolists];
    const nextTasksState = { ...tasks, [todolistId]: [] }
}

const deleteTodolist = (todolistId) => {
    const nextTodolistState = todolists.filter(tl => tl.id !== todolistId);// фильтруем, в новый массив оставвляем то что нужно
    const copyTasksState = { ...tasks };// копируем все таски
    delete copyTasksState[todolistId];// удаляем таски нужного тудулиста
    //  в стейт copyTasksState
    const nextTasksState = copyTasksState // сеттаем оставшиеся тудулисты с оставшимися тасками
    //  в стейт nextTasksState
}


const addTasks = (todolistId, title) => {
    const newTask = {
        id: crypto.randomUUID(),
        title: title,
        isDone: false
    }

    const todoTasks = tasks[todolistId] //таски одного тудулиста
    const nextTasksState = {
        ...tasks,  //с новый стейт копируем все таски,
        [todolistId]: [...todoTasks, newTask] // а в нужный тудулист копируем все таски ЭТОГО тудулиста и добавляем новую таску
    }
    //  в стейт nextTasksState
}

const changeTaskTitle = (todolistId, taskId, newTitle) => {
    const todoTasks = tasks[todolistId].map(task => task.id === taskId ? {...task, title: newTitle} : task) // таски определённого тудулиста. пробегаемся по ним, и если ИД совпадает, то меняем титл
    const nextTasksState = { ... tasks, [todolistId]: todoTasks}// копируем все таски, а таски определённого тудулиста перезатироаем
     //  в стейт nextTasksState
}