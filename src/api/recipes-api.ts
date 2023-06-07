import axios, { AxiosResponse } from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  // withCredentials: true,
  // headers: {
  //   'API-KEY': '5fc11a34-7258-4926-8c00-91db4f940cfd',
  // },
});

// api
export const recipesAPI = {
  getRecipes() {
    // return instance.get<RecipeType[]>('albums/1/photos').then(response => response.data);
    return Promise.resolve<RecipeType[]>([
      {
        albumId: 1,
        id: 1,
        thumbnailUrl: 'https://via.placeholder.com/150/92c952',
        title: 'accusamus beatae ad facilis cum similique qui sunt',
        url: 'https://via.placeholder.com/600/92c952',
      },
      {
        albumId: 1,
        id: 2,
        thumbnailUrl: 'https://via.placeholder.com/150/92c952',
        title: 'accusamus beatae ad facilis cum similique qui sunt',
        url: 'https://via.placeholder.com/600/92c952',
      },
       {
        albumId: 1,
        id: 3,
        thumbnailUrl: 'https://via.placeholder.com/150/92c952',
        title: 'accusamus beatae ad facilis cum similique qui sunt',
        url: 'https://via.placeholder.com/600/92c952',
      },
       {
        albumId: 1,
        id: 4,
        thumbnailUrl: 'https://via.placeholder.com/150/92c952',
        title: 'accusamus beatae ad facilis cum similique qui sunt',
        url: 'https://via.placeholder.com/600/92c952',
      },
       {
        albumId: 1,
        id: 5,
        thumbnailUrl: 'https://via.placeholder.com/150/92c952',
        title: 'accusamus beatae ad facilis cum similique qui sunt',
        url: 'https://via.placeholder.com/600/92c952',
      },

    ])
      ;
  },
  deleteRecipe(id: number) {
    // return instance.delete<ResponseType>(`albums/1/photos/${id}`);
    return Promise.resolve({});
  },
  createRecipe(title: string, description: string) {
    // return instance.post('albums/1/photos', { title });
    return Promise.resolve({
        albumId: 1,
        id: Math.random() * 10,
        thumbnailUrl: description,
        title,
        url: 'https://via.placeholder.com/600/92c952',
      });
  },
  // updateTodolist(id: string, title: string) {
  //   return instance.put<ResponseType, AxiosResponse<ResponseType>, { title: string }>(`todo-lists/${id}`, { title });
  // },
  // getTasks(todolistId: string) {
  //   return instance.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks`);
  // },
  // deleteTask(todolistId: string, taskId: string) {
  //   return instance.delete<ResponseType>(`todo-lists/${todolistId}/tasks/${taskId}`);
  // },
  // createTask(todolistId: string, title: string) {
  //   return instance.post<ResponseType<{ item: TaskType }>, AxiosResponse<ResponseType<{ item: TaskType }>>, { title: string }>(`todo-lists/${todolistId}/tasks`, { title });
  // },
  // updateTask(todolistId: string, taskId: string, model: UpdateTaskModelType) {
  //   return instance.put<ResponseType<{ item: TaskType }>, AxiosResponse<ResponseType<{ item: TaskType }>>, UpdateTaskModelType>(`todo-lists/${todolistId}/tasks/${taskId}`, model);
  // },
};

// types
export type RecipeType = {
  'albumId': number
  'id': number
  'title': string
  'url': string
  'thumbnailUrl': string
}

//
// export type ResponseType<D = {}> = {
//   resultCode: number
//   messages: Array<string>
//   fieldsErrors: Array<string>
//   data: D
// }


export enum TaskStatuses {
  New = 0,
  InProgress = 1,
  Completed = 2,
  Draft = 3
}

export enum TaskPriorities {
  Low = 0,
  Middle = 1,
  Hi = 2,
  Urgently = 3,
  Later = 4
}

export type TaskType = {
  description: string
  title: string
  status: TaskStatuses
  priority: TaskPriorities
  startDate: string
  deadline: string
  id: string
  todoListId: string
  order: number
  addedDate: string
}
export type UpdateTaskModelType = {
  title: string
  description: string
  status: TaskStatuses
  priority: TaskPriorities
  startDate: string
  deadline: string
}
type GetTasksResponse = {
  error: string | null
  totalCount: number
  items: TaskType[]
}
