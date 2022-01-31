import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const MS = () => {
  const router = useRouter();
  const { id } = router.query;

  const deepUrl = `trainlcd://ms/${id}`;

  useEffect(() => {
    window.location.replace(deepUrl);
  }, [deepUrl]);

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
