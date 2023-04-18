export type MainMenu = {
  [key: string]: MenuGroup[]
}
export type MenuGroup = {
  [key: string]: MenuItem[]
}
export type MenuItem = {
  id: string
  name: string
  description: string
  price: string
}

const thisMenu: MainMenu = {
  '2023-04-18T02:09:00': [
    {
      breakfastFavorites: [
        {
          id: '1',
          name: 'sunrise',
          description:
            'Two eggs, choice of bacon or sausage patties or links, and toast. Substitute Ham or Corned Beef Hash +$1. Add your choice of Potatoes +$2',
          price: '$7',
        },
        {
          id: '2',
          name: 'farmersCountryFriedSteak',
          description:
            'with sausage gravy, your choice of potatoes, two eggs and toast',
          price: '$12',
        },
        {
          id: '3',
          name: 'breakfastBurrito',
          description:
            '2 burritos with your choice of bacon, sausage or ham, scrambled eggs, and cheese. Served with your choice of potatoes (does not include toast)',
          price: '$10',
        },
        {
          id: '4',
          name: '3MeatBurrito',
          description:
            '2 burritos with bacon, sausage, ham, scrambled eggs, and cheddar cheese',
          price: '$11',
        },
        {
          id: '5',
          name: 'dannyBurrito',
          description:
            '2 burritos with bacon, sausage, ham, tomato, onion, green pepper, mushroom, scrambled eggs, and cheese',
          price: '$12',
        },
      ],
    },
    {
      sweetDelights: [
        {
          id: '6',
          name: 'lumberjack',
          description:
            '2 Pancakes, two eggs, choice of potatoes, and choice of bacon or sausage patties or links',
          price: '$13',
        },
        {
          id: '7',
          name: 'pancakes',
          description:
            'Single (1) $4 • Short Stack (2) $6 • Full Stack (3) $8. Big fluffy pancakes topped with powdered sugar and served with butter and syrup.',
          price: '',
        },
        {
          id: '8',
          name: 'deluxePancakes',
          description:
            'Single (1) $5 • Short Stack (2) $7 • Full Stack (3) $9. Your choice of Blueberry, Strawberry, Chocolate Chip, or Cinnamon and Sugar. Topped with powdered sugar and served with butter and syrup. Single',
          price: '',
        },
        {
          id: '9',
          name: 'silverDollar',
          description:
            'Full $7 • Half $5. 8 delicious little wannabes of the big guys!',
          price: '',
        },
        {
          id: '10',
          name: 'theSixWheeler',
          description:
            'French Toast, two eggs, choice of potatoes, and choice of bacon or sausage patties or links',
          price: '$12',
        },
        {
          id: '11',
          name: 'frenchToast',
          description:
            'Single Slice $3 • Two Slices $6 • Four Slices $9. Thick wedges of Texas Toast topped with powdered sugar. add strawberry topping for $2',
          price: '$9',
        },
        {
          id: '12',
          name: 'friedBiscuits',
          description:
            '4 biscuits deep-fried until golden brown, topped with powdered sugar and served with syrup on the side',
          price: '$5',
        },
      ],
    },
    {
      skillets: [
        {
          id: '13',
          name: 'veggie',
          description: 'Tomato, Green Pepper, Mushrooms, Onion and Shredded Cheese',
          price: '$10',
        },
        {
          id: '14',
          name: 'potter',
          description: 'Ham, Green Pepper, Onion and Cheddar Cheese Sauce',
          price: '$11',
        },
        {
          id: '14',
          name: 'country',
          description: 'Sausage, Green Pepper, Onion and homemade sausage gravy',
          price: '$11',
        },
        {
          id: '15',
          name: 'mexican',
          description: 'Our homemade chili, Shredded Cheddar and Green Onion \r\n *Sour cream and salsa available upon request',
          price: '$11'
        },
        {
          id: '16',
          name: 'meatLovers',
          description: 'Sausage, Ham, Bacon and Shredded Cheddar \r\n Add gravy $1.50',
          price: '$12',
        },
      ],
    },
    {
      breakfastSandwiches: [
        {
          id: '17',
          name: 'eggAndChees',
          description: '',
          price: '$5',
        },
        {
          id: '18',
          name: 'baconSausageOrHamEggCheese',
          description: '',
          price: '$7',
        }
      ]
    },
    {
      threeEggOmelets: [
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '20',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '21',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '22',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '23',
          name:'',
          description:'',
          price:'$',
        },
      ]
    },
    {
      breakfastSides: [
        {
          id: '24',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '25',
          name: '',
          description:'',
          price:'$',
        },{
          id: '26',
          name:'',
          description:'',
          price:'$',
        },{
          id: '19',
          name:'',
          description:'',
          price:'$',
        },{
          id: '19',
          name:'',
          description:'',
          price:'$',
        },{
          id: '19',
          name:'',
          description:'',
          price:'$',
        },{
          id: '19',
          name:'',
          description:'',
          price:'$',
        },{
          id: '19',
          name:'',
          description:'',
          price:'$',
        },{
          id: '19',
          name:'',
          description:'',
          price:'$',
        },{
          id: '19',
          name:'',
          description:'',
          price:'$',
        },{
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        }
      ]
    },
    {
      kidsMenu: [
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        }
      ]
    }
    {
      appetizers: [
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        }
      ],
    },
    {
      salads: [
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
      ],
    },
    {
      salads: [
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
      ]
    },
    {
      soupOfTheDatyOrChili: [
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
      ]
    },
    {
      wings: [
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
      ]
    },
    {
      sidesAndSubstitutes: [
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
      ]
    },
    {
      sandwichesAndMore: [
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
      ]
    },
    {
      chickenAndBurgers: [
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
      ]
    },
    {
      beverages: [
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
        {
          id: '19',
          name:'',
          description:'',
          price:'$',
        },
      ]
    }
  ],
}

export default thisMenu
