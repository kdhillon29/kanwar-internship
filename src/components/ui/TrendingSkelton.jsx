import Skeleton from "./Skeleton";

// eslint-disable-next-line react/prop-types
const TrendingSkelton = ({ rank }) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          gap: "100px",
          width: "100%",

          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          "@media (maxWidth: 768px)": {
            gap: "2px",
            padding: "2px",
          },
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "20px",
            width: "50%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ marginTop: "10px" }}>{rank}</div>
          <Skeleton width={80} height={80} borderRadius="10px" />
          <Skeleton width={120} height={20} borderRadius="2px" />
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            width: "50%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Skeleton width={100} height={20} borderRadius="2px" />
          <Skeleton width={100} height={20} borderRadius="2px" />
        </div>
      </div>
    </>
  );
};

export default TrendingSkelton;
