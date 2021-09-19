import Image from "next/image";

const Rating = () => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Image src="/assets/icons/yellow-star.svg" height="20px" width="20px" />
      ))}
    </div>
  );
};

export default Rating;
