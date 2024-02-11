//import { FaTrashAlt } from 'react-icons/fa';
import './LineItem.css';
const LineItem = ({ item, handleCheck, handleDelete }) => {
    return (
        <li className="item">
            <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
            />
            <label
            >{item.item}</label>
            <button
                onClick={() => handleDelete(item.id)}
                type="button"
                >
                    Delete
                </button>
        </li>
    )
}

export default LineItem