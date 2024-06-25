import { Button, Box, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface Props {
  initText?: string;
}

const FormEtc: React.FC<Props> = ({ initText }) => {
  const [text, setText] = useState(initText || "");

  const [textConfirm, setTextConfirm] = useState("");

  const onSubmit = () => {
    setTextConfirm(text);
  };

  return (
    <Box display="flex" flexDirection="column" gap={4}>
      <Box display="flex" gap={6}>
        <TextField
          id="campo-etc"
          name="campo-etc"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <Button id="button-etc" variant="outlined" onClick={onSubmit}>
          submit
        </Button>
      </Box>

      {!!textConfirm && <Typography id="info-text">{textConfirm}</Typography>}
    </Box>
  );
};

export default FormEtc;
