import CustomCard from "./card/CustomCard";

const MainProductList = () => {
  const products = [
    {
      id: 1,
      coverImage:
        "https://guke-bucket.oss-cn-nanjing.aliyuncs.com/images/back02.jpg",
      avatar:
        "https://guke-bucket.oss-cn-nanjing.aliyuncs.com/images/back02.jpg",
      title: "标题1",
      content: "标题1标题1",
    },
    {
      id: 2,
      coverImage:
        "https://guke-bucket.oss-cn-nanjing.aliyuncs.com/images/back02.jpg",
      avatar:
        "https://guke-bucket.oss-cn-nanjing.aliyuncs.com/images/back02.jpg",
      title: "标题2",
      content: "标题2标题2",
    },
    {
      id: 3,
      coverImage:
        "https://guke-bucket.oss-cn-nanjing.aliyuncs.com/images/back03.jpg",
      avatar:
        "https://guke-bucket.oss-cn-nanjing.aliyuncs.com/images/back03.jpg",
      title: "标题3",
      content: "标题3标题3",
    },
  ];

  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((product) => (
          <CustomCard
            key={product.id}
            coverImage={product.coverImage}
            avatar={product.avatar}
            title={product.title}
            content={product.content}
          />
        ))}
      </div>
    </>
  );
};

export default MainProductList;
