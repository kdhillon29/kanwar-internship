import Skeleton from "./Skeleton";

const NewCollectionSkelton = () => {
  return (
    <>
      <Skeleton width="100%" height="150px" borderRadius="10px" />
      <div
        style={{
          width: "100%",
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
          gap: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "50%",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <Skeleton width="60%" height="10px" borderRadius="2px" />
          <Skeleton width="80%" height="10px" borderRadius="2px" />
        </div>
        <div
          style={{
            display: "flex",
            width: "50%",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <Skeleton width="60%" height="10px" borderRadius="2px" />
          <Skeleton width="80%" height="10px" borderRadius="2px" />
        </div>
      </div>
    </>
  );
};

export default NewCollectionSkelton;
