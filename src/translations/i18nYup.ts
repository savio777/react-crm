// será usado somente futuramente

import * as yup from "yup";

yup.setLocale({
  mixed: {
    required: "common.required",
  },
  string: {
    email: "common.invalidEmail",
  },
});

export default yup;
