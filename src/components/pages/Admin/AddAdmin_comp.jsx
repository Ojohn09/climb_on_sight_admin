import { AiOutlinePlus } from 'react-icons/ai'
import MultiModal from '../../modal/MultiModal'
import { useDispatch, useSelector } from 'react-redux';
import { openMultiModal } from '../../../redux/slices/features/multiModalSlice';

function AddAdmin_comp() {
    const dispatch = useDispatch()

    const modals = useSelector(state => state.multiModal.modals);

    const AddAdminModal = () => {
        dispatch(
            openMultiModal({
                id: 'admin-modal',
                title: 'AddAdmin',
            })
        );
    };
    return (
        <div className="w-full h-full">
            <p className="font-semibold text-lg 3xl:text-2xl 4xl:text-4xl p-1">Add Admin</p>

            <div className="flex flex-col items-center place-content-center text-sm 3xl:xl h-[80vh] justify-center">
                <div className="bg-white rounded-3xl w-[30%] p-10">
                    <p className="w-[80%] mx-auto text-center 3xl:text-2xl">
                        You currently have no admins
                        they will appear here when you do
                        click on the plus icon to add an admin
                    </p>
                </div>
                <div>
                    <button onClick={AddAdminModal} className='bg-black text-white flex items-center p-2 text-xs 3xl:text-2xl rounded-2xl mt-4'>
                        <span><AiOutlinePlus /></span>
                        <span>Add admin</span>
                    </button>
                </div>
            </div>
            {modals.map(modal => (
                <MultiModal
                    key={modal.id}
                    id={modal.id}
                    title={modal.title}
                />
            ))}
        </div>
    )
}

export default AddAdmin_comp