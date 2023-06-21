import React, { useState } from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  VStack,
} from "@chakra-ui/react";
import { HiArrowRight } from "react-icons/hi2";
import { RxQuestionMark } from "react-icons/rx";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const Page_login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const history = useHistory();

  const handleClick = () => {
    setShow(!show);
  };

  // const submitHandler = async () => {
  //   setLoading(true);
  //   if (!email || !password) {
  //     toast({
  //       title: "Please fill all the Fields",
  //       status: "warning",
  //       duration: 5000,
  //       isClosable: true,
  //       position: "bottom",
  //     });
  //     setLoading(false);
  //     return;
  //   }
  //   try {
  //     const config = {
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //     };

  //     const { data } = await axios.post(
  //       "/api/user/login",
  //       { email, password },
  //       config
  //     );
  //     toast({
  //       title: "Login Successfully",
  //       status: "Success",
  //       duration: 5000,
  //       isClosable: true,
  //       position: "bottom",
  //     });
  //     localStorage.setItem("userInfo", JSON.stringify(data));
  //     setLoading(false);
  //     history.push("/chats");
  //   } catch (error) {
  //     toast({
  //       title: "Error Occured",
  //       description: error.response.data.message,
  //       status: "error",
  //       duration: 5000,
  //       isClosable: true,
  //       position: "bottom",
  //     });
  //     setLoading(false);
  //   }
  // };

    const submitHandler = async () => {
      setLoading(true);
      if (!email || !password) {
        toast({
          title: "Please Fill all the Feilds",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
        return;
      }

      // console.log(email, password);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };

        const { data } = await axios.post(
          "/api/user/login",
          { email, password },
          config
        );

        // console.log(JSON.stringify(data));
        toast({
          title: "Login Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        localStorage.setItem("userInfo", JSON.stringify(data));
        setLoading(false);
        history.push("/chats");
      } catch (error) {
        toast({
          title: "Error Occured!",
          description: error.response.data.message,
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setLoading(false);
      }
    };

  return (
    <VStack spacing={"5px"}>
      {/* For email */}
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your Email:"
          onChange={(e) => setEmail(e.target.value)}
        ></Input>
      </FormControl>
      {/* for password */}
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your Password:"
            onChange={(e) => setPassword(e.target.value)}
          ></Input>
          <InputRightElement width={"4.5rem"}>
            <Button h={"1.75rem"} size="sm" onClick={handleClick} colorScheme={'purple'}>
              {show ? "hide" : "show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        rightIcon={<HiArrowRight />}
        variant="ghost"
        onClick={submitHandler}
        isLoading={loading}
        colorScheme={"purple"}
      >
        Login
      </Button>

      <Button
        rightIcon={<RxQuestionMark />}
        variant="ghost"
        onClick={submitHandler}
        colorScheme={"purple"}
      >
        Forgot Password
      </Button>
    </VStack>
  );
};

export default Page_login;
