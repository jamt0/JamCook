export const rulesName = (texts: any) => ({
  required: texts.campo_requerido,
  minLength: {
    value: 3,
    message: texts.campo_nombre_min,
  },
});

export const rulesEmail = (texts: any) => ({
  required: texts.campo_requerido,
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: texts.campo_correo_invalido,
  },
});

export const rulesPassword = (texts: any) => ({
  required: texts.campo_requerido,
  minLength: {
    value: 8,
    message: texts.campo_contrasena_min,
  },
});

export const rulesAge = (texts: any) => ({
  required: texts.campo_requerido,
});

export const rulesGender = (texts: any) => ({
  required: texts.campo_requerido,
});

export const rulesSubject = (texts: any) => ({
  required: texts.campo_requerido,
});

export const rulesMessage = (texts: any) => ({
  required: texts.campo_requerido,
});

export const rulesNewPassword = (texts: any) => ({
  required: texts.campo_requerido,
    minLength: {
      value: 8,
      message: texts.campo_contrasena_min,
    },
});

export const rulesConfirmPassword = (texts: any) => ({
  required: texts.campo_requerido,
    minLength: {
      value: 8,
      message: texts.campo_contrasena_min,
    },
});

export const rulesVerificationCode = (texts: any) => ({
  required: texts.campo_requerido,
    minLength: {
      value: 6,
      message: texts.campo_contrasena_min,
    },
});