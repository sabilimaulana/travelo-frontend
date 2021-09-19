import Button from "components/Button";
import Image from "next/dist/client/image";

const PackageCard = () => {
  return (
    <article className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden w-[393px]">
      <figure className="relative w-full h-[268px]">
        <Image
          src="/assets/home/cliff.png"
          alt="Cliff"
          layout="fill"
          objectPosition="center"
          objectFit="cover"
        />
      </figure>

      <div className="flex-col flex p-4">
        <div className="flex items-center mb-4">
          <Image src="/assets/icons/yellow-star.svg" height="20" width="20" />

          <p className="text-heading-5 text-gray-70 ml-1">
            4.6 (1.232 Reviews)
          </p>
        </div>

        <p className="font-bold text-heading-3 text-gray-100 label">
          Colloseum, Roma
        </p>
        <p className="text-heading-4 text-gray-70 mb-4">Italia</p>

        <p className="text-heading-3 text-gray-100 font-bold mb-4">
          Rp. 20.000.000
        </p>

        <p className="text-heading-5 text-gray-70 mb-4">
          Untuk 1 orang, tiket pesawat, penginapan 5 malam, tour guide, makan
          siang, makan malam, transportasi travel
        </p>

        <div className="flex justify-between gap-3">
          <Button fullWidth outlined>
            Lihat detail
          </Button>

          <Button fullWidth>Pesan</Button>
        </div>
      </div>
    </article>
  );
};

export default PackageCard;
