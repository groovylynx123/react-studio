// TODO: create a component that displays a single bakery item



const BakeryItem = ({item, handleInput}) => {
    return (
        <div>
        <img className="bakery-image" src={item.image} />
        <h4>{item.name}</h4>
        <p>{item.description}</p>
        <p>{item.price}</p>
        <button onClick={() => handleInput(item)}>Add to Cart</button>
        {/* <button onClick={addItem(bakeryItem.name)}>Add to Cart</button> */}
      </div>

    )
   
};

export default BakeryItem;