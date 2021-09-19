import Image from "next/image";
import Rating from "./Rating";

const TestimonialCard = () => {
  return (
    <article className="flex flex-col bg-white rounded-xl shadow w-[288px] h-[281px] p-4">
      <div className="flex mb-4">
        <figure className="relative rounded-full overflow-hidden h-16 w-16 mr-3">
          <Image
            src="/assets/home/profile.png"
            alt="Profile"
            layout="fill"
            objectPosition="center"
            objectFit="cover"
          />
        </figure>

        <div className="flex flex-col ">
          <p className="text-heading-4 text-gray-100 font-label font-bold mb-1">
            Randi Hisyam
          </p>
          <p className="text-heading-5 text-gray-50 font-bold">
            Bandung, Jawa Barat
          </p>
        </div>
      </div>

      <Rating />
    </article>
  );
};

export default TestimonialCard;
