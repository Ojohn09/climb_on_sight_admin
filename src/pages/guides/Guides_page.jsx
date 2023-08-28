import AppLayout_HOC from "../../components/layout/AppLayout_HOC"
import GuideEvent_comp from "../../components/pages/Events/GuideEvent_comp";
import AllGuides_comp from "../../components/pages/Guides/AllGuides_comp"
import { useSelector } from "react-redux";



function Guides_page() {
    const showAllGuides = useSelector((state) => state.display.showAllGuides);

    return (
        <>
            <AppLayout_HOC>
                <div>
                    <AllGuides_comp />
                </div>
            </AppLayout_HOC>
        </>
    )
}

export default Guides_page