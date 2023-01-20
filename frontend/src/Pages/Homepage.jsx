import { Box, Container, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import React from "react";
import { Page_login } from "../Components/Authentication/Page_login";
import Page_sign_up from "../Components/Authentication/Page_sign_up";


const Homepage = () => {
  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"yellow.100"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize={"3xl"} px={"220px"}>
          Talk
        </Text>
      </Box>
      <Box w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs isFitted variant="enclosed" colorScheme={"purple"}>
          <TabList mb="1em">
            <Tab width={"50%"}>Login</Tab>
            <Tab width={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
               <Page_login/>
            </TabPanel>
            <TabPanel>
              <Page_sign_up/>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
