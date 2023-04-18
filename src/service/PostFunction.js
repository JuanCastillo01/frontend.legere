import { useState, useEffect } from 'react';

const PostFunction = (url,bodyRequest) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, {method:"POST", signal: abortCont.signal, headers: { 'Content-Type': 'application/json' }, body:JSON.stringify(bodyRequest)})
    .then(res => {
      if (!res.ok) {
        throw Error('could not fetch the data for that resource');
      } 
      return res.json();
    })
    .then(data => {
      setIsPending(false);
      setData(data);
      setError(null);
    })
    .catch(err => {
      if (err.name === 'AbortError') {
        console.log('fetch aborted')
      } else {
        setIsPending(false);
        setError(err.message);
      }
    })
    return () => abortCont.abort();
  }, [url,bodyRequest])

  return { data, isPending, error };
}
 
export default PostFunction;