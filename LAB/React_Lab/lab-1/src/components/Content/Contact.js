import { Box, CssBaseline, Typography } from "@mui/material";
import React from "react";
import {
  Button,
  Container,
  Icon,
  Select,
  TextInput,
  Textarea,
} from "react-materialize";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <CssBaseline/>
      <Typography variant="h2">Contact us</Typography>
      <Box
        sx={{
          width: "100%",
          m: "10px 0",
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        }}
      >
        <form onSubmit={handleSubmit} maxWidth="sm">
          <TextInput id="TextInput-38" label="Your Name"></TextInput>
          <TextInput id="TextInput-39" label="Your Phone"></TextInput>
          <TextInput
            email
            id="TextInput-41"
            label="Your Email"
            validate
          ></TextInput>
          <Select
            id="Select-46"
            multiple={false}
            onChange={function noRefCheck() {}}
            value=""
          >
            <option disabled value="">
              Choose your favorite nation
            </option>
            <option value="1">Endland</option>
            <option value="2">France</option>
            <option value="3">Spain</option>
          </Select>
          <Textarea
            icon={<Icon>mode_edit</Icon>}
            id="Textarea-28"
            label="Your content"
          />
          <Button>Submit</Button>
        </form>
      </Box>
    </Container>
  );
}
