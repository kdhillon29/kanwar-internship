import "./Skeleton.css";

// eslint-disable-next-line react/prop-types
const Skeleton = ({ width, height, borderRadius }) => {
  return (
    <div
      className="skeleton"
      style={{
        width,
        height,
        borderRadius,
      }}
    ></div>
  );
};

export default Skeleton;
