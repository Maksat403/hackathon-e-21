import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Button,
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
} from "@mui/material";

const BuyModal = ({ isOpen, onClose, onBuy }) => {
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleBuy = () => {
    onBuy({ paymentMethod, address, cardNumber });
    setPaymentMethod("cash");
    setAddress("");
    setCardNumber("");
  };

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle
        style={{
          background: "linear-gradient(95deg, #333333 10%, #000000 90%)",
          color: "#fff",
        }}
      >
        <strong>Оплата заказа</strong>
      </DialogTitle>
      <DialogContent>
        <FormControl component="fieldset" sx={{ marginBottom: "20px" }}>
          <RadioGroup
            aria-label="payment-method"
            name="payment-method"
            value={paymentMethod}
            onChange={handlePaymentMethodChange}
          >
            <FormControlLabel
              value="cash"
              control={<Radio />}
              label="Оплата наличными"
            />
            <FormControlLabel
              value="card"
              control={<Radio />}
              label="Оплата картой"
            />
          </RadioGroup>
        </FormControl>

        {paymentMethod === "card" && (
          <TextField
            fullWidth
            label="Номер карты"
            variant="outlined"
            margin="normal"
            onChange={handleCardNumberChange}
            value={cardNumber}
          />
        )}

        <TextField
          fullWidth
          label="Адрес доставки"
          variant="outlined"
          margin="normal"
          onChange={handleAddressChange}
          value={address}
        />

        <Button
          variant="contained"
          onClick={handleBuy}
          sx={{
            background: "linear-gradient(95deg, #333333 10%, #000000 90%)",
            color: "#fff",
            marginRight: "10px",
          }}
        >
          Подтвердить оплату
        </Button>
        <Button
          variant="outlined"
          onClick={onClose}
          sx={{
            borderColor: "linear-gradient(95deg, #333333 10%, #000000 90%)",
            color: "linear-gradient(95deg, #333333 10%, #000000 90%)",
          }}
        >
          Отмена
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default BuyModal;
