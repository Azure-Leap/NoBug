import { ChatContext } from "@/context/chatContext";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React, { useContext } from "react";

const OneChat = ({ message, own }: any) => {
  const {}: any = useContext(ChatContext);

  return (
    <Box
      style={
        own
          ? { justifyContent: "flex-start", flexDirection: "row-reverse" }
          : {}
      }
      sx={{
        display: "flex",
        alignItems: "end",
        gap: "10px",
      }}
    >
      <Box
        style={own ? { display: "none" } : {}}
        sx={{
          maxWidth: "50px",
          minWidth: "50px",
          aspectRatio: "1/1",
          backgroundColor: "blue",
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <Image
          alt="img"
          width={2000}
          height={1000}
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80"
          className="h-full w-full object-cover"
        />
      </Box>
      <Box
        style={own ? { alignItems: "end" } : { alignItems: "start" }}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          height: "100%",
        }}
      >
        {message.map((e: any) => (
          <Typography
            style={
              own
                ? {
                    backgroundColor: "rgb(32,76,244)",
                    color: "white",
                  }
                : {
                    backgroundColor: "white",
                  }
            }
            sx={{
              maxWidth: "400px",
              width: "fit-content",
              padding: "10px 15px",
              borderRadius: "15px",
            }}
          >
            {e}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default OneChat;
