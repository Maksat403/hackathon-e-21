import React from "react";
import { Dialog, DialogTitle, DialogContent, Button } from "@mui/material";

const BuyModal = ({ isOpen, onClose, onBuy }) => {
  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle style={{ backgroundColor: "#F93E03", color: "#fff" }}>
        <strong>Подтвердите покупку</strong>
      </DialogTitle>
      <DialogContent>
        <p style={{ fontSize: "18px", marginBottom: "20px" }}>
          Вы уверены, что хотите совершить покупку?
        </p>
        <Button
          variant="contained"
          onClick={onBuy}
          sx={{
            backgroundColor: "#F93E03",
            color: "#fff",
            marginRight: "10px",
          }}
        >
          Подтвердить
        </Button>
        <Button
          variant="outlined"
          onClick={onClose}
          sx={{ borderColor: "#F93E03", color: "#F93E03" }}
        >
          Отмена
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default BuyModal;
