import Image from "next/image";

export default function DownArrow(props) {
  return (
    <Image
      src="/images/down-arrow.svg"
      alt=""
      width={38}
      height={38}
      style={{
        filter: "invert(1)",
        marginLeft: "-2px",
        marginTop: "4px",
      }}
    />
  );
}
