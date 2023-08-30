import AppLayout_HOC from "../../components/layout/AppLayout_HOC"
import StatsChart from "../../components/pages/Stats/StatsChart"
import StatsCounter_comp from "../../components/pages/Stats/StatsCounter_comp"
import StatsLocationCharts_comp from "../../components/pages/Stats/StatsLocationCharts_comp"


function Stats_page() {
    return (
        <AppLayout_HOC>
            <div>
                <StatsCounter_comp />

                <div className="flex mt-10">
                    <div className="w-1/2">
                        <StatsChart />
                    </div>
                    <div className="w-1/2">
                        <StatsLocationCharts_comp />
                    </div>

                </div>
            </div>
        </AppLayout_HOC>
    )
}

export default Stats_page