import duck from '../assets/images/duck.png';
import goose from '../assets/images/goose.png';
import turkey from '../assets/images/turkey.png';
import lamb from '../assets/images/lamb.png';


export const initialState = [
    {
        id: 1,
        link:'cold',
        title:'ХОЛОДНЫЕ ЗАКУСКИ',
        products: [
            {
                id: 1,
                title: "Ягненок",
                description:'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                price: 620,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: lamb,
                    alt:'lamb'
                },
                
            },
            {
                id: 2,
                title: "Индейка",
                description:'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                price: 560,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: turkey,
                    alt:'turkey'
                } ,
                
            },
            {
                id: 3,
                title: "Гусь",
                description:'Фаршированный яблоками',
                price: 870,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: goose,
                    alt:'goose'
                } ,
                
            },
            {
                id: 4,
                title: "Утка",
                description:'Фаршированная рисом, курагой и айвой',
                price: 610,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: duck,
                    alt:'duck'
                } ,
                
            },
        ]
    },
    {
        id: 2,
        link:'hot',
        title:'ГОРЯЧИЕ ЗАКУСКИ',
        products: [
            {
                id: 1,
                title: "Ягненок",
                description:'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                price: 620,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: lamb,
                    alt:'lamb'
                } ,
                
                
            },
            {
                id: 2,
                title: "Индейка",
                description:'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                price: 560,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: turkey,
                    alt:'turkey'
                }  ,
                
            },
            {
                id: 3,
                title: "Гусь",
                description:'Фаршированный яблоками',
                price: 870,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: goose,
                    alt:'goose'
                }  ,
                
            },
            {
                id: 4,
                title: "Утка",
                description:'Фаршированная рисом, курагой и айвой',
                price: 610,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: duck,
                    alt:'duck'
                }  ,
                
            },
        ]
    },
    {
        id: 3,
        link:'meat',
        title:'МЯСНЫЕ БЛЮДА',
        products: [
            {
                id: 1,
                title: "Ягненок",
                description:'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                price: 620,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: lamb,
                    alt:'lamb'
                }  ,
                
            },
            {
                id: 2,
                title: "Индейка",
                description:'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                price: 560,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: turkey,
                    alt:'turkey'
                }  ,
                
            },
            {
                id: 3,
                title: "Гусь",
                description:'Фаршированный яблоками',
                price: 870,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: goose,
                    alt:'goose'
                }  ,
                
            },
            {
                id: 4,
                title: "Утка",
                description:'Фаршированная рисом, курагой и айвой',
                price: 610,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: duck,
                    alt:'duck'
                }  ,
                
            },
        ]
    },
    {
        id: 4,
        link:'soup',
        title:'СУПЫ',
        products: [
            {
                id: 1,
                title: "Ягненок",
                description:'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                price: 620,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: lamb,
                    alt:'lamb'
                }  ,
                
            },
            {
                id: 2,
                title: "Индейка",
                description:'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                price: 560,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: turkey,
                    alt:'turkey'
                }  ,
                
            },
            {
                id: 3,
                title: "Гусь",
                description:'Фаршированный яблоками',
                price: 870,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: goose,
                    alt:'goose'
                }  ,
                
            },
            {
                id: 4,
                title: "Утка",
                description:'Фаршированная рисом, курагой и айвой',
                price: 610,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: duck,
                    alt:'duck'
                }  ,
                
            },
        ]
    },
    {
        id: 5,
        link:'fish',
        title:'РЫБНЫЕ БЛЮДА',
        products: [
            {
                id: 1,
                title: "Ягненок",
                description:'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                price: 620,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: lamb,
                    alt:'lamb'
                }  ,
                
            },
            {
                id: 2,
                title: "Индейка",
                description:'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                price: 560,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: turkey,
                    alt:'turkey'
                }  ,
                
            },
            {
                id: 3,
                title: "Гусь",
                description:'Фаршированный яблоками',
                price: 870,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: goose,
                    alt:'goose'
                }  ,
                
            },
            {
                id: 4,
                title: "Утка",
                description:'Фаршированная рисом, курагой и айвой',
                price: 610,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: duck,
                    alt:'duck'
                }  ,
                
            },
        ]
    },
    {
        id: 6,
        link:'grill',
        title:'ГРИЛЬ МЕНЮ',
        products: [
            {
                id: 1,
                title: "Ягненок",
                description:'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                price: 620,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: lamb,
                    alt:'lamb'
                }  ,
                
            },
            {
                id: 2,
                title: "Индейка",
                description:'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                price: 560,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: turkey,
                    alt:'turkey'
                }  ,
                
            },
            {
                id: 3,
                title: "Гусь",
                description:'Фаршированный яблоками',
                price: 870,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: goose,
                    alt:'goose'
                }  ,
                
            },
            {
                id: 4,
                title: "Утка",
                description:'Фаршированная рисом, курагой и айвой',
                price: 610,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: duck,
                    alt:'duck'
                }  ,
                
            },
        ]
    },
    {
        id: 7,
        link:'specialty-dishes',
        title:'ФИРМЕННЫЕ БЛЮДА',
        products: [
            {
                id: 1,
                title: "Ягненок",
                description:'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                price: 620,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: lamb,
                    alt:'lamb'
                }  ,
                
            },
            {
                id: 2,
                title: "Индейка",
                description:'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                price: 560,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: turkey,
                    alt:'turkey'
                }  ,
                
            },
            {
                id: 3,
                title: "Гусь",
                description:'Фаршированный яблоками',
                price: 870,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: goose,
                    alt:'goose'
                }  ,
                
            },
            {
                id: 4,
                title: "Утка",
                description:'Фаршированная рисом, курагой и айвой',
                price: 610,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: duck,
                    alt:'duck'
                }  ,
                
            },
        ]
    },
    {
        id: 8,
        link:'drinks',
        title:'НАПИТКИ',
        products: [
            {
                id: 1,
                title: "Ягненок",
                description:'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                price: 620,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: lamb,
                    alt:'lamb'
                }  ,
                
            },
            {
                id: 2,
                title: "Индейка",
                description:'Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком',
                price: 560,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: turkey,
                    alt:'turkey'
                }  ,
                
            },
            {
                id: 3,
                title: "Гусь",
                description:'Фаршированный яблоками',
                price: 870,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: goose,
                    alt:'goose'
                }  ,
                
            },
            {
                id: 4,
                title: "Утка",
                description:'Фаршированная рисом, курагой и айвой',
                price: 610,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: duck,
                    alt:'duck'
                }  ,
                
            },
        ]
    },
]
