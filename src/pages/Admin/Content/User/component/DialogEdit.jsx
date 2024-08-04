import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { apiGetUserDetail } from '+/services/Users';
const { DialogTitle, DialogContent, DialogActions } = require('@mui/material');
const { FaUserEdit } = require('react-icons/fa');

const DialogEdit = (props) => {
    const { handleCloseDialogEdit, selectUser: id, handleLoadData } = props;
    const { user, setUser } = useState();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();

    const [firstError, setFirstError] = useState(null);

    const fetchUserDetail = async () => {
        try {
            const res = await apiGetUserDetail(id);
            console.log(res.data);

            const userDetail = res.data;
            setValue('email', userDetail.email);
            setValue('username', userDetail.username);
            setValue('permission', userDetail.permission);
        } catch (err) {
            console.log('>>> Error Fetching user detail: ', err);
        }
    };

    const onSubmit = async (data) => {
        await axios
            .put(`https://66adcf04b18f3614e3b5efd7.mockapi.io/api/Users/${id}`, data)
            .then(() => {
                handleCloseDialogEdit();
                handleLoadData();
            })
            .catch((err) => console.log('Error fetching User: ', err));
    };

    const onError = (errorList) => {
        const fields = ['email', 'username', 'permission'];
        for (const field of fields) {
            if (errorList[field]) {
                setFirstError(errorList[field].message);
                return;
            }
        }
        setFirstError(null);
    };

    useEffect(() => {
        fetchUserDetail();
    }, [setValue]);

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <DialogTitle id="responsive-dialog-title" className="flex flex-col items-center justify-center">
                <div className="mx-auto mb-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10">
                    <FaUserEdit aria-hidden="true" className="h-6 w-6 text-yellow-400" />
                </div>
                <h1 className="font-semibold">Sửa thông tin tài khoản {id}</h1>
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
                        <label className="mb-2 block text-sm font-medium text-gray-700">Quyền hạn:</label>
                        <div className="flex items-center">
                            <input
                                type="radio"
                                id="admin"
                                name="permission"
                                value="1"
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
                                value="0"
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
                <div className="px-4 pb-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                        type="submit"
                        className="inline-flex w-full justify-center rounded-md bg-yellow-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 sm:ml-3 sm:w-auto"
                    >
                        Sửa tài khoản
                    </button>
                    <button
                        onClick={handleCloseDialogEdit}
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                        Thoát
                    </button>
                </div>
            </DialogActions>
        </form>
    );
};

export default DialogEdit;
