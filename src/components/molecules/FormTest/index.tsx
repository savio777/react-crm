import { useState } from "react";

import { Box, Button, TextField, Typography } from "@mui/material";

const FormTest: React.FC = () => {
  const [text, setText] = useState("");

  const [showMessage, setShowMessage] = useState(false);

  return (
    <Box display="flex" flexDirection="column" gap={2} alignItems="center">
      <Box
        display="flex"
        flexDirection="row"
        gap={2}
        justifyContent="center"
        alignItems="center"
      >
        <TextField
          id="campo"
          name="campo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          id="submit"
          variant="outlined"
          onClick={() => setShowMessage(true)}
        >
          send
        </Button>
      </Box>

      {showMessage && <Typography id="text">{text}</Typography>}
    </Box>
  );
};

export default FormTest;
