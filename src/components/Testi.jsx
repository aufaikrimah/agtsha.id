const Testi = ({ testimonial }) => {
    const { uname, content, image } = testimonial;

    return (
        <>
            <div className="p-4 rounded-md shadow-md shadow-rose-200 mb-4 flex">
                <img src={image} alt={uname} className="w-6 h-6 rounded-full mr-2" />
                <div>
                    <p className="text-sm font-bold mb-1">{uname}</p>
                    <p className="text-xs">{content}</p>
                </div>
            </div>
        </>
    );
}

export default Testi;