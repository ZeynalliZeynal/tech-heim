const Skeleton = () => {
  return (
    <div
      className="rounded-md relative overflow-hidden z-10 bg-neutral-gray-300 w-full h-full bg-gradient-to-r from-white/0 via-white to-white/0 bg-no-repeat animate-skeleton"
      style={{
        backgroundSize: "70px 100%",
      }}
    />
  );
};

export default Skeleton;
