import VerifiedIcon from "../../assets/verified.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import TrendingSkelton from "../ui/TrendingSkelton";

export default function Trending() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await axios.get(
          "https://remote-internship-api-production.up.railway.app/trendingNFTs"
        );

        const { data } = response.data;

        setTrending(data);
      } catch (error) {
        console.error("Error fetching trending:", error);
      }
    };
    fetchTrending();
  }, []);

  return (
    <section id="trending">
      <div className="container">
        <div className="row trending__row">
          <div className="trending__header">
            <h2 className="trending__header__title">Trending NFTs</h2>
            <Link className="trending__header__button" to={"/collections"}>
              View All
            </Link>
          </div>
          <div className="trending__body">
            <div className="trending-column">
              <div className="trending-column__header">
                <div className="trending-column__header__rank">#</div>
                <div className="trending-column__header__collection">
                  Collection
                </div>
                <div className="trending-column__header__price">
                  Floor Price
                </div>
                <div className="trending-column__header__price">Volume</div>
              </div>
              <div className="trending-column__body">
                {trending?.length > 0
                  ? trending?.slice(0, 5).map((collection) => (
                      <Link
                        to={`/collection/${collection?.collectionId}`}
                        key={collection?.collectionId}
                        className="trending-collection"
                      >
                        <div className="trending-collection__rank">
                          {collection?.rank}
                        </div>
                        <div className="trending-collection__collection">
                          <figure className="trending-collection__img__wrapper">
                            <img
                              src={collection?.imageLink}
                              alt=""
                              className="trending-collection__img"
                            />
                          </figure>
                          <div className="trending-collection__name">
                            {collection?.title}
                          </div>
                          <img
                            src={VerifiedIcon}
                            className="trending-collection__verified"
                          />
                        </div>
                        <div className="trending-collection__price">
                          <span className="trending-collection__price__span">
                            {parseInt(collection?.floor).toFixed(2)} ETH
                          </span>
                        </div>
                        <div className="trending-collection__volume">
                          <span className="trending-collection__volume__span">
                            {collection?.totalVolume}
                          </span>
                        </div>
                      </Link>
                    ))
                  : Array.from({ length: 5 }).map((_, index) => (
                      <TrendingSkelton key={index} rank={index + 1} />
                    ))}
              </div>
            </div>
            <div className="trending-column">
              <div className="trending-column__header trending-column__header2">
                <div className="trending-column__header__rank">#</div>
                <div className="trending-column__header__collection">
                  Collection
                </div>
                <div className="trending-column__header__price">
                  Floor Price
                </div>
                <div className="trending-column__header__price">Volume</div>
              </div>
              <div className="trending-column__body">
                {trending?.length > 0
                  ? trending?.slice(5).map((collection) => (
                      <Link
                        to={`/collection/${collection?.collectionId}`}
                        key={collection?.collectionId}
                        className="trending-collection"
                      >
                        <div className="trending-collection__rank">
                          {collection?.rank}
                        </div>
                        <div className="trending-collection__collection">
                          <figure className="trending-collection__img__wrapper">
                            <img
                              src={collection?.imageLink}
                              alt=""
                              className="trending-collection__img"
                            />
                          </figure>
                          <div className="trending-collection__name">
                            {collection?.title}
                          </div>
                          <img
                            src={VerifiedIcon}
                            className="trending-collection__verified"
                          />
                        </div>
                        <div className="trending-collection__price">
                          <span className="trending-collection__price__span">
                            {parseInt(collection?.floor).toFixed(2)} ETH
                          </span>
                        </div>
                        <div className="trending-collection__volume">
                          <span className="trending-collection__volume__span">
                            {collection?.totalVolume}
                          </span>
                        </div>
                      </Link>
                    ))
                  : Array.from({ length: 5 }).map((_, index) => (
                      <TrendingSkelton key={index} rank={index + 1 + 5} />
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
