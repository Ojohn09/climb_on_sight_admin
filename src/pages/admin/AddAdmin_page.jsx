
import AppLayout_HOC from '../../components/layout/AppLayout_HOC'
import AddAdmin_comp from '../../components/pages/Admin/AddAdmin_comp'

function AddAdmin_page() {
    return (
        <AppLayout_HOC>
            <div>
                <AddAdmin_comp />
            </div>
        </AppLayout_HOC>
    )
}

export default AddAdmin_page