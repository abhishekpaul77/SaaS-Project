import Header from "@/components/shared/Header";
import TransformationForm from "@/components/shared/TransformationForm";
import { transformationTypes } from "@/constants";
import { getUserById } from "@/lib/actions/user.actions";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import { string } from "zod";

const AddTransformationTypePage = async ({
  params: { type },
}: SearchParamProps) => {
  const transformation = transformationTypes[type];
  // const userId = auth();
  // if (!userId) redirect("/sign-in");
  const user1 = auth();
const userId = user1.userId;

if (!userId) {
  redirect("/sign-in");
  return null; // Ensure the function returns something
}

  const user = await getUserById(userId);

  return (
    <>
      <Header title={transformation.title} subtitle={transformation.subTitle} />
      <TransformationForm
        action="Add"
        userId={user._id}
        type={transformation.type as TransformationTypeKey}
        creditBalance={user.creditBalance}
      />
    </>
  );
};

export default AddTransformationTypePage;
