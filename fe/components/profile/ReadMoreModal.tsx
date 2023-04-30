import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "15px",
  color: "black",
  fontSize: "18px",
};

export default function ReadMoreModal({ open, handleClose, text }: any) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ position: "relative", p: 5, pt: 8 }}>
            {text}
            <CloseIcon
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: "20px",
                right: "40px",
                color: "black",
              }}
            />
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
