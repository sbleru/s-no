import { NextPage } from "next";
import { useRouter } from "next/router";
import { Home } from "../features/Home";

export default function App() {
  return CSR(Home);
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
