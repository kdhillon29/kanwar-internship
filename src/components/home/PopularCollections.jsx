import { Link } from "react-router-dom";

export default function PopularCollections() {
  return (
    <section id="popular-collections">
      <div className="container">
        <div className="row">
          <h2 className="popular-collections__title">Popular Collections</h2>
          <div className="popular-collections__body">
            {new Array(6).fill(0).map((_, index) => (
              <div className="collection-column">
                <Link to="/collection" key={index} className="collection">
                  <img
                    src="https://i.seadn.io/gcs/files/a5414557ae405cb6233b4e2e4fa1d9e6.jpg?auto=format&dpr=1&w=1920"
                    alt=""
                    className="collection__img"
                  />
                  <div className="collection__info">
                    <h3 className="collection__name">Bored Ape Kennel Club</h3>
                    <div className="collection__stats">
                      <div className="collection__stat">
                        <span className="collection__stat__label">Floor</span>
                        <span className="collection__stat__data">0.46 ETH</span>
                      </div>
                      <div className="collection__stat">
                        <span className="collection__stat__label">
                          Total Volume
                        </span>
                        <span className="collection__stat__data">281K ETH</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
