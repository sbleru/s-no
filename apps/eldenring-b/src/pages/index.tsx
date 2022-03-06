import { NextPage } from "next";
import { useRouter } from "next/router";
import { TimeA } from "../features/TimeA";

export default function App() {
  return CSR(TimeA);
}

const CSR: React.FC<NextPage> = (Component) => {
  const { isReady } = useRouter();

  // isReady === true でCSRになる。
  if (!isReady) {
    return null;
  }

  // if (typeof window === 'undefined') {
  //   // You now have access to `window`
  //   return null
  // }

  return <Component />;
};
