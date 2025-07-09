import { faShoppingBag, faTableCells } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

import CollectionSkelton from "../ui/CollectionSkelton";
import CollectionSwiper from "../home/CollectionCarousel";
import { SwiperSlide } from "swiper/react";
import useFetchData from "../../hooks/useFetchData";
import { useState } from "react";
import { useEffect } from "react";

/* eslint react/prop-types: 0 */
export default function RecommendedItems({ itemData }) {
  const [recommendedItems, setRecommendedItems] = useState(null);

  const { data: collection } = useFetchData(
    `/api/Collection/${itemData?.collectionId}`
  );

  function getRecommendedItems() {
    setRecommendedItems(
      collection?.items
        .filter((item) => item?.itemId !== itemData?.id)
        .slice(0, 10)
    );
  }

  useEffect(() => {
    getRecommendedItems();
  }, [itemData, collection]);
  return (
    <section id="recommended-items">
      <div className="container">
        <div className="row recommended-items__row">
          <div className="recommended-items__wrapper">
            <div className="recommended-items__header">
              <FontAwesomeIcon icon={faTableCells} />
              <h3 className="recommended-items__header__title">
                More from this collection
              </h3>
            </div>
            <div className="recommended-items__body">
              <CollectionSwiper>
                {recommendedItems?.length > 0 ? (
                  recommendedItems?.map((item) => (
                    <SwiperSlide className="item-column" key={item.itemId}>
                      <Link
                        to={`/item/${item.itemId}`}
                        key={item.itemId}
                        className="item"
                      >
                        <figure className="item__img__wrapper">
                          <img
                            src={item?.imageLink}
                            alt=""
                            className="item__img"
                          />
                        </figure>
                        <div className="item__details">
                          <span className="item__details__name">
                            {item?.title}
                          </span>
                          <span className="item__details__price">
                            {item?.ethPrice}
                          </span>
                          <span className="item__details__last-sale">
                            Last sale: {item?.lastSale}
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
                    </SwiperSlide>
                  ))
                ) : (
                  <>
                    {new Array(9).fill(0).map((_, index) => (
                      <SwiperSlide key={index} className="collection-column">
                        <CollectionSkelton />
                      </SwiperSlide>
                    ))}
                  </>
                )}
              </CollectionSwiper>
            </div>
            <div className="recommended-items__footer">
              <Link
                to={`/collection/${itemData?.collectionId}`}
                className="recommended-items__footer__button"
              >
                View Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
