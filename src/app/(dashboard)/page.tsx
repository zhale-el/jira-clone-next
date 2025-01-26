import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/actions";

const Home = async () => {
  const user = await getCurrent();

  if (!user) redirect("/sign-in");

  return <div>Home page</div>;
};

export default Home;
