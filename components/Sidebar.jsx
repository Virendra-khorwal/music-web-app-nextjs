import Link from "next/link";
import { useRouter } from "next/router";
import {
  IoCompassOutline,
  IoCompass,
  IoEarthOutline,
  IoEarth,
  IoPersonOutline,
  IoPerson,
  IoFolderOpenOutline,
  IoFolderOpen,
} from "react-icons/io5";

const Sidebar = () => {
  const route = useRouter();
  const menu = [
    {
      name: "Browse",
      filled: IoCompass,
      outline: IoCompassOutline,
      link: "/",
    },
    {
      name: "Albums",
      filled: IoFolderOpen,
      outline: IoFolderOpenOutline,
      link: "/albums",
    },
    {
      name: "Artists",
      filled: IoPerson,
      outline: IoPersonOutline,
      link: "/artists",
    },
    {
      name: "Top By Country",
      filled: IoEarth,
      outline: IoEarthOutline,
      link: "/topByCountry",
    },
  ];

  return (
    <div className="bg-white w-40">
      <h1>Logo</h1>
      <div className="flex flex-col gap-4 p-4 mt-14">
        {menu.map((item, i) => (
          <Link
            href={item.link}
            className="flex items-center gap-2 cursor-pointer transition-all ease-in"
            key={i}
          >
            {route.pathname === item.link ? <item.filled className="text-blue-500 scale-125 transition-all ease-in" /> : <item.outline />}

            <h3
              className={`${
                route.pathname == item.link ? "text-blue-500" : "text-black"
              } text-sm font-semibold`}
            >
              {item.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
