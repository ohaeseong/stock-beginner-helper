import { useCallback, useState } from "react";


function useRequest(request: any) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const onRequest = useCallback(
        async (params: any) => {
            try {
                setData(null);
                setLoading(true);
                const response = await request(params);
                setData(response);
            } catch (error) {
				setError(error);
				throw error;
            }
            setLoading(false);
        }, 
        [request]
    );

    return [onRequest, data, loading, error];
};

export default useRequest;
