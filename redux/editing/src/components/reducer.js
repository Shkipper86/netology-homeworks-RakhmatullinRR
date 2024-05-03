import * as actions from './actionTypes'

const initialState = {
    inputs: {
        title: 'test',
        price: 9
    },
    list: [],
    edit: false,
    elementId: -1
}

export default function reducer (state = initialState, action) {
    switch (action.type) {
      case actions.CHANGE_TITLE:
        return {
          ...state,
          inputs: { ...state.inputs, title: action.payload },
        };
      case actions.CHANGE_PRICE:
        let newPrice = Number(action.payload);
        action.payload == "" && (newPrice = 0);
        return {
          ...state,
          inputs: { ...state.inputs, price: newPrice },
        };
      case actions.ITEM_ADD:
        const listArr = state.list;
        listArr.push({
          title: state.inputs.title,
          price: state.inputs.price,
          id: state.list.length,
        });
        return {
          ...state,
          inputs: { title: "", price: 0 },
          list: listArr,
          edit: false,
        };
      case actions.ITEM_EDIT:
          const index = state.list.findIndex((item) => item.id == action.payload);
          const inputs = {
              title: state.list[index].title,
              price: state.list[index].price,
            }
        return {
            ...state,
            edit: true,
            inputs: inputs,
            elementId: action.payload
          };
      case actions.ITEM_SAVE:
        state.list[state.elementId].title = state.inputs.title
        state.list[state.elementId].price = state.inputs.price
        return {
            ...state,
            list: state.list,
            edit: false,
            elementId: -1
        }
      case actions.CANCEL:
        return {
            ...state,
            edit: false,
            inputs: {title: '', price: 0}
        }
      case actions.ITEM_DELETE:
        const deletedIndex = state.list.findIndex((item) => item.id == action.payload);
        state.list.splice(deletedIndex, 1)
        return {
            ...state,
            edit: false,
            elementId: -1,
            list: state.list,
            inputs: {title: '', price: 0}
        }
      default:
        return state;
    }
}