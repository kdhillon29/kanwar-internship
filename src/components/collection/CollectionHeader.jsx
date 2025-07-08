import { Link } from "react-router-dom";
import Skeleton from "../ui/Skeleton";
/* eslint react/prop-types: 0 */
export default function CollectionHeader({ collection }) {
  return collection ? (
    <header
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.95), rgba(0, 0, 0, 0.2)), 
        url(${collection?.imageLink})`,
      }}
      id="collection-header"
    >
      <div className="row collection-header__row">
        <div className="collection-header__content">
          <div className="collection-header__left">
            <img
              src={collection?.logo}
              alt=""
              className="collection-header__img"
            />
            <div className="collection-header__name">{collection?.name}</div>
            <Link
              to={`/user/${collection?.creatorId}`}
              className="collection-header__author"
            >
              {collection?.creator}
            </Link>
          </div>
          <div className="collection-header__right">
            <div className="collection-header__columns">
              <div className="collection-header__column">
                <span className="collection-header__column__data">
                  <span className="semibold">{collection?.totalVolume}</span>{" "}
                  ETH
                </span>
                <span className="collection-header__column__label">
                  Total volume
                </span>
              </div>
              <div className="collection-header__column">
                <span className="collection-header__column__data">
                  <span className="semibold">
                    {parseFloat(collection?.floor).toFixed(2)}
                  </span>{" "}
                  ETH
                </span>
                <span className="collection-header__column__label">
                  Floor price
                </span>
              </div>
              <div className="collection-header__column">
                <span className="collection-header__column__data">
                  <span className="semibold">
                    {parseFloat(collection?.bestOffer).toFixed(2)}
                  </span>{" "}
                  ETH
                </span>
                <span className="collection-header__column__label">
                  Best offer
                </span>
              </div>
              <div className="collection-header__column">
                <span className="collection-header__column__data">
                  <span className="semibold">{collection?.listed}%</span>
                </span>
                <span className="collection-header__column__label">Listed</span>
              </div>
              <div className="collection-header__column">
                <span className="collection-header__column__data">
                  <span className="semibold">{collection?.owners} (32%)</span>
                </span>
                <span className="collection-header__column__label">
                  Owners (Unique)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  ) : (
    <Skeleton width="100%" height="350px" borderRadius="10px" />
  );
}
