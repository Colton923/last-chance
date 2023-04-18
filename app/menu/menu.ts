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
          name: 'Sunrise',
          description:
            'Two eggs, choice of bacon or sausage patties or links, and toast. Substitute Ham or Corned Beef Hash +$1. Add your choice of Potatoes +$2',
          price: '$7',
        },
        {
          id: '2',
          name: 'Farmers Country Fried Steak',
          description:
            'with sausage gravy, your choice of potatoes, two eggs and toast',
          price: '$12',
        },
        {
          id: '3',
          name: 'Breakfast Burrito',
          description:
            '2 burritos with your choice of bacon, sausage or ham, scrambled eggs, and cheese. Served with your choice of potatoes (does not include toast)',
          price: '$10',
        },
        {
          id: '4',
          name: '3 Meat Burrito',
          description:
            '2 burritos with bacon, sausage, ham, scrambled eggs, and cheddar cheese',
          price: '$11',
        },
        {
          id: '5',
          name: 'Danny Burrito',
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
          name: 'Lumber jack',
          description:
            '2 Pancakes, two eggs, choice of potatoes, and choice of bacon or sausage patties or links',
          price: '$13',
        },
        {
          id: '7',
          name: 'Pancakes',
          description:
            'Single (1) $4 • Short Stack (2) $6 • Full Stack (3) $8. Big fluffy pancakes topped with powdered sugar and served with butter and syrup.',
          price: '',
        },
        {
          id: '8',
          name: 'Deluxe Pancakes',
          description:
            'Single (1) $5 • Short Stack (2) $7 • Full Stack (3) $9. Your choice of Blueberry, Strawberry, Chocolate Chip, or Cinnamon and Sugar. Topped with powdered sugar and served with butter and syrup. Single',
          price: '',
        },
        {
          id: '9',
          name: 'Silver Dollar',
          description:
            'Full $7 • Half $5. 8 delicious little wannabes of the big guys!',
          price: '',
        },
        {
          id: '10',
          name: 'The Six Wheeler',
          description:
            'French Toast, two eggs, choice of potatoes, and choice of bacon or sausage patties or links',
          price: '$12',
        },
        {
          id: '11',
          name: 'French Toast',
          description:
            'Single Slice $3 • Two Slices $6 • Four Slices $9. Thick wedges of Texas Toast topped with powdered sugar. add strawberry topping for $2',
          price: '$9',
        },
        {
          id: '12',
          name: 'Fried Biscuits',
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
          name: 'Veggie',
          description: 'Tomato, Green Pepper, Mushrooms, Onion and Shredded Cheese',
          price: '$10',
        },
        {
          id: '14',
          name: 'Potter',
          description: 'Ham, Green Pepper, Onion and Cheddar Cheese Sauce',
          price: '$11',
        },
        {
          id: '14',
          name: 'Country',
          description: 'Sausage, Green Pepper, Onion and homemade sausage gravy',
          price: '$11',
        },
        {
          id: '15',
          name: 'Mexican',
          description:
            'Our homemade chili, Shredded Cheddar and Green Onion \r\n *Sour cream and salsa available upon request',
          price: '$11',
        },
        {
          id: '16',
          name: 'Meat Lovers',
          description:
            'Sausage, Ham, Bacon and Shredded Cheddar \r\n Add gravy $1.50',
          price: '$12',
        },
      ],
    },
    {
      breakfastSandwiches: [
        {
          id: '17',
          name: 'Egg And Cheese',
          description: '',
          price: '$5',
        },
        {
          id: '18',
          name: 'Bacon Sausage or Ham Egg Cheese',
          description: '',
          price: '$7',
        },
      ],
    },
    {
      threeEggOmelets: [
        {
          id: '19',
          name: 'Meat And Cheese',
          description: '',
          price: '$',
        },
        {
          id: '20',
          name: 'Danny',
          description:
            'Ham, Sausage, Bacon, Tomatoes, Mushrooms, Green Peppers, Onion and American Cheese',
          price: '$10',
        },
        {
          id: '21',
          name: 'Denver',
          description: 'Ham, Mushrooms, Green Peppers, Onions and American Cheese',
          price: '$9',
        },
        {
          id: '22',
          name: 'Chili',
          description: 'Our homemade chili and American Cheese',
          price: '$9',
        },
        {
          id: '23',
          name: 'Veggie',
          description:
            'Tomato, Green Peppers, Mushrooms, Onions and American Cheese',
          price: '$8',
        },
      ],
    },
    {
      breakfastSides: [
        {
          id: '24',
          name: 'Biscuits and Gravy',
          description: '*1/2 order $4',
          price: '$7',
        },
        {
          id: '25',
          name: 'Bacon',
          description: '',
          price: '$4',
        },
        {
          id: '26',
          name: 'Sausage Links or Patties',
          description: '',
          price: '$4',
        },
        {
          id: '27',
          name: 'Ham',
          description: '',
          price: '$5',
        },
        {
          id: '28',
          name: 'Corned Beef Hash',
          description: '',
          price: '$5',
        },
        {
          id: '29',
          name: 'Hash Browns',
          description: '',
          price: '$4',
        },
        {
          id: '30',
          name: 'American Fries',
          description: '',
          price: '$4',
        },
        {
          id: '31',
          name: 'Loaded Hash Browns',
          description: 'Cheese, green peppers, and onion',
          price: '$6',
        },
        {
          id: '32',
          name: 'Single Egg',
          description: '',
          price: '$2',
        },
        {
          id: '33',
          name: 'Toast, Muffin or Biscuit',
          description: '',
          price: '$2',
        },
        {
          id: '34',
          name: 'Cup of Gravy',
          description: '',
          price: '$2',
        },
        {
          id: '35',
          name: 'Oatmeal',
          description: 'add raisins or blueberries $1',
          price: '$4',
        },
      ],
    },
    {
      kidsMenu: [
        {
          id: '36',
          name: 'Silver Combo',
          description: '2 silver dollars, 1 egg, 1 bacon or sausage',
          price: '$5',
        },
        {
          id: '37',
          name: 'Kids Pancake',
          description: '1 Mickey Mouse pancake',
          price: '$5',
        },
        {
          id: '38',
          name: 'Little Start',
          description: '1 egg, choice of bacon or sausage and toast',
          price: '$5',
        },
        {
          id: '39',
          name: 'Jr French Toast',
          description: '1 piece of French toast with bacon or sausage',
          price: '$5',
        },
        {
          id: '40',
          name: 'Mac and Cheese',
          description: '',
          price: '$6',
        },
        {
          id: '41',
          name: 'Hot Dog',
          description: '',
          price: '$6',
        },
        {
          id: '42',
          name: 'Chicken Strips',
          description: '(2 strips)',
          price: '$6',
        },
        {
          id: '43',
          name: 'Sides',
          description:
            'waffle fries, steak fries, shoestring fries, cottage cheese, applesauce',
          price: '',
        },
      ],
    },
    {
      appetizers: [
        {
          id: '44',

          name: 'L.C. Onion Rings',
          description: 'Battered and fried to a delicious golden brown',
          price: '$7',
        },
        {
          id: '45',
          name: 'Pick 3 Combo',
          description:
            'Choose three of the following: Fried Cauliflower, Cheese Taters, Mushrooms, Mozzarella Sticks or Onion Rings',
          price: '$11',
        },
        {
          id: '46',
          name: 'Potato Skins',

          description: 'Deep fried, loaded with cheese, bacon, and green onions',
          price: '$10',
        },
        {
          id: '47',
          name: 'Super Nachos',
          description:
            'Golden crisp tortilla chips piled high with nacho cheese, lettuce, tomatoes, onions, black olives, jalapeños and seasoned taco meat',
          price: '$11',
        },
        {
          id: '48',
          name: 'Irish Nachos',

          description:
            'French Fries piled high with the same extras as Super Nachos',
          price: '$12',
        },
        {
          id: '49',
          name: 'Tortilla Chips and Queso',
          description: '',
          price: '$6',
        },
        {
          id: '50',
          name: 'Cheddar Cheese Cubes',
          description: '',
          price: '$7',
        },
        {
          id: '51',
          name: 'Fried Pickles',
          description: '',
          price: '$7',
        },
        {
          id: '52',
          name: 'Mozerella Sticks',
          description: 'Deep-fried battered Mozzarella Cheese',
          price: '$7',
        },
        {
          id: '53',
          name: 'Fried Cauliflower',
          description: '',
          price: '$7',
        },
        {
          id: '54',
          name: 'Cheese Taters',
          description: 'Deep fried tater tots filled with cheddar cheese',
          price: '$7',
        },
        {
          id: '55',
          name: 'Mushrooms',
          description: '',
          price: '$7',
        },
        {
          id: '56',
          name: 'Basket of Fries',
          description:
            'Choose Shoestring, Steak Cut, or Waffle | Add Cheese Cup 1.5 | Add Chili 1.5',
          price: '$5',
        },
      ],
    },
    {
      salads: [
        {
          id: '57',
          name: 'Side Salad',
          description: '',
          price: '$4',
        },
        {
          id: '58',
          name: 'Chef Salad',
          description:
            'Crisp lettuce topped with a generous portion of ham, turkey, hard-boiled egg, tomatoes, black olives, and cheddar cheese',
          price: '$10',
        },
        {
          id: '59',
          name: 'Buffalo Chicken Salad',
          description:
            'Served with your choice of grilled or crispy chicken strips dipped in buffalo sauce on a bed of crisp lettuce topped with tomatoes, onions, hard-boiled egg, black olives and cheddar cheese',
          price: '$11',
        },
        {
          id: '60',
          name: 'Chicken Fiesta Salad',
          description:
            'Served with your choice of grilled or crispy chicken strips on a bed of crisp lettuce topped with tomatoes, black olives, hard-boiled egg, and cheddar cheese',
          price: '$11',
        },
        {
          id: '61',
          name: 'Taco Salad',
          description:
            'Served with your choice of grilled or crispy chicken strips on a bed of crisp lettuce topped with tomatoes, black olives, hard-boiled egg, and cheddar cheese',
          price: '$11',
        },
      ],
    },
    {
      soupOfTheDayOrChili: [
        {
          id: '62',
          name: 'Cup',
          description: '',
          price: '$4',
        },
        {
          id: '63',
          name: 'Bowl',
          description: '',
          price: '$5',
        },
      ],
    },
    {
      wings: [
        {
          id: '64',
          name: 'Bone-In or Boneless',
          description:
            'One pound of wings deep fried and covered with your choice of sauce | Garlic Parmesan, BBQ, Spicy BBQ, Mild, Buffalo, Sweet Chili Sauce, Hot Sauce',
          price: '$10',
        },
      ],
    },
    {
      sidesAndSubstitutes: [
        {
          id: '65',
          name: 'Waffle Fries, Shoestring Fries, Chips, Fresh Cut Steak Fries, Cottage Cheese, Applesauce, Coleslaw',
          description:
            'Add Cheese Sauce $1.50 | Substitute Onion Rings or Side Salad for $2',
          price: '',
        },
      ],
    },
    {
      sandwichesAndMore: [
        {
          id: '66',
          name: 'Homemade Tenderloin',
          description: 'Half $9 | Full $14',
          price: '$14',
        },
        {
          id: '67',
          name: 'The Philly',

          description:
            'Thinly sliced chicken or beef on a French roll topped with grilled onions, peppers, and provolone cheese',
          price: '$11',
        },
        {
          id: '68',
          name: 'Horseshoe',
          description:
            'Your choice of Ham, Turkey, Tenderloin or Hamburger served on Texas Toast with steak fries and cheese sauce piled on top',
          price: '$12',
        },
        {
          id: '69',
          name: 'Tamale Pie',
          description:
            'Two tamales topped with homemade chili, green onion, shredded cheddar, and tortilla chips',
          price: '$12',
        },
        {
          id: '70',
          name: 'Filet of Fish',
          description: 'Breaded Cod deep fried golden brown',
          price: '$10',
        },
        {
          id: '71',
          name: 'Shrimp Basket',

          description: '6-butterflied shrimp served with fries and coleslaw',
          price: '$10',
        },
        {
          id: '72',
          name: 'Chicken Strips Basket',
          description: 'Served with fries and coleslaw',
          price: '$10',
        },
      ],
    },
    {
      chickenAndBurgers: [
        {
          id: '73',
          name: 'Cheeseburger',
          description: 'Add Bacon $2',
          price: '$8',
        },
        {
          id: '74',
          name: 'Patty Melt',
          description: 'Served on grilled Rye with Swiss and grilled onions',
          price: '$11',
        },
        {
          id: '75',
          name: 'Frisco Melt',
          description: 'Swiss and 1000 Island Dressing on grilled sourdough',
          price: '$11',
        },
        {
          id: '76',
          name: 'Chili Cheeseburger',
          description: 'Topped with bacon, cheese sauce, and chili',
          price: '$11',
        },
        {
          id: '77',
          name: 'Black and Blue',
          description: 'Tangy A1 sauce and Bleu Cheese crumbles',
          price: '$11',
        },
        {
          id: '78',
          name: 'Buffalo Burger/Chicken',
          description:
            'Dipped in buffalo sauce and topped with bacon, Pepper Jack and grilled jalapeños aka Danny Burger',
          price: '$11',
        },
        {
          id: '79',
          name: 'Mushroom Swiss Burger/Chicken',
          description: 'Grilled mushrooms and Swiss Cheese',
          price: '$11',
        },
        {
          id: '80',
          name: 'Western Burger/Chicken',
          description: 'Bacon, Cheddar, BBQ sauce, and onion ring',
          price: '$11',
        },
        {
          id: '81',
          name: 'Southwest Burger/Chicken',
          description:
            'Pepper Jack, onion strings, bacon, and homemade Southwest sauce',
          price: '$11',
        },
        {
          id: '82',
          name: 'Chicken Sandwich',
          description: '',
          price: '$8',
        },
        {
          id: '83',
          name: 'Chicken Bacon Swiss',
          description: 'Bacon, Swiss and Ranch dressing on Texas Toast',
          price: '$11',
        },
        {
          id: '84',
          name: 'Chicken Wrap',
          description:
            'Served as grilled or crispy with lettuce, tomato, cheese, and ranch Add your favorite wing sauce for .50',
          price: '$10',
        },
      ],
    },
    {
      beverages: [
        {
          id: '85',
          name: 'Pepsi, Diet Pepsi, 7up, Ginger Ale, Dr. Pepper, Mt. Dew',
          description: '',
          price: '$3',
        },
        {
          id: '86',
          name: 'Iced Tea (Sweet or Unsweet), Lemonade',
          description: '',
          price: '$3',
        },
        {
          id: '87',
          name: 'Milk or Chocolate Milk',
          description: 'Small $3 • Large $4',
          price: '$4',
        },
        {
          id: '88',
          name: 'Juice',
          description: 'Small $4 • Large $5',
          price: '$5',
        },
        {
          id: '89',
          name: 'Orange, Apple, Tomato, Cranberry, Pineapple, or Grapefruit',
          description: '',
          price: '',
        },
        {
          id: '90',
          name: 'Coffee, Hot Tea, or Hot Cocoa',
          description: '',
          price: '$3',
        },
      ],
    },
  ],
}

export default thisMenu
