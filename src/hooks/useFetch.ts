import { useEffect, useState } from "react";

const useFetch = (props: {fetch: (req: any) => any, req: any}) => {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState({user: { name: "", email: "" }});

  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await props.fetch(props.req);
        if(response.data.error) setError(response.data.error);
        else setData(response.data);
      } catch (error) {
        console.log(error);
        setError("Error de conexión")
      }
    }
    setLoading(true);
    fetchData();
    setLoading(false);
  }, []);

  return { error, loading, data };
};
export default useFetch;
