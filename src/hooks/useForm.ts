import { useState } from "react";
import { useForm as UseFormHook } from "react-hook-form";
import { useHistory } from "react-router";

const useForm = <T>(props: { dataFech: (req: T) => any; route: string }) => {
  const [errores, setErrores] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const history = useHistory();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
  } = UseFormHook<T>({
    mode: "onChange",
  });

  const handler = async (req: T) => {
    setLoading(true);
    const data = await props.dataFech(req);
    if (data !== null) {
      setErrores(data);
      setLoading(false);
    } else {
      history.replace(props.route);
      setLoading(false);
    }
  };

  const formHook = {
    control,
    handleSubmit,
    isSubmitting,
    isValid,
    errors,
  };

  return { formHook, errores, loading, handler };
};

export default useForm;
