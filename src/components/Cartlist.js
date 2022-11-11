export default function MList({cartState}) {
    const createEntry = (item) => {
        return (
            <p>{item.text} Price: {item.price} </p>
        );
    };
    const mData = cartState;
    const listM = mData.map(createEntry);

    let total = 0;

    mData.forEach(item => {
        total = +(item.price) + total
    });

    return <div>
            <list>{listM}</list>
            <p><b>Total: </b>{total}</p>
        </div>
    
};