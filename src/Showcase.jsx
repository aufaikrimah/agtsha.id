function Showcase(props) {
    const { title, photo, price } = props.products

    return (
        <div className="w-24 p-4 bg-white shadow-lg rounded-lg mx-2 my-3">
            <img src={photo} alt={title} className="w-full h-18 mb-4 rounded-md" />
            <h1 className="text-xl font-bold mb-2">{title}</h1>
            <p>{price}</p>
        </div>
    );
}

export default Showcase;