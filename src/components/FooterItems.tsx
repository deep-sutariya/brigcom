import Link from "next/link";
import { RiArrowRightSLine } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

type FooterItem = {
  name: string;
  link: string;
};
type ContactItem = {
  name: string;
  detail: string;
  type: string;
};

type Props = {
  heading: string;
  details?: FooterItem[];
  contact?: ContactItem[];
};

const getIcon = (type: string) => {
    switch(type){
        case "email":
            return <MdEmail />
        case "address":
            return <MdLocationOn /> 
        case "phone":
            return <MdLocalPhone />
    }
}

export default function FooterItems({ heading, details, contact }: Props) {
  return (
    <div className="text-gray-300 flex flex-col gap-y-2 sm:gap-y-5">
      <div className=" font-details font-semibold tracking-wide text-xl md:text-2xl text-gray-100">
        {heading}
      </div>

      <div className="border-t-3 rounded-full w-[15%] sm:w-[20%] border-gray-300/50 my-2"></div>

      <div className="flex flex-col gap-y-4">
        {contact?.length
          ? contact.map(({ name, detail, type }) => {
              return (
                <div className="flex gap-x-3 font-semibold text-sm sm:text-base" key={type}>
                  <div className=" text-lg pt-1">{getIcon(type)}</div>
                  <div className=" flex flex-col gap-y-1">
                    <div className=" text-gray-100 text-base">{name}</div>
                    {type=="email" ? <Link href={detail} className="hover:text-gray-300 text-gray-300/90">{detail}</Link> : <div className="hover:text-gray-300 text-gray-300/90" >{detail}</div>}
                  </div>
                </div>
              );
            })
          : details?.map(({ name, link }) => {
              return (
                <Link
                  href={link}
                  key={link}
                  className="flex gap-x-2 items-center hover:text-gray-300 font-semibold text-sm sm:text-base"
                >
                  <RiArrowRightSLine className="text-gray-100"/>
                  {name}
                </Link>
              );
            })}
      </div>
    </div>
  );
}
