import { useDispatch, useSelector } from "react-redux"
import SettingsModal from "./SettingsModal";
import ProfileModal from "./ProfileModal";
import NotificationModal from "./NotificationModal";
import AddAdminMOdal from "./AddAdminMOdal";

function MultiModal({ id, title }) {
    const dispatch = useDispatch();
    const modalOpen = useSelector((state) => state.multiModal.modals);

    let modalContent;

    if (title === 'Settings') {
        modalContent = <SettingsModal id={id} />;
    } else if (title === 'Profile') {
        modalContent = <ProfileModal id={id} />;
    } else if (title === 'Notification') {
        modalContent = <NotificationModal id={id} />;
    } else if (title === 'AddAdmin') {
        modalContent = <AddAdminMOdal id={id} />;
    }

    return (
        <div
            className={`modal fixed w-screen mx-auto h-screen bg-gray-900 bg-opacity-20 inset-0 z-50 flex items-center justify-center ${modalOpen ? 'visible' : 'invisible'
                }`}
        >
            <h2 className="text-lg font-semibold mb-4 hidden">{title}</h2>
            <div className="mb-4">{modalContent}</div>
        </div>
    )
}

export default MultiModal