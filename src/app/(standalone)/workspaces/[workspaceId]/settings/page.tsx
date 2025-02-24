import { redirect } from "next/navigation";

import { getCurrent } from "@/features/auth/actions";


interface WorkspaceIdSettingsPageProps{
    params:{
        workspaceId:string;
    }
}


const WorkspaceIdSettingsPage =async ({}:WorkspaceIdSettingsPageProps) => {

    const user=await getCurrent();
    if(!user) redirect("/sign-in")
    return (
        <div>
            workspaceIdSettingsPage
        </div>
    );
}

export default WorkspaceIdSettingsPage;