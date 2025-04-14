export default function MostViewed(props) {
    return (
        <article className="product-card">
            <div className="product-image-wrapper">
                <img src={props.image} className="product-image" alt={props.name} />
            </div>

            <div className="product-info">
                <span className="product-name">{props.name}</span>
                <span className="product-rating">
                    ⭐ {props.rating.stars} ({props.rating.count} reviews)
                </span>

                <h2 className="product-price">
                    ${(props.priceCents / 100).toFixed(2)}
                </h2>

                <p className="product-tags">
                    <strong>{props.keywords.join(", ")}</strong>
                </p>
            </div>
        </article>
    );
}