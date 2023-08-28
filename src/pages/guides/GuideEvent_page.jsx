import AppLayout_HOC from "../../components/layout/AppLayout_HOC"
import GuideEvent_comp from "../../components/pages/Events/GuideEvent_comp"


function GuideEvent_page() {
    return (
        <div>
            <AppLayout_HOC>
                <GuideEvent_comp />
            </AppLayout_HOC>
        </div>
    )
}

export default GuideEvent_page