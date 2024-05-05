import * as actions from './actionTypes'

export const addItem = () => ({
    type: actions.ITEM_ADD
})

export const editItem = (id) => ({
    type: actions.ITEM_EDIT,
    payload: id
})

export const saveItem = () => ({
    type: actions.ITEM_SAVE
})

export const cancel = () => ({
    type: actions.CANCEL
})

export const deleteItem = (id) => ({
    type: actions.ITEM_DELETE,
    payload: id
})

export const changeTitle = (title) => ({
    type: actions.CHANGE_TITLE,
    payload: title
})

export const changePrice = (price) => ({
    type: actions.CHANGE_PRICE,
    payload: price
})

export const filterItems = (filterValue) => ({
    type: actions.FILTER,
    payload: filterValue
})