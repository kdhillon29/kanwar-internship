import { useEffect } from "react";
import useFetchData from "../hooks/useFetchData";
import NewCollectionSkelton from "../components/ui/CollectionSkelton";
import CollectionCard from "../components/ui/CollectionCard";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function CollectionsPage() {
  const { data: collections, error } = useFetchData("/api/Collections");
  const [collectionPerPage, setCollectionPerPage] = useState(10);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        <strong> Unknown Error!Unable to fetch Collections! </strong>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row">
        <h1 className="collections-page__title">Collections</h1>
        <div className="collections__body">
          {collections?.length > 0
            ? collections?.slice(0, collectionPerPage).map((collection) => (
                <div className="collection-column" key={collection?.id}>
                  <Link
                    to={`/collection/${collection?.id}`}
                    className="collection"
                  >
                    <CollectionCard
                      collection={collection}
                      key={collection?.id}
                    />
                  </Link>
                </div>
              ))
            : new Array(collectionPerPage).fill(0).map((_, index) => (
                <div className="collection-column" key={index}>
                  <NewCollectionSkelton />
                </div>
              ))}
        </div>
        {collections?.length > collectionPerPage && (
          <button
            className="collections-page__button"
            onClick={() => setCollectionPerPage(collectionPerPage + 5)}
          >
            Load more
          </button>
        )}
      </div>
    </div>
  );
}
