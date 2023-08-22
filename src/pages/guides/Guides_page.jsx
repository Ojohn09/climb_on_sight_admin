import AppLayout_HOC from "../../components/layout/AppLayout_HOC"
import AllGuides_comp from "../../components/pages/Guides/AllGuides_comp"


function Guides_page() {
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