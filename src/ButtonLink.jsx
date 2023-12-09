function ButtonLink(props) {
    const { name, img, url } = props.buttonLink;

    return (
        <button className="m-2 px-4 py-2 border-2 border-zinc-900 sm:w-full w-24">{name}</button>

    );
}

export default ButtonLink;