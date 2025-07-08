import { useEffect } from "react";
import CollectionHeader from "../components/collection/CollectionHeader";
import CollectionInfo from "../components/collection/CollectionInfo";
import CollectionItems from "../components/collection/CollectionItems";
import { useParams } from "react-router-dom";

import useFetchData from "../hooks/useFetchData";

export default function CollectionPage() {
  const { id } = useParams();
  const { data: collection, error } = useFetchData(`/api/Collection/${id}`);

  console.log("data", collection);
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
    <>
      <CollectionHeader collection={collection} />
      <CollectionInfo collection={collection} />
      <CollectionItems itemsData={collection?.items} />
    </>
  );
}
