function Logo({ height }: { height: number }) {
  const style = {
    height: `${height}px`,
    width: `${height}px`,
  };
  return (
    <div className="flex items-center justify-between">
      <img style={style} src="./logo.svg" alt="logo image" />
      <p className="text-3xl font-bold text-pink-500">TIPYNB</p>
    </div>
  );
}

export default Logo;
