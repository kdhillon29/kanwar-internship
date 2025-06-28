import VerifiedIcon from "../../assets/verified.png";
import { Link } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import Skeleton from "../ui/Skeleton";

export default function SelectedCollection() {
  const { data } = useFetchData("/api/selectedCollection");

  return data ? (
    <header>
      <div className="selected-collection">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={data?.thumbnail}
          src={data?.videoLink}
          className="selected-collection__bg"
        />
        <div className="selected-collection__description">
          <img src={data?.logo} alt="" className="selected-collection__logo" />
          <h1 className="selected-collection__title">{data?.title}</h1>
          <Link
            to={`/user/${data?.creatorId}`}
            className="selected-collection__author"
          >
            By {data?.creator}
            <img
              src={VerifiedIcon}
              className="selected-collection__author__verified"
            />
          </Link>
          <div className="selected-collection__details">
            {data?.amountOfItems} items · {data?.floorPrice} ETH
          </div>
          <Link
            to={`/collection/${data?.collectionId}`}
            className="selected-collection__button"
          >
            <div className="green-pulse"></div>
            View Collection
          </Link>
        </div>
      </div>
    </header>
  ) : (
    <header>
      <div className="selected-collection">
        <Skeleton width="100%" height="500px" borderRadius="10px" />
      </div>
    </header>
  );
}
