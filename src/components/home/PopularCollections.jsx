import { Link } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import NewCollectionSkelton from "../ui/NewCollectionSkelton";
import { SwiperSlide } from "swiper/react";
import NewCollectionSwiper from "./CollectionCarousel";

export default function PopularCollections() {
  const { data: popularCollections } = useFetchData("/api/popularCollections");

  return popularCollections?.length > 0 ? (
    <section id="popular-collections">
      <div className="container">
        <div className="row">
          <h2 className="popular-collections__title">Popular Collections</h2>
          <div className="popular-collections__body">
            <NewCollectionSwiper>
              {popularCollections?.map((collection) => (
                <div
                  className="collection-column"
                  key={collection?.collectionId}
                >
                  <Link
                    to={`/collection/${collection?.collectionId}`}
                    className="collection"
                  >
                    <SwiperSlide>
                      <img
                        src={collection?.imageLink}
                        alt=""
                        className="collection__img"
                      />
                      <div className="collection__info">
                        <h3 className="collection__name">
                          {collection?.title}
                        </h3>
                        <div className="collection__stats">
                          <div className="collection__stat">
                            <span className="collection__stat__label">
                              Floor
                            </span>
                            <span className="collection__stat__data">
                              {parseFloat(collection?.floor).toFixed(2)} ETH
                            </span>
                          </div>
                          <div className="collection__stat">
                            <span className="collection__stat__label">
                              Total Volume
                            </span>
                            <span className="collection__stat__data">
                              {collection?.totalVolume}
                            </span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </Link>
                </div>
              ))}
            </NewCollectionSwiper>
          </div>
        </div>
      </div>
    </section>
  ) : (
    <section id="popular-collections">
      <div className="container">
        <div className="row">
          <h2 className="popular-collections__title">Popular Collections</h2>
          <div className="popular-collections__body">
            <NewCollectionSwiper>
              {new Array(9).fill(0).map((_, index) => (
                <div className="collection-column" key={index}>
                  <SwiperSlide>
                    <NewCollectionSkelton />
                  </SwiperSlide>
                </div>
              ))}
            </NewCollectionSwiper>
          </div>
        </div>
      </div>
    </section>
  );
}
