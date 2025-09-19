import { getMember } from "@/features/members/utils";

import { createSessionClient } from "@/lib/appwrite";
import { DATABASE_ID, WORKSPACES_ID } from "@/config";
import { Project } from "./types";

interface GetProjectProps {
  projectId: string;
}

export const getProject = async ({ projectId }: GetProjectProps) => {
  try {
    const { databases, account } = await createSessionClient();
    const user = await account.get();

    const project = await databases.getDocument<Project>(
      DATABASE_ID,
      WORKSPACES_ID,
      projectId
    );

    const member = await getMember({
      databases,
      userId: user.$id,
      workspaceId: project.workspaceId,
    });

    if (!member) {
      return null;
    }

    return project;
  } catch {
    return null;
  }
};
