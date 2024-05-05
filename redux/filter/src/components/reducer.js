import * as actions from './actionTypes'

const initialState = {
    inputs: {
        title: '',
        price: 0
    },
    lists: {
      list: [],
      filteredList: [],
    },
    elementStatus: {
      edit: false,
      elementId: -1,
    },    
    filter: {
      filter: ''
    }
}

export default function reducer (state = initialState, action) {
    const filterReg = new RegExp (state.filter.filter, 'gi')

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
        const listArr = state.lists.list;
        listArr.push({
          title: state.inputs.title,
          price: state.inputs.price,
          id: state.lists.list.length,
        });
        state.lists.filteredList = listArr.filter(item => filterReg.test(item.title))
        return {
          ...state,
          inputs: { title: "", price: 0 },
          lists: {
            list: listArr,
            filteredList: state.lists.filteredList,
          },
          edit: false,
        };
      case actions.ITEM_EDIT:
          const index = state.lists.list.findIndex((item) => item.id == action.payload);
          const inputs = {
              title: state.lists.list[index].title,
              price: state.lists.list[index].price,
            }
        return {
          ...state,
          elementStatus: {
            elementId: action.payload,
            edit: true,
          },
          inputs: inputs,
        };
      case actions.ITEM_SAVE:
        state.lists.list[state.elementStatus.elementId].title = state.inputs.title
        state.lists.list[state.elementStatus.elementId].price = state.inputs.price
        state.lists.filteredList = state.lists.list.filter(item => filterReg.test(item.title))
        return {
            ...state,
            lists: {
              list: state.lists.list,
              filteredList: state.lists.filteredList,
            },
            inputs: {title: '', price: 0},
            elementStatus: {
              edit: false,
              elementId: -1
            }            
        }
      case actions.CANCEL:
        return {
            ...state,
            elementStatus: {
              edit: false,
              elementId: -1
            },
            inputs: {title: '', price: 0}
        }
      case actions.ITEM_DELETE:
        const deletedIndex = state.lists.list.findIndex((item) => item.id == action.payload);
        state.lists.list.splice(deletedIndex, 1)
        state.lists.filteredList = state.lists.list.filter(item => filterReg.test(item.title))
        return {
            ...state,
            elementStatus: {
              edit: false,
              elementId: -1
            } ,
            lists: {
              list: state.lists.list,
              filteredList: state.lists.filteredList,
            },
            inputs: {title: '', price: 0}
        }
        case actions.FILTER:
          const reg = new RegExp(action.payload, 'gi')
          const newFilteredItems = state.lists.list.filter(item => reg.test(item.title))
          return {
            ...state,
            filter: { filter: action.payload},
            lists: {
              list: state.lists.list,
              filteredList: newFilteredItems
            },
          }
      default:
        return state;
    }
}