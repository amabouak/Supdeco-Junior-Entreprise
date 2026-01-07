import Image from "next/image";

interface datatype {
  imgSrc: string;
  company: string;
  paragraph: string;
}

const Aboutdata: datatype[] = [
  {
    imgSrc: "/assets/carousel/adei.png",
    company: "ADEI Supdeco",
    paragraph: "Association des Élèves Ingénieurs de Supdeco, promotes student innovation and entrepreneurship.",
  },
  {
    imgSrc: "/assets/carousel/cjem.png",
    company: "CJEM Sénégal",
    paragraph: "Confédération des Junior-Entreprises du Maroc, connecting young entrepreneurs across Africa.",
  },
  {
    imgSrc: "/assets/carousel/ensias.png",
    company: "ENSIAS",
    paragraph: "École Nationale Supérieure d'Informatique et d'Analyse des Systèmes, excellence in IT.",
  },
  {
    imgSrc: "/assets/carousel/bestafrik.png",
    company: "Best Afrik",
    paragraph: "Panafrican network promoting youth entrepreneurship and innovation across Africa.",
  },
];

const Network = () => {
  return (
    <div className="bg-babyblue" id="project">
      <div className="mx-auto max-w-2xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h3 className="text-4xl sm:text-6xl font-semibold text-center my-10 lh-81">
          Notre réseau d&apos;entreprises <br /> partenaires au Sénégal.
        </h3>

        <Image
          src={"/assets/network/map.png"}
          alt={"map-image"}
          width={1400}
          height={800}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-4 lg:gap-x-8">
          {Aboutdata.map((item, i) => (
            <div key={i} className="bg-white rounded-2xl p-5 shadow-xl">
              <div className="flex justify-start items-center gap-2">
                <Image
                  src={item.imgSrc}
                  alt={item.company}
                  width={55}
                  height={55}
                  className="mb-2 object-contain"
                />
                <h4 className="text-xl font-medium text-midnightblue">
                  {item.company}
                </h4>
              </div>
              <hr />
              <h4 className="text-lg font-normal text-bluegrey my-2">
                {item.paragraph}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Network;

