import { faEthereum } from "@fortawesome/free-brands-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import useFetchData from "../hooks/useFetchData";
import { useState } from "react";
import Skeleton from "../components/ui/Skeleton";

export default function UserPage() {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const { data: userData, error } = useFetchData(`/api/User/${id}`);

  const sortByPrice = (e) => {
    const sortedItems = [...items].sort((a, b) => {
      if (e.target.value === "Price high to low") {
        return b.price - a.price;
      } else if (e.target.value === "Price low to high") {
        return a.price - b.price;
      }
      return 0;
    });
    setItems(sortedItems);
  };

  useEffect(() => {
    setItems(userData?.items);
  }, [userData]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log("userData", userData);
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
      {!userData?.imageLink ? (
        <Skeleton width="100%" height="300px" borderRadius="0" />
      ) : (
        <header
          style={{
            backgroundImage: `url(${userData?.imageLink})`,
          }}
          id="user-header"
        ></header>
      )}

      <section id="user-info">
        <div className="row">
          <div className="user-info__wrapper">
            <figure className="user-info__img__wrapper">
              {!userData?.profilePicture ? (
                <Skeleton width="100%" height="100%" borderRadius="50%" />
              ) : (
                <img
                  src={userData?.profilePicture}
                  alt=""
                  className="user-info__img"
                />
              )}
            </figure>
            {!userData?.name ? (
              <Skeleton width="100%" height="100%" borderRadius="5px" />
            ) : (
              <h1 className="user-info__name">{userData?.name}</h1>
            )}
            <div className="user-info__details">
              <span className="user-info__wallet">
                <FontAwesomeIcon
                  icon={faEthereum}
                  className="user-info__wallet__icon"
                />
                <span className="user-info__wallet__data">
                  {!userData?.walletCode ? (
                    <Skeleton width="50px" height="10px" borderRadius="5px" />
                  ) : (
                    userData?.walletCode
                  )}
                </span>
              </span>
              <span className="user-info__year">
                <span className="user-info__year__data">
                  {!userData?.creationDate ? (
                    <Skeleton width="50px" height="10px" borderRadius="5px" />
                  ) : (
                    "Joined " + userData?.creationDate
                  )}
                </span>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section id="user-items">
        <div className="row user-items__row">
          <div className="user-items__header">
            <div className="user-items__header__left">
              <span className="user-items__header__text">
                {!items?.length ? (
                  <Skeleton width="50px" height="10px" borderRadius="5px" />
                ) : (
                  items?.length + " items"
                )}
              </span>
            </div>
            {items?.length > 0 ? (
              <select
                onChange={(e) => sortByPrice(e)}
                className="user-items__header__sort"
              >
                <option value="">Recently purchased</option>
                <option value="Price high to low">Price high to low</option>
                <option value="Price low to high">Price low to high</option>
              </select>
            ) : (
              <Skeleton width="100px" height="20px" borderRadius="5px" />
            )}
          </div>

          <div className="user-items__body">
            {items?.length > 0 ? (
              items?.slice(0, itemsPerPage).map((item) => (
                <div className="item-column" key={item?.itemId}>
                  <Link to={`/item/${item?.itemId}`} className="item">
                    <figure className="item__img__wrapper">
                      <img src={item?.imageLink} alt="" className="item__img" />
                    </figure>
                    <div className="item__details">
                      <span className="item__details__name">{item?.title}</span>
                      <span className="item__details__price">
                        {item?.price} ETH
                      </span>
                      <span className="item__details__last-sale">
                        Last sale: {item?.lastSale}
                      </span>
                    </div>
                    <span className="item__see-more">
                      <button className="item__see-more__button">
                        See More
                      </button>
                      <div className="item__see-more__icon">
                        <FontAwesomeIcon icon={faShoppingBag} />
                      </div>
                    </span>
                  </Link>
                </div>
              ))
            ) : (
              <div className="user-items__body">
                {new Array(itemsPerPage).fill(0).map((_, index) => (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                      alignItems: "center",
                    }}
                    className="item-column"
                    key={index}
                  >
                    <Skeleton
                      width="230px"
                      height="250px"
                      borderRadius="10px"
                    />
                    <div
                      style={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                      }}
                    >
                      <Skeleton width="50%" height="10px" borderRadius="5px" />
                      <Skeleton width="50%" height="10px" borderRadius="5px" />
                      <Skeleton width="50%" height="10px" borderRadius="5px" />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          {userData?.items.length > itemsPerPage && (
            <button
              className="collection-page__button"
              onClick={() => setItemsPerPage(itemsPerPage + 6)}
            >
              Load more
            </button>
          )}
        </div>
      </section>
    </>
  );
}
