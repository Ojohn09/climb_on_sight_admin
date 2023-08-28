import Events_comp from "../../../features/calender/Events_comp"
import Calender from "../../../features/calender/Events_comp"
import Notification_comp from "../../../features/calender/Notification_comp"
import NewMessages_comp from "./NewMessages_comp"


function DateAndNotification_comp() {
    return (
        <div>
            <div className="flex h-[50%] gap-4 flex-col mt-5 md:flex-row">
                <div className="md:w-[65%]">
                    <Events_comp />
                </div>
                <div className="md:w-[35%]">
                    <Notification_comp />
                </div>
            </div>
        </div>
    )
}

export default DateAndNotification_comp