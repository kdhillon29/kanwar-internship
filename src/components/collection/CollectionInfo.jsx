/* eslint react/prop-types: 0 */
import Skeleton from "../ui/Skeleton";
export default function CollectionInfo({ collection }) {
  return collection ? (
    <section id="collection-info">
      <div className="row">
        <div className="collection-info__wrapper">
          <p className="collection-info__description">
            {collection?.description}
          </p>
          <div className="collection-info__details">
            <span className="collection-info__detail">
              Items
              <span className="collection-info__detail__data">
                {" "}
                {collection?.items?.length}
              </span>
            </span>
            ·
            <span className="collection-info__detail">
              Created{" "}
              <span className="collection-info__detail__data">
                {collection?.createdDate}
              </span>
            </span>
            ·
            <span className="collection-info__detail">
              Creator earnings
              <span className="collection-info__detail__data">
                {" "}
                {collection?.creatorEarnings}%
              </span>
            </span>
            ·
            <span className="collection-info__detail">
              Chain{" "}
              <span className="collection-info__detail__data">
                {collection?.chain}
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <div
      style={{
        margin: "20px 10px",
        width: "60%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Skeleton width="60%" height="12px" borderRadius="10px" />
      <Skeleton width="60%" height="12px" borderRadius="10px" />
      <Skeleton width="40%" height="12px" borderRadius="10px" />
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          width: "100%",
          gap: "10px",
        }}
      >
        <Skeleton width="20%" height="20px" borderRadius="10px" />
        <Skeleton width="30%" height="20px" borderRadius="10px" />
        <Skeleton width="30%" height="20px" borderRadius="10px" />
        <Skeleton width="30%" height="20px" borderRadius="10px" />
      </div>
    </div>
  );
}
