import AppLayout_HOC from "../../components/layout/AppLayout_HOC"
import ClimbersEvent_comp from "../../components/pages/Events/ClimbersEvent_comp"


function ClimbersEvent_page() {
    return (
        <div>
            <AppLayout_HOC>
                <ClimbersEvent_comp />
            </AppLayout_HOC>
        </div>
    )
}

export default ClimbersEvent_page