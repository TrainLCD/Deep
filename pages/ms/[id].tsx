import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";

const MS = () => {
  const router = useRouter();
  const { id } = router.query;

  const deepUrl = useMemo(() => {
    if (!id) {
      return null;
    }
    return `trainlcd://ms/${id}`;
  }, [id]);

  useEffect(() => {
    if (deepUrl) {
      window.location.replace(deepUrl);
    }
  }, [deepUrl]);

  if (!deepUrl) {
    return null;
  }

  return (
    <div>
      <Head>
        <title>TrainLCD Canary</title>
      </Head>
      <a href={deepUrl}>Press this link to open the TrainLCD app.</a>
    </div>
  );
};

export default MS;
