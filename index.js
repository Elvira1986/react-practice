// Computed Prop Names
computedPropName('city', 'Spokane');
const firstNameKey = 'firstname';

const user = {
  id: 1,
  userName: 'FatJoe',
  [firstNameKey]: 'Christine',
};

console.log(user);
console.log(user[firstNameKey]);

// Computed Prop Names in a func
function computedPropName(key, value) {
  return {
    [key]: value,
  };
}

const computedPropName2 = (key, value) => {
  return {
    [key]: value,
  };
};

const personList = [
  'Naasir',
  'Curtis',
  'Justus',
  'Martin',
  'Adam',
  'Lehui',
  'Sarah',
  'Nick',
];

// Creating an Objext from Array
//Map
//ForEach
//For
//reduce

const personObject = {};
personList.forEach((item, index) => {
  // personObject[index] = item;

  personObject['name'] = item;
});

console.log(personObject);

// Spread Operator
// const questUsers = ['Nassir', 'Ana', 'Lebron'];
// const adminUsers = ['Minae', 'Irene', 'Kobe'];

// const allUsers = [...guestUsers, ...adminUsers];
// console.log(allUsers);

const user1 = {
  id: 1,
  userName: 'kobe',
  role: 'admin',
};

const user2 = {
  id: 2,
  userName: 'durant',
  role: 'trader',
};

const eBooks = {
  eBooks: [
    {
      language: 'Pascal',
      edition: 'third',
    },
    {
      language: 'Python',
      edition: 'four',
    },
    {
      language: 'SQL',
      edition: 'second',
    },
  ],
};

// JSON - string to manipulate/parse
console.log(JSON.stringify(eBooks));

// Using Reduce
const people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 },
  { name: 'Naasir', age: 21 },
  { name: 'Zuzu', age: 20 },
  { name: 'Shams', age: 20 },
  { name: 'Alice', age: 21 },
  { name: 'Ray', age: 20 },
  { name: 'Umar', age: 20 },
];

function groupBy(objectArray, property) {
  console.log(objectArray);
  console.log(property);
  return objectArray.reduce(function (acc, obj) {
    let key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}
let groupedPeople = groupBy(people, 'age');
console.log(groupedPeople);

const initialState = {
  coins: 0,
  health: 100,
};

const actionsArray = [
  {
    type: 'ADD_COINS',
    payload: 20,
  },
  {
    type: 'SUBSTRUCT_HEALTH',
    PAYLOAD: 5,
  },
];

const marioReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_COUNS':
      return {
        ...state,
        coins: state.coins + action.payload,
      };
    case 'SUBSTRUCT_COINS':
      return {
        ...state,
        coins: state.coins - action.payload,
      };
    case 'ADD_HEALTH':
      return {
        ...state,
        health: state.health + action.payload,
      };
    case 'SUBSTRUCT_HEALTH':
      return {
        ...state,
        health: state.health - action.payload,
      };
    default:
      return state;
  }
};

const currentState = actionsArray.reduce(marioReducer, initialState);
console.log(actionsArray);
