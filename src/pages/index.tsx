import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  // const hello = api.post.hello.useQuery({ text: "from tRPC" });
  const [currentNum, setCurrentNum] = useState<number>(1000);
  const [rouletteNum, setRouletteNum] = useState<number | null>(null);
  const [status, setStatus] = useState<null | string>(null);

  const rollDown = () => {
    let curRoll = 1;
    const amtOfRolls = Math.floor(Math.random() * 21);
    const maxTime = (amtOfRolls * 100) + 100
    const finalNum = Math.floor(Math.random() * currentNum) + 1
    while (curRoll < amtOfRolls) {
      setTimeout(() => {
        const newRolNum = Math.floor(Math.random() * currentNum) + 1
        setRouletteNum(newRolNum);
      }, curRoll * 100),
      curRoll++;
    }

    setTimeout(() => {
      setCurrentNum(finalNum)
      setRouletteNum(null)
    }, maxTime)
 };

  const reset = () => {
    setCurrentNum(1000);
    setStatus(null);
  };
  useEffect(() => {
    if (currentNum === 1) setStatus("Defeated");
  }, [currentNum]);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-cyan-900">
        <div className="text-lg text-slate-500">Deathroll</div>
        <div>{rouletteNum ?? currentNum}</div>
        {status && <div className="m-3 text-red-500">{status}</div>}
        <button onClick={rollDown} disabled={currentNum === 1 || rouletteNum !== null}>
          Roll
        </button>
        {currentNum === 1 && <button onClick={reset}>Play Again</button>}
      </main>
    </>
  );
}
