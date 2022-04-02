import { ResponsiveAppBar } from "../home-sec1/home-nav";
import { Link, useNavigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Box, Image, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import "./Cart.css";
export const CartPage = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = () => {
    const array = JSON.parse(localStorage.getItem("cartData"));
    if (array) {
      setShow(false);
      setCartData(array);
    }
  };
  const handleCart = () => {
    // here we need to navigate user to payment page if he is logged in other wise navigate him to login page
    // navigate("/payment");
    console.log("navigate");
  };
  return (
    <div>
      <ResponsiveAppBar />
      <br />
      <br />
      <br />
      {show ? (
        <div style={{ textAlign: "center" }}>
          <div>
            <h1>Your Bag is Empty!</h1>
            <Link to={"/home"}>Click here to add somthing to your bag</Link>
          </div>
          <img
            style={{ height: "500px" }}
            src="https://img.freepik.com/free-vector/empty-concept-illustration_114360-1188.jpg?t=st=1648879797~exp=1648880397~hmac=fbe5e3e3480fb12b9802ec00f635ff3bfa296459bdefb569786ec9984fb3d4f3&w=740"
            alt=""
          />
        </div>
      ) : (
        <ChakraProvider>
          <div>
            <div className="parentContainer">
              {cartData.map((property) => {
                return (
                  <Box
                    maxW="sm"
                    borderWidth="1px"
                    borderRadius="lg"
                    overflow="hidden"
                    width="250px"
                  >
                    <Image src={property.image} alt="Image" width="100%" />
                    <Box p="6">
                      <Box display="flex" alignItems="baseline">
                        <Badge borderRadius="full" px="2" colorScheme="teal">
                          Category
                        </Badge>
                        <Box
                          color="gray.500"
                          fontWeight="semibold"
                          letterSpacing="wide"
                          fontSize="xs"
                          textTransform="uppercase"
                          ml="2"
                        >
                          {property.category}
                        </Box>
                      </Box>

                      <Box
                        mt="1"
                        fontWeight="semibold"
                        as="h4"
                        lineHeight="tight"
                        isTruncated
                      >
                        {property.dish_name}
                      </Box>

                      <Box>
                        {property.price}
                        <Box as="span" color="gray.600" fontSize="sm">
                          $
                        </Box>
                      </Box>

                      <Box display="flex" mt="2" alignItems="center">
                        {Array(5)
                          .fill("")
                          .map((_, i) => (
                            <StarIcon
                              key={i}
                              color={
                                i < Math.floor(Math.random() * 3) + 1
                                  ? "teal.500"
                                  : "gray.300"
                              }
                            />
                          ))}
                        <Box as="span" ml="2" color="gray.600" fontSize="sm">
                          {Math.floor(Math.random() * 100) + 1} reviews
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                );
              })}
            </div>
            <div className="btn-class">
              <button onClick={handleCart} className="cart-btn">
                Proceed To Pay
              </button>
            </div>
          </div>
        </ChakraProvider>
      )}
    </div>
  );
};
