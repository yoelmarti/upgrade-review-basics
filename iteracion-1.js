// Iteración#1

const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

const arrCategories = [];
const categoriesFinal = [];

for(let movie of movies){
    arrCategories.push(movie.categories)
}

for(let cat of arrCategories){
    for(let i=0; i<cat.length; i++){
        categoriesFinal.push(cat[i])
    }
}

let result = categoriesFinal.filter((item,index)=>{
    return categoriesFinal.indexOf(item) === index;
})
console.log(result);

