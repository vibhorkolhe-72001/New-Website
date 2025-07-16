function Component_3_1({ data, value }) {
  return (
    <div
      className="relative min-h-30  w-full flex items-center p-2 gap-2"
    >
      <div className="h-full w-[40%] flex justify-center">
        <img
          src={data[value].urlToImage}
          className="h-[150px] w-[250px] object-fill"
          alt=""
        />
      </div>
      <div className="flex flex-col h-full w-[60%] justify-center">
        <h1 className="text-[13px]">{data[value].title.slice(0, 50)}....</h1>
        <p className="text-[13px]">{data[value].source.name}</p>
      </div>
    </div>
  );
}

export default Component_3_1;
