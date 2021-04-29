export const rulesName = (textos: any) => ({
  required: textos["campo_requerido"],
  minLength: {
    value: 3,
    message: textos["campo_nombre_min"],
  },
});

export const rulesEmail = (textos: any) => ({
  required: textos["campo_requerido"],
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: textos["campo_correo_invalido"],
  },
});

export const rulesPassword = (textos: any) => ({
  required: textos["campo_requerido"],
  minLength: {
    value: 8,
    message: textos["campo_contrasena_min"],
  },
});
