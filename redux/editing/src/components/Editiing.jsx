import { useDispatch, useSelector } from "react-redux"
import * as actions from "./actions";

export const Editiing = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const submitHandler = (e) => {
    e.preventDefault()

    state.edit == true
    ? dispatch(actions.saveItem())
    : dispatch(actions.addItem())    
  }

  const workList = state.list.map((work, index) => {
    return (
      <li key={index}>
        {work.title} {work.price}
        <span>
          <button
            type="button"
            onClick={() => dispatch(actions.editItem(work.id))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => dispatch(actions.deleteItem(work.id))}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 -960 960 960"
              width="24"
            >
              <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
          </button>
        </span>
      </li>
    );
  })

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="work-title"
          value={state.inputs.title}
          onChange={(e) => {
            dispatch(actions.changeTitle(e.target.value));
          }}
        />
        <input
          type="number"
          name="work-price"
          value={state.inputs.price}
          min={0}
          onChange={(e) => {
            dispatch(actions.changePrice(e.target.value));
          }}
        />
        <button type="submit" disabled={state.inputs.title === ""}>
          {state.edit ? "Save" : "Add"}
        </button>
        {state.edit && (
          <button type="button" onClick={() => dispatch(actions.cancel())}>
            Cancel
          </button>
        )}
      </form>
      <div className="list">
        <ul>{workList}</ul>
      </div>
    </>
  );
}
