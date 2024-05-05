import { useDispatch, useSelector } from "react-redux"
import { filterItems } from "./actions"


export const Filter = () => {
const dispatch = useDispatch()
const { filter } = useSelector(state => state.filter)

  return (
    <div>
      Фильтр:{" "}
      <input
        type="text"
        placeholder="Введите значение фильтра"
        style={{ width: "250px", marginBottom: '16px' }}
        value={filter}
        onChange={(e) => dispatch(filterItems(e.target.value))}
      />
    </div>
  );
}
