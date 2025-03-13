import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";
import { SingInCard } from "@/features/auth/components/sign-in-card";

const SignInPage = async () => {
  const user = await getCurrent();

  if (user) redirect("/");

  return <SingInCard />;
};

export default SignInPage;
