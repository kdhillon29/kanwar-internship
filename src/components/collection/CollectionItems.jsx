import { faEye } from "@fortawesome/free-regular-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CollectionSkeleton from "../ui/NewCollectionSkelton";
import Skeleton from "../ui/Skeleton";

/* eslint react/prop-types: 0 */

export default function CollectionItems({ itemsData }) {
  const [items, setItems] = useState(itemsData);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  useEffect(() => {
    setItems(itemsData);
  }, [itemsData]);

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

  return (
    <section id="collection-items">
      <div className="row collection-items__row">
        {items?.length > 0 ? (
          <>
            <div className="collection-items__header">
              <div className="collection-items__header__left">
                <span className="collection-items__header__live">
                  <div className="green-pulse"></div>
                  Live
                </span>
                <span className="collection-items__header__results">
                  {items?.length} results
                </span>
              </div>
              <select
                onChange={(e) => sortByPrice(e)}
                className="collection-items__header__sort"
              >
                <option value="" default>
                  Default
                </option>
                <option value="Price high to low">Price high to low</option>
                <option value="Price low to high">Price low to high</option>
              </select>
            </div>
            <div className="collection-items__body">
              {items?.slice(0, itemsPerPage).map((item) => (
                <div className="item-column" key={item?.itemId}>
                  <Link to={`/item/${item?.itemId}`} className="item">
                    <figure className="item__img__wrapper">
                      <img
                        src={item?.imageLink}
                        alt={item?.title}
                        className="item__img"
                      />
                    </figure>
                    <div className="item__details">
                      <span className="item__details__name">{item?.title}</span>
                      <span className="item__details__price">
                        {item?.price} ETH
                      </span>
                      <span className="item__details__last-sale">
                        Last sale: {item?.lastSale} ETH
                      </span>
                    </div>
                    <div className="item__see-more">
                      <button className="item__see-more__button">
                        See More
                      </button>
                      <div className="item__see-more__icon">
                        <FontAwesomeIcon icon={faShoppingBag} />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "10px",
                padding: "20px 10px",
              }}
            >
              <div style={{ display: "flex", width: "50%", gap: "10px" }}>
                <Skeleton width="10%" height="12px" borderRadius="10px" />
                <Skeleton width="10%" height="12px" borderRadius="10px" />
              </div>

              <Skeleton width=" 20%" height="30px" borderRadius="5px" />
            </div>

            <div className="collection-items__body">
              {new Array(itemsPerPage).fill(0).map((_, index) => (
                <div className="item-column" key={index}>
                  <CollectionSkeleton />
                </div>
              ))}
            </div>
          </>
        )}

        {items?.length > itemsPerPage && (
          <button
            className="collection-page__button"
            onClick={() => setItemsPerPage(itemsPerPage + 6)}
          >
            Load more
          </button>
        )}
      </div>
    </section>
  );
}
