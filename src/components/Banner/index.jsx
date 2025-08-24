export default function Banner({ image, title }) {
    return (
        <div className="banner page">
            <div className="banner__wrap">
                <img src={image} alt="" className="banner__img" aria-hidden />
                <div className="banner__overlay" />
                {title && <h1 className="banner__title">{title}</h1>}
            </div>
        </div>
    );
}
