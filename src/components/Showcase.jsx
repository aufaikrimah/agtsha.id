function Showcase(props) {
    const { title, photo, price } = props.products

    return (
        <div className="w-24 sm:w-2/5 shadow-md shadow-rose-200 rounded-lg mx-2 my-3">
            <div>
                <img src={photo} alt={title} className="w-full h-auto mb-4 sm:mb-1 rounded-md" />
            </div>
            <div className="px-4 py-1 sm:px-2 mb-2">
                <h1 className="text-xl sm:text-lg font-bold mb-2">{title}</h1>
                <p>{price}</p>
            </div>
        </div>
    );
}

export default Showcase;