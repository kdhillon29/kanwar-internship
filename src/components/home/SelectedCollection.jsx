import VerifiedIcon from "../../assets/verified.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Skeleton from "../ui/Skeleton";

export default function SelectedCollection() {
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const response = await axios.get(
          "https://remote-internship-api-production.up.railway.app/selectedCollection"
        );

        const { data } = response.data;
        setCollection(data);
      } catch (error) {
        console.error("Error fetching collection:", error);
      }
    };
    fetchCollection();
  }, []);

  return collection ? (
    <header>
      <div className="selected-collection">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={collection?.thumbnail}
          src={collection?.videoLink}
          className="selected-collection__bg"
        />
        <div className="selected-collection__description">
          <img
            src={collection?.logo}
            alt=""
            className="selected-collection__logo"
          />
          <h1 className="selected-collection__title">{collection?.title}</h1>
          <Link
            to={`/user/${collection?.creatorId}`}
            className="selected-collection__author"
          >
            By {collection?.creator}
            <img
              src={VerifiedIcon}
              className="selected-collection__author__verified"
            />
          </Link>
          <div className="selected-collection__details">
            {collection?.amountOfItems} items · {collection?.floorPrice} ETH
          </div>
          <Link
            to={`/collection/${collection?.collectionId}`}
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
