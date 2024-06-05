import {
  FormLabel,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";

interface Props extends TextFieldProps<"standard"> {
  flex?: number;
  label?: string;
  errorSchema?: string;
}

const Input: React.FC<Props> = ({ label, errorSchema, flex, ...props }) => (
  <>
    {!!label && (
      <FormLabel
        sx={{
          flex,
          minWidth: "70px",
        }}
      >
        {label}
      </FormLabel>
    )}

    <TextField {...props} />

    {!!errorSchema && (
      <Typography id="input-error-msg" color="red">
        {errorSchema}
      </Typography>
    )}
  </>
);

export default Input;
