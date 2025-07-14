import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faShapes,
  faTag,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import RecommendedItems from "../components/item/RecommendedItems";
import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { useParams } from "react-router-dom";
import Skeleton from "../components/ui/Skeleton";
import { useState } from "react";

export default function ItemPage() {
  const { id } = useParams();
  const { data: itemData, error } = useFetchData(`/api/Item/${id}`);
  const [item, setItem] = useState(itemData);
  const [expiryDateCountdown, setExpiryDateCountdown] = useState(null);

  function getExpiryDateCountdown() {
    const date = new Date(item?.expiryDate);
    let expiryDateString = "";
    const now = Date.now();
    const diff = date - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days > 0) {
      expiryDateString += `${days}d `;
    }
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    if (hours > 0) {
      expiryDateString += `${hours}h `;
    }
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    if (minutes > 0) {
      expiryDateString += `${minutes}m `;
    }
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    if (seconds > 0) {
      expiryDateString += `${seconds}s`;
    }
    setExpiryDateCountdown(expiryDateString);
  }

  useEffect(() => {
    setItem(itemData);
  }, [itemData, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    getExpiryDateCountdown();
    const interval = setInterval(() => {
      getExpiryDateCountdown();
    }, 1000);
    return () => clearInterval(interval);
  }, [id, item]);

  if (error) {
    return (
      <div
        style={{
          textAlign: "center",
          width: "100%",
          margin: " 100px auto",
          height: "100vh",
        }}
      >
        <strong> Unknown Error!Unable to fetch Items! </strong>
      </div>
    );
  }
  return (
    <>
      {item?.id === id ? (
        <section id="item-info">
          <div className="container">
            <div className="row item-page__row">
              <div className="item-page__left">
                <figure className="item-page__img__wrapper">
                  <div className="item-page__img__details">
                    <FontAwesomeIcon
                      icon={faEthereum}
                      className="item-page__img__icon"
                    />
                    <div className="item-page__img__likes">
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="item-page__img__icon"
                      />
                      <span className="item-page__img__likes__text">
                        {item?.favorites}
                      </span>
                    </div>
                  </div>
                  <img
                    src={item?.imageLink}
                    alt=""
                    className="item-page__img"
                  />
                </figure>
              </div>
              <div className="item-page__right">
                <Link
                  to={`/collection/${item?.collectionId}`}
                  className="item-page__collection light-blue"
                >
                  {item?.collection}
                </Link>
                <h1 className="item-page__name">{item?.title}</h1>
                <span className="item-page__owner">
                  Owned by{" "}
                  <Link
                    to={`/user/${item?.ownerId}`}
                    className="light-blue item-page__owner__link"
                  >
                    {item?.owner}
                  </Link>
                </span>
                <div className="item-page__details">
                  <div className="item-page__detail">
                    <FontAwesomeIcon
                      icon={faEye}
                      className="item-page__detail__icon"
                    />
                    <span className="item-page__detail__text">
                      {item?.views} views
                    </span>
                  </div>
                  <div className="item-page__detail">
                    <FontAwesomeIcon
                      icon={faHeart}
                      className="item-page__detail__icon"
                    />
                    <span className="item-page__detail__text">
                      {item?.favorites} favorites
                    </span>
                  </div>
                  <div className="item-page__detail">
                    <FontAwesomeIcon
                      icon={faShapes}
                      className="item-page__detail__icon"
                    />
                    <span className="item-page__detail__text">
                      {item?.category}{" "}
                    </span>
                  </div>
                </div>
                <div className="item-page__sale">
                  <div className="item-page__sale__header">
                    <div className="green-pulse"></div>
                    <span>Sale ends in {expiryDateCountdown}</span>
                  </div>
                  <div className="item-page__sale__body">
                    <span className="item-page__sale__label">
                      Current price
                    </span>
                    <div className="item-page__sale__price">
                      <span className="item-page__sale__price__eth">
                        {item?.ethPrice} ETH
                      </span>
                      <span className="item-page__sale__price__dollars">
                        {item?.usdPrice}
                      </span>
                    </div>
                    <div className="item-page__sale__buttons">
                      <div className="item-page__sale__buy">
                        <button className="item-page__sale__buy__button disabled">
                          Buy now
                        </button>
                        <button className="item-page__sale__buy__icon disabled">
                          <FontAwesomeIcon icon={faShoppingBag} />
                        </button>
                      </div>
                      <button className="item-page__sale__offer disabled">
                        <FontAwesomeIcon icon={faTag} />
                        Make offer
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          <section id="item-info">
            <div className="container">
              <div className="row item-page__row">
                <div className="item-page__left">
                  <figure className="item-page__img__wrapper">
                    <div className="item-page__img__details">
                      <FontAwesomeIcon
                        icon={faEthereum}
                        className="item-page__img__icon"
                      />
                      <div className="item-page__img__likes">
                        {/* <FontAwesomeIcon
                          icon={faHeart}
                          className="item-page__img__icon"
                        /> */}
                        <span className="item-page__img__likes__text">
                          <Skeleton width={50} height={15} borderRadius={10} />
                        </span>
                      </div>
                    </div>
                    <Skeleton width={"100%"} height={"100%"} />
                  </figure>
                </div>
                <div className="item-page__right">
                  <Link
                    to={`/collection/${item?.collectionId}`}
                    className="item-page__collection light-blue"
                  >
                    <Skeleton width={100} height={15} borderRadius={10} />
                  </Link>
                  <h1 className="item-page__name">
                    <Skeleton width={100} height={15} borderRadius={10} />
                  </h1>
                  <span
                    style={{ display: "flex", gap: "12px" }}
                    className="item-page__owner"
                  >
                    <Skeleton width={80} height={15} borderRadius={10} />
                    <Skeleton width={80} height={15} borderRadius={10} />
                  </span>
                  <div className="item-page__details">
                    <div className="item-page__detail">
                      <span className="item-page__detail__text">
                        <Skeleton width={80} height={15} borderRadius={10} />
                      </span>
                    </div>
                    <div className="item-page__detail">
                      <span className="item-page__detail__text">
                        <Skeleton width={80} height={15} borderRadius={10} />
                      </span>
                    </div>
                    <div className="item-page__detail">
                      <span className="item-page__detail__text">
                        <Skeleton width={50} height={15} borderRadius={10} />
                      </span>
                    </div>
                  </div>
                  <div className="item-page__sale">
                    <div className="item-page__sale__header">
                      <Skeleton width={150} height={15} borderRadius={10} />
                    </div>
                    <div className="item-page__sale__body">
                      <span className="item-page__sale__label">
                        <Skeleton width={100} height={15} borderRadius={10} />
                      </span>
                      <div
                        style={{ marginTop: "10px" }}
                        className="item-page__sale__price"
                      >
                        <Skeleton width={80} height={15} borderRadius={10} />
                        <Skeleton width={80} height={15} borderRadius={10} />
                      </div>
                      <div
                        style={{ marginTop: "10px" }}
                        className="item-page__sale__buttons"
                      >
                        <Skeleton width="80%" height={50} borderRadius={15} />
                        <Skeleton width="80%" height={50} borderRadius={15} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <RecommendedItems itemData={item} />
    </>
  );
}
