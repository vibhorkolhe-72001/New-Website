export default function Component_5_1({ index, data }) {
  return (
    <div className="h-full w-[200px]">
      <img
        src={data[index].urlToImage}
        className="object-cover h-full w-full"
        alt=""
      />
    </div>
  );
}
