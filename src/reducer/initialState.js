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
                title: "Ягненок (cold)",
                description:'помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек',
                price: 620,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: lamb,
                    alt:'lamb'
                },
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390
                }
            },
            {
                id: 2,
                title: "Индейка (cold)",
                description:'помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек',
                price: 560,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: turkey,
                    alt:'turkey'
                } ,
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390
                }
            },
            {
                id: 3,
                title: "Гусь (cold)",
                description:'Фаршированный яблоками',
                price: 870,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: goose,
                    alt:'goose'
                } ,
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390
                }
            },
            {
                id: 4,
                title: "Утка (cold)",
                description:'Фаршированная рисом, курагой и айвой',
                price: 610,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: duck,
                    alt:'duck'
                } ,
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390
                }
            },
        ]
    },
    {
        id: 2,
        link:'hot',
        title:'ГОРЯЧИЕ ЗАКУСКИ',
        products: [
            {
                id: 5,
                title: "Ягненок (hot)",
                description:'помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек',
                price: 620,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: lamb,
                    alt:'lamb'
                } ,
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390
                }
                
            },
            {
                id: 6,
                title: "Индейка (hot)",
                description:'помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек',
                price: 560,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: turkey,
                    alt:'turkey'
                }  ,
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390
                }
            },
            {
                id: 7,
                title: "Гусь (hot)",
                description:'Фаршированный яблоками',
                price: 870,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: goose,
                    alt:'goose'
                }  ,
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390
                }
            },
            {
                id: 8,
                title: "Утка (hot)",
                description:'Фаршированная рисом, курагой и айвой',
                price: 610,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: duck,
                    alt:'duck'
                }  ,
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390
                }
            },
        ]
    },
    {
        id: 3,
        link:'meat',
        title:'МЯСНЫЕ БЛЮДА',
        products: [
            {
                id: 9,
                title: "Ягненок",
                description:'помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек',
                price: 620,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: lamb,
                    alt:'lamb'
                }  ,
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390
                }
                
            },
            {
                id: 10,
                title: "Индейка",
                description:'помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек',
                price: 560,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: turkey,
                    alt:'turkey'
                }  ,
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390
                }
            },
            {
                id: 11,
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
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390
                }
                
            },
            {
                id: 12,
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
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390
                }
            },
        ]
    },
    {
        id: 4,
        link:'soup',
        title:'СУПЫ',
        products: [
            {
                id: 13,
                title: "Ягненок",
                description:'помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек',
                price: 620,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: lamb,
                    alt:'lamb'
                }  ,
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390
                }
            },
            {
                id: 14,
                title: "Индейка",
                description:'помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек',
                price: 560,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: turkey,
                    alt:'turkey'
                }  ,
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390
                }
            },
            {
                id: 15,
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
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390
                }
            },
            {
                id: 16,
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
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390
                }
            },
        ]
    },
    {
        id: 5,
        link:'fish',
        title:'РЫБНЫЕ БЛЮДА',
        products: [
            {
                id: 17,
                title: "Ягненок",
                description:'помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек',
                price: 620,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: lamb,
                    alt:'lamb'
                }  ,
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390
                }
            },
            {
                id: 18,
                title: "Индейка",
                description:'помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек',
                price: 560,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: turkey,
                    alt:'turkey'
                }  ,
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390
                }
            },
            {
                id: 19,
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
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390
                }
            },
            {
                id: 20,
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
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390
                }
            },
        ]
    },
    {
        id: 6,
        link:'grill',
        title:'ГРИЛЬ МЕНЮ',
        products: [
            {
                id: 21,
                title: "Ягненок",
                description:'помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек',
                price: 620,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: lamb,
                    alt:'lamb'
                }  ,
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390
                }
            },
            {
                id: 22,
                title: "Индейка",
                description:'помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек',
                price: 560,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: turkey,
                    alt:'turkey'
                }  ,
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390
                }
            },
            {
                id: 23,
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
                id: 24,
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
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390
                }
            },
        ]
    },
    {
        id: 7,
        link:'specialty-dishes',
        title:'ФИРМЕННЫЕ БЛЮДА',
        products: [
            {
                id: 25,
                title: "Ягненок",
                description:'помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек',
                price: 620,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: lamb,
                    alt:'lamb'
                }  ,
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390
                }
            },
            {
                id: 26,
                title: "Индейка",
                description:'помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек',
                price: 560,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: turkey,
                    alt:'turkey'
                }  ,
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390
                }
            },
            {
                id: 27,
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
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390
                }
            },
            {
                id: 28,
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
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390
                }
            },
        ]
    },
    {
        id: 8,
        link:'drinks',
        title:'НАПИТКИ',
        products: [
            {
                id: 29,
                title: "Ягненок",
                description:'помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек',
                price: 620,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: lamb,
                    alt:'lamb'
                }  ,
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390
                }
            },
            {
                id: 30,
                title: "Индейка",
                description:'помидор, сыр фета, масло подсолнечное, капуста пекинская, перец сладкий красный, огурцы, оливки без косточек',
                price: 560,
                cartPrice: 0,
                cartCount: 0,
                weight: 225,
                image: {
                    src: turkey,
                    alt:'turkey'
                }  ,
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390
                }
            },
            {
                id: 31,
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
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390
                }
            },
            {
                id: 32,
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
                addInfo : {
                    "Белки": 14.54,
                    "Жиры": 5.12,
                    "Углеводы": 22.5,
                    "Ккал": 390,
                }
            },
        ]
    },
]
