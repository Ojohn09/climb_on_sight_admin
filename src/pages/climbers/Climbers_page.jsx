import AppLayout_HOC from "../../components/layout/AppLayout_HOC"
import AllClimbers_comp from "../../components/pages/Climbers/AllClimbers_comp"


function Climbers_page() {
    return (
        <>
            <AppLayout_HOC>
                <div>
                    <AllClimbers_comp />
                </div>
            </AppLayout_HOC>
        </>
    )
}

export default Climbers_page