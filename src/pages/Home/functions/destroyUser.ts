import Swal from "sweetalert2";
import deleteUser from "../../../functions/deleteUser";

const destroyUser = async (id: number) => {
    const response = await deleteUser(id);

    if (response.error) {
        Swal.fire({
            icon: 'error',
            title: response.error
        });
    }

    if (response.message) {
        Swal.fire({
            icon: 'success',
            title: response.message
        });
    }
}

export default destroyUser;
