import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/queries";
import { SingUpCard } from "@/features/auth/components/sign-up-card";

const SignUpPage = async () => {
  const user = await getCurrent();

  if (user) redirect("/");

  return <SingUpCard />;
};

export default SignUpPage;
