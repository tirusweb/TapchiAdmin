import { DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { FaUserPlus } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { apiCreateUser } from '../../../../../services/Users';

const DialogCreate = (props) => {
    const { handleCloseDialogCreate, handleLoadData } = props;
    const token = sessionStorage.getItem('accessToken');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [firstError, setFirstError] = useState(null);

    const onSubmit = async (data) => {
        const nowDate = new Date().toISOString().split('T')[0];
        const newData = {
            ...data,
            createdAt: nowDate,
            permission: {
                name: data.permission,
            },
            createAt: new Date(nowDate).getTime(),
            active: true,
        };
        console.log(newData);
        try {
            await apiCreateUser(newData, token);
            handleCloseDialogCreate();
            handleLoadData();
        } catch (err) {
            console.log('>>> Error fetching create user: ', err);
        }
    };

    const onError = (errorList) => {
        const fields = ['email', 'username', 'password', 'permission'];
        for (const field of fields) {
            if (errorList[field]) {
                setFirstError(errorList[field].message);
                return;
            }
        }
        setFirstError(null);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <DialogTitle id="responsive-dialog-title" className="flex flex-col items-center justify-center">
                <div className="mx-auto mb-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <FaUserPlus aria-hidden="true" className="h-6 w-6 text-green-400" />
                </div>
                <h1 className="font-semibold">Tạo tài khoản mới</h1>
            </DialogTitle>
            <DialogContent>
                <div className="mt-2 text-left">
                    <div className="mb-2">
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="example@email.com"
                            className="block w-full rounded-md border mb-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            {...register('email', {
                                required: 'Bạn chưa nhập email !',
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Email không hợp lệ',
                                },
                            })}
                        />
                        {errors.email && firstError === errors.email.message && (
                            <p className="text-red-500 text-xs">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="mb-2">
                        <label htmlFor="username" className="mb-2 block text-sm font-medium text-gray-700">
                            Tên đăng nhập
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            autoComplete="new-username"
                            placeholder="abcxyz"
                            className="block w-full rounded-md border mb-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            {...register('username', {
                                required: 'Bạn cần nhập tên đăng nhập !',
                                pattern: {
                                    value: /^[a-zA-Z0-9_]*$/,
                                    message: 'Tên đăng nhập không được chứa ký tự đặc biệt!',
                                },
                            })}
                        />
                        {errors.username && firstError === errors.username.message && (
                            <p className="text-red-500 text-xs">{errors.username.message}</p>
                        )}
                    </div>

                    <div className="mb-2">
                        <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
                            Mật khẩu
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="********"
                            autoComplete="new-password"
                            className="block w-full rounded-md border mb-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            {...register('password', {
                                required: 'Bạn cần nhập password !',
                              
                            })}
                        />
                        {errors.password && firstError === errors.password.message && (
                            <p className="text-red-500 text-xs">{errors.password.message}</p>
                        )}
                    </div>

                    <div className="mb-2">
                        <label className="mb-2 block text-sm font-medium text-gray-700">Quyền hạn:</label>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="admin"
                                name="permission"
                                value="admin"
                                className="mr-1"
                                {...register('permission', { required: 'Bạn cần chọn quyền hạn !' })}
                            />
                            <label htmlFor="admin" className="mr-4">
                                Admin
                            </label>
                            <input
                                type="radio"
                                id="user"
                                name="permission"
                                value="user"
                                className="mr-1"
                                {...register('permission', { required: 'Bạn cần chọn quyền hạn !' })}
                            />
                            <label htmlFor="user">User</label>
                        </div>
                        {errors.permission && firstError === errors.permission.message && (
                            <p className="text-red-500 text-xs">{errors.permission.message}</p>
                        )}
                    </div>
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
                    <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                        Thoát
                    </button>
                </div>
            </DialogActions>
        </form>
    );
};

export default DialogCreate;
