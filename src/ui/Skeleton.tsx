const Skeleton = () => {
  return (
    <div
      className="rounded-md relative overflow-hidden z-10 w-full h-full animate-skeleton"
      style={{
        background:
          "linear-gradient(120deg, #e5e5e5 30%, #f2f2f2 38%, #f2f2f2 40%, #e5e5e5 48%)",
        backgroundSize: "200% 100%",
      }}
    />
  );
};

export default Skeleton;
