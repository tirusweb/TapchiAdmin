import { DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { FaUserPlus } from 'react-icons/fa';

const DialogCreate = () => {
    return (
        <form>
            <DialogTitle id="responsive-dialog-title" className="flex flex-col items-center justify-center">
                <div className="mx-auto mb-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <FaUserPlus aria-hidden="true" className="h-6 w-6 text-green-400" />
                </div>
                <h1 className="font-semibold">Tạo tài khoản mới</h1>
            </DialogTitle>
            <DialogContent>
                {' '}
                <div className="mt-2 text-left">
                    <h2 className="mb-2">Email</h2>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="example@email.com"
                        className="flex h-10 w-full rounded-md border mb-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    <h2 className="mb-2">Tên đăng nhập</h2>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="abcxyz"
                        className="flex h-10 w-full rounded-md border mb-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    <h2 className="mb-2">Ngày tạo</h2>
                    <input
                        id="date"
                        name="date"
                        type="date"
                        className="flex h-10 w-full rounded-md border mb-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    <h2 className="mb-2">Mật khẩu</h2>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder="********"
                        className="flex h-10 w-full rounded-md border mb-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    <h2 className="inline mr-6">Quyền hạn:</h2>
                    <input type="radio" id="admin" name="permission" value="1" className="mr-1" />
                    <label for="admin">Admin</label>
                    <input type="radio" id="user" name="permission" value="0" className="ml-4 mr-1" />
                    <label for="user">User</label>
                </div>
            </DialogContent>
            <DialogActions>
                <div className="bg-gray-50 px-4 pb-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                    >
                        Thêm mới
                    </button>
                    <button className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                        Thoát
                    </button>
                </div>
            </DialogActions>
        </form>
    );
};

export default DialogCreate;
