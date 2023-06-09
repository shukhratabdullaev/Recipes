import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

// api
export const recipesAPI = {
  getRecipes() {
    // return instance.get<RecipeType[]>('albums/1/photos').then(response => response.data);
    return Promise.resolve<RecipeType[]>([
      {
        id: 1,
        title: 'Курица под соусом',
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU1gDEnB2pAQag05MD1M3dTGJgZXA-7sXWBQ&usqp=CAU',
        description: 'Курица терияки — популярное блюдо азиатской кухни, приготовленное с использованием пикантного сладко-соленого соуса. Благодаря удачной заправке филе птицы получается очень нежным, с оригинальным и весьма интересным вкусом, в котором присутствует и умеренная сладость, и слегка уловимая острота',
      },
      {
        id: 2,
        title: 'Hot-dog',
        url: 'https://www.cnet.com/a/img/resize/69256d2623afcbaa911f08edc45fb2d3f6a8e172/hub/2023/02/03/afedd3ee-671d-4189-bf39-4f312248fb27/gettyimages-1042132904.jpg?auto=webp&fit=crop&height=675&width=1200',
        description: 'A hot dog (commonly spelled hotdog) is a food consisting of a grilled or steamed sausage served in the slit of a partially sliced bun. The term hot dog can refer to the sausage itself. The sausage used is a wiener (Vienna sausage) or a frankfurter (Frankfurter Würstchen, also just called frank).',
      },
      {
        id: 3,
        title: 'Steak',
        url: 'https://hips.hearstapps.com/hmg-prod/images/table-filled-with-large-variety-of-food-shot-from-royalty-free-image-1659038707.jpg?crop=1xw:0.84335xh;center,top&resize=1200:*',
        description: 'A steak is a thick cut of meat generally sliced across the muscle fibers, sometimes including a bone. It is normally grilled or fried. Steak can be diced, cooked in sauce, such as in steak and kidney pie, or minced and formed into patties, such as hamburgers.',

      },
      {
        id: 4,
        title: 'Tuna Steak',
        url: 'https://media.istockphoto.com/id/1191080960/photo/traditional-turkish-breakfast-and-people-taking-various-food-wide-composition.jpg?s=170667a&w=is&k=20&c=iRSSaLoEGn9dpmTArnIF0hkmMyqNGvPOfsKLIXgly3Q=',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla elementum quam vel dapibus tristique. Nunc ac sapien in odio tincidunt dapibus vel sit amet urna. In non rhoncus lacus, sed pretium urna. Curabitur eros metus, ultrices in lacinia ut, semper at sem. Vestibulum ultrices sem ligula, vitae efficitur orci fermentum a. In molestie',
      },
      {
        id: 5,
        title: 'Salad',
        url: 'https://hips.hearstapps.com/hmg-prod/images/grilled-chicken-breast-lunch-bowl-with-fresh-tomato-royalty-free-image-1684934244.jpg',
        description: 'A salad is a dish consisting of mixed, mostly natural ingredients. They are typically served chilled or at room temperature, though some can be served warm. Condiments and salad dressings, which exist in a variety of flavors, are often used to enhance a salad.',
      },

    ])
      ;
  },
  deleteRecipe(id: number) {
    // return instance.delete<ResponseType>(`albums/1/photos/${id}`);
    return Promise.resolve({});
  },
  createRecipe(title: string, url: string, description: string) {
    // return instance.post('albums/1/photos', { title });
    return Promise.resolve({
      id: Math.random() * 10,
      title,
      url,
      description,
    });
  },
  updateRecipe(id: number, title: string, url: string, description: string) {
    // return instance.put<ResponseType, AxiosResponse<ResponseType>, { title: string }>(`albums/1/photos/${id}`, { title });
    return Promise.resolve({
      id,
      title,
      url,
      description,
    });
  },
};

// types
export type RecipeType = {
  'id': number
  'url': string
  'title': string
  description: string
}

