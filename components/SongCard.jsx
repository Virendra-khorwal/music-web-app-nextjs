import Image from "next/image"

const SongCard = ({item}) => {
    return (
      <div className="bg-white h-fit w-40 overflow-hidden rounded-sm hover:scale-105 transition-all ease-in cursor-pointer">
        <div>
          <Image
            alt={item.title}
            className="w-full h-full"
            height={800}
            width={800}
            src={item.images?.coverarthq}
          />
        </div>
        <div className="p-2">
          <h1 className="font-bold">{item.title}</h1>
          <p className="text-slate-400">
            {item.subtitle.substring(0,20)}
          </p>
        </div>
      </div>
    );
}

export default SongCard