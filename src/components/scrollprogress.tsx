const Scrollprogress = ({
  scrollProgress,
  containerClass,
  progressClass,
}: {
  scrollProgress: number;
  containerClass: string;
  progressClass: string;
}) => {
  return (
    <section className={"w-full h-[6px] " + containerClass}>
      <div
        className={"h-full " + progressClass}
        style={{
          width: scrollProgress + "%",
        }}
      />
    </section>
  );
};

export default Scrollprogress;
