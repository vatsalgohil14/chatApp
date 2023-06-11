import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { ChatState } from "../Context/ChatProvider";
import SideDrawer from "../Miscellaneous/SideDrawer";
import { Box } from "@chakra-ui/react";
import MyChats from "../MyChats";
import ChatBox from "../ChatBox";

const Chatpage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        w={"100%"}
        height={"91.5vh"}
        p={"10px"}
      >
        {user && (
          <MyChats fetchAgain={fetchAgain}  />
        )}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;
