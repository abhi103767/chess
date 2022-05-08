import { Flex } from "./Styled";

export const ProductCard = ({ item }) => {
  console.log(item.id)
  return (
    <>
      <Flex data-testid="single-product-item" key={item.id}>
        <img src={item.image} />
        <h3>{item.brand}</h3>
        <b>{item.title}</b>
        <p>{item.price}</p>
      </Flex>
    </>
  );
};
