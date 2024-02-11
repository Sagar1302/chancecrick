import ItemList from './ItemList';
import './Content.css';
const Content = ({ items, handleCheck, handleDelete }) => {
    return (
        <main className='mainBackground'>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (
                <p>Your list is empty.</p>
            )}
        </main>
    )
}

export default Content