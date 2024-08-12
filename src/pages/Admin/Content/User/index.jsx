import ButtonCreate from '+/components/Button/CreateButton';
import ButtonDelete from '+/components/Button/DeleteButton';
import ButtonEdit from '+/components/Button/EditButton';
import { Dialog, useMediaQuery, useTheme } from '@mui/material';
import StyledUser from './Styled.User';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import DialogCreate from './component/DialogCreate';
import { useState, useEffect } from 'react';
import DialogEdit from './component/DialogEdit';
import DialogDelete from './component/DialogDelete';
import { useDispatch, useSelector } from 'react-redux';
import { axiosUsers, selectUsers } from '+/reduxToolkit/slides/usersSlide';
import { format } from 'date-fns';
import SimplePagination from '+/components/Pagination';

const UserDashboard = () => {
    const [openDialogCreate, setOpenDialogCreate] = useState(false);
    const [openDialogEdit, setOpenDialogEdit] = useState(false);
    const [openDialogDelete, setOpenDialogDelete] = useState(false);
    const [selectedUser, setSelectedUser] = useState();
    const [reloadData, setReloadData] = useState();

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const dispatch = useDispatch();
    const users = useSelector(selectUsers);
    const currentPage = useSelector((state) => state.usersReducer.currentPage);
    const pageSize = useSelector((state) => state.usersReducer.pageSize);
    const totalPages = useSelector((state) => state.usersReducer.totalPages);

    const showDialogCreate = () => {
        setOpenDialogCreate(true);
    };

    const handleNextPage = () => {
        dispatch(axiosUsers({ currentPage: currentPage + 1, pageSize: pageSize }));
    };

    const handlePrevPage = () => {
        dispatch(axiosUsers({ currentPage: currentPage - 1, pageSize: pageSize }));
    };
    const showDialogEdit = (user) => {
        setOpenDialogEdit(true);
        setSelectedUser(user);
    };

    const showDialogDelete = (user) => {
        setOpenDialogDelete(true);
        setSelectedUser(user);
    };

    const handleCloseDialogCreate = () => {
        setOpenDialogCreate(false);
    };

    const handleCloseDialogEdit = () => {
        setOpenDialogEdit(false);
    };

    const handleCloseDialogDelete = () => {
        setOpenDialogDelete(false);
    };

    const handleLoadData = () => {
        setReloadData(!reloadData);
    };

    useEffect(() => {
        dispatch(axiosUsers({ currentPage, pageSize }));
    }, [reloadData, dispatch, currentPage, pageSize]);

    return (
        <StyledUser>
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Manage Users</h2>
                {/* Button thêm account */}
                <div onClick={showDialogCreate}>
                    <ButtonCreate name={'New user'} />
                </div>
            </div>
            <div className="bg-blue-300 mt-5 py-2 flex justify-around items-center rounded-2xl">
                <h2 className="text-xl text-white font-semibold">Danh sách User</h2>

                {/* thanh sreach */}
                <form className="form">
                    <button type="submit">
                        <HiMagnifyingGlass />
                    </button>
                    <input className="input" placeholder="Type your text" required="" type="text" />
                </form>
            </div>
            <div className="flex flex-col justify-between mt-4 container mx-auto px-4 sm:px-8 relative">
                {/* Table */}
                <div className="-mx-4 sm:-mx-8 px-3 sm:px-8 py-3 overflow-x-auto">
                    <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        #
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Email
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Tên đăng nhập
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Ngày tạo
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        Quyền
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"></th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {users?.map((user, i) => (
                                    <tr key={i} className="hover:bg-slate-100">
                                        <td className="px-5 border-b border-gray-200  text-sm">{user.id}</td>
                                        <td className="px-5 border-b border-gray-200  text-sm">
                                            <div className="flex">{user.email}</div>
                                        </td>
                                        <td className="px-5 border-b border-gray-200 text-sm">
                                            <p className="text-gray-600 whitespace-no-wrap">{user.username}</p>
                                        </td>
                                        <td className="px-5 border-b border-gray-200 text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">
                                                {format(new Date(user.createdAt), 'dd/MM/yyyy HH:mm:ss')}
                                            </p>
                                        </td>
                                        <td className="px-5 border-b border-gray-200 text-sm">
                                            <p className="text-gray-900 whitespace-no-wrap">{user.permission}</p>
                                        </td>
                                        <td className="px-5 border-b border-gray-200 text-sm">
                                            <span onClick={() => showDialogEdit(user)}>
                                                <ButtonEdit />
                                            </span>
                                        </td>
                                        <td className="px-5 py-2 border-b border-gray-200 text-sm text-left">
                                            <span onClick={() => showDialogDelete(user)}>
                                                <ButtonDelete />
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Phân trang */}
                <div className="flex justify-end mr-10 mb-6">
                    <SimplePagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        handleNextPage={handleNextPage}
                        handlePrevPage={handlePrevPage}
                    />
                </div>
            </div>
            {/* Dialog Create User */}
            <Dialog
                open={openDialogCreate}
                onClose={handleCloseDialogCreate}
                fullScreen={fullScreen}
                aria-labelledby="responsive-dialog-title"
                maxWidth="xs"
                fullWidth={true}
            >
                <DialogCreate {...{ handleCloseDialogCreate, handleLoadData }} />
            </Dialog>

            {/* Dialogg Edit User */}
            <Dialog
                open={openDialogEdit}
                onClose={handleCloseDialogEdit}
                fullScreen={fullScreen}
                aria-labelledby="responsive-dialog-title"
                maxWidth="xs"
                fullWidth={true}
            >
                <DialogEdit {...{ handleCloseDialogEdit, selectedUser, handleLoadData }} />
            </Dialog>
            {/* Dialogg Delete User */}
            <Dialog
                open={openDialogDelete}
                onClose={handleCloseDialogDelete}
                fullScreen={fullScreen}
                aria-labelledby="responsive-dialog-title"
                maxWidth="xs"
                fullWidth={true}
            >
                <DialogDelete {...{ handleCloseDialogDelete, selectedUser, handleLoadData }} />
            </Dialog>
        </StyledUser>
    );
};

export default UserDashboard;
