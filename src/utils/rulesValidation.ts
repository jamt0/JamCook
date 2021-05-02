export const rulesName = (textos: any) => ({
  required: textos.campo_requerido,
  minLength: {
    value: 3,
    message: textos.campo_nombre_min,
  },
});

export const rulesEmail = (textos: any) => ({
  required: textos.campo_requerido,
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: textos.campo_correo_invalido,
  },
});

export const rulesPassword = (textos: any) => ({
  required: textos.campo_requerido,
  minLength: {
    value: 8,
    message: textos.campo_contrasena_min,
  },
});

export const rulesAge = (textos: any) => ({
  required: textos.campo_requerido,
});

export const rulesGender = (textos: any) => ({
  required: textos.campo_requerido,
});

export const rulesSubject = (textos: any) => ({
  required: textos.campo_requerido,
});

export const rulesMessage = (textos: any) => ({
  required: textos.campo_requerido,
});

export const rulesNewPassword = (textos: any) => ({
  required: textos.campo_requerido,
    minLength: {
      value: 8,
      message: textos.campo_contrasena_min,
    },
});

export const rulesConfirmPassword = (textos: any) => ({
  required: textos.campo_requerido,
    minLength: {
      value: 8,
      message: textos.campo_contrasena_min,
    },
});

export const rulesVerificationCode = (textos: any) => ({
  required: textos.campo_requerido,
    minLength: {
      value: 6,
      message: textos.campo_contrasena_min,
    },
});