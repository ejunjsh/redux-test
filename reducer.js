
export const reducer = (state = 0, action) => {
    console.log("previous state:",state)
  switch (action.type) {
    case 'ADD':
      return state + action.payload;
    case 'MSG':
      return action.text;
    default: 
      return state;
  }
};