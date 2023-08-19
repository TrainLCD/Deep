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
    return `trainlcd-canary://ms/${id}`;
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
      <a href={deepUrl}>
        <b>もう一度起動</b>
      </a>
      <p>
        リンクから起動できないときは、スクリーンシェアID <b>{id}</b>{" "}
        をアプリに入力してください。
      </p>
    </div>
  );
};

export default MS;
