import { Link } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import NewCollectionSkelton from "../ui/CollectionSkelton";
import { SwiperSlide } from "swiper/react";
import CollectionSwiper from "./CollectionCarousel";
import CollectionCard from "../ui/CollectionCard";

export default function PopularCollections() {
  const { data: popularCollections } = useFetchData("/api/popularCollections");

  return popularCollections?.length > 0 ? (
    <section id="popular-collections">
      <div className="container">
        <div className="row">
          <h2 className="popular-collections__title">Popular Collections</h2>
          <div className="popular-collections__body">
            <CollectionSwiper>
              {popularCollections?.map((collection) => (
                <SwiperSlide
                  key={collection?.collectionId}
                  className="collection-column"
                >
                  <Link
                    to={`/collection/${collection?.collectionId}`}
                    className="collection"
                  >
                    <CollectionCard collection={collection} />
                  </Link>
                </SwiperSlide>
              ))}
            </CollectionSwiper>
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
            <CollectionSwiper>
              {new Array(9).fill(0).map((_, index) => (
                <SwiperSlide key={index} className="collection-column">
                  <NewCollectionSkelton />
                </SwiperSlide>
              ))}
            </CollectionSwiper>
          </div>
        </div>
      </div>
    </section>
  );
}
