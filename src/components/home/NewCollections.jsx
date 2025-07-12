import { Link } from "react-router-dom";
import useFetchData from "../../hooks/useFetchData";
import NewCollectionSkelton from "../ui/CollectionSkelton";
import { SwiperSlide } from "swiper/react";
import CollectionSwiper from "./CollectionCarousel";
import CollectionCard from "../ui/CollectionCard";

export default function NewCollections() {
  const { data: newCollections } = useFetchData("/api/newCollections");

  return newCollections?.length > 0 ? (
    <section id="new-collections" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <h2 className="new-collections__title">New Collections</h2>
          <div className="new-collections__body">
            <CollectionSwiper>
              {newCollections?.map((collection) => (
                <SwiperSlide
                  key={collection?.collectionId}
                  className="collection-column"
                >
                  <Link
                    to={`/collection/${collection?.collectionId}`}
                    className="collection "
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
    <section id="new-collections" data-aos="fade-up">
      <div className="container">
        <div className="row">
          <h2 className="new-collections__title">New Collections</h2>
          <div className="new-collections__body">
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
