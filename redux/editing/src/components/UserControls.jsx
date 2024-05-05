import { useDispatch, useSelector } from "react-redux"
import * as actions from "./actions";


export const UserControls = () => {

    const dispatch = useDispatch();
    const { title, price } = useSelector ((state) => state.inputs)
    const { edit } = useSelector ((state) => state.elementStatus)

    const submitHandler = (e) => {
        e.preventDefault()
    
        edit == true
        ? dispatch(actions.saveItem())
        : dispatch(actions.addItem())    
      }

  return (
    <form onSubmit={submitHandler}>
        <input
          type="text"
          name="work-title"
          value={title}
          onChange={(e) => {
            dispatch(actions.changeTitle(e.target.value));
          }}
        />
        <input
          type="number"
          name="work-price"
          value={price}
          min={0}
          onChange={(e) => {
            dispatch(actions.changePrice(e.target.value));
          }}
        />
        <button type="submit" disabled={title === ""}>
          {edit ? "Save" : "Add"}
        </button>
        {edit && (
          <button type="button" onClick={() => dispatch(actions.cancel())}>
            Cancel
          </button>
        )}
      </form>
  )
}
