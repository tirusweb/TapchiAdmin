import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import banner_blog from '../../img/blog-la-gi.png';
import { useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
const VerifyOTP = () => {
    const location = useLocation();
    const email = location.state?.email;
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { register, handleSubmit, watch, setFocus } = useForm({
        defaultValues: {
            otp1: '',
            otp2: '',
            otp3: '',
            otp4: '',
        },
    });

    const onSubmitOTP = async (data) => {
        const code = [data.otp1, data.otp2, data.otp3, data.otp4].join('');
        const { password, password2 } = data;
        if (password !== password2) {
            setMessage('Mật khẩu không khớp.');
            return;
        }

        try {
            const response = await axios.post('http://tapchikhcn.uneti.edu.vn/api/user/resetPasword', {
                code,
                email,
                password,
                password2,
            });

            if (response.data) {
                setMessage('Mật khẩu đã được thay đổi thành công!');
                navigate('/logins');
            }
        } catch (error) {
            setMessage('Lỗi kết nối đến server. Vui lòng thử lại.');
        }
    };

    const otpValues = watch(['otp1', 'otp2', 'otp3', 'otp4']);

    useEffect(() => {
        otpValues.forEach((value, index) => {
            if (value.length === 1 && index < 3) {
                setFocus(`otp${index + 2}`);
            }
        });
    }, [otpValues, setFocus]);

    return (
        <StyleVerifyOTP>
            <div className="content">
                <section className="my-2 mx-8 bg-white rounded-xl box">
                    <div className="grid grid-cols-12">
                        <div className="col-span-5 max-sm:col-span-12">
                            <div className="py-12 w-4/5 flex flex-col forgot_form">
                                <h1 className="text-2xl mb-4 font-bold">Thay đổi mật khẩu của bạn</h1>
                                <h2 className="text-base mb-4">
                                    Nhập mã otp được nhận ở email của bạn và mật khẩu với ban muốn thay đổi
                                </h2>
                                {/* Form nhập OTP */}
                                <form id="otp-form" onSubmit={handleSubmit(onSubmitOTP)}>
                                    <h2 className="text-base font-medium mb-2">Mã OTP</h2>
                                    <div className="flex items-center justify-center gap-3">
                                        <input
                                            {...register('otp1', { required: true, maxLength: 1 })}
                                            type="text"
                                            className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                            maxLength="1"
                                        />
                                        <input
                                            {...register('otp2', { required: true, maxLength: 1 })}
                                            type="text"
                                            className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                            maxLength="1"
                                        />
                                        <input
                                            {...register('otp3', { required: true, maxLength: 1 })}
                                            type="text"
                                            className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                            maxLength="1"
                                        />
                                        <input
                                            {...register('otp4', { required: true, maxLength: 1 })}
                                            type="text"
                                            className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-slate-100 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                                            maxLength="1"
                                        />
                                    </div>
                                    <div className="mb-7">
                                        <h2 className="text-base font-medium mb-2">Mật khẩu mới</h2>
                                        <input
                                            type="password"
                                            placeholder="*******"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            {...register('password', { required: true })}
                                        />
                                    </div>
                                    <div className="mb-7">
                                        <h2 className="text-base font-medium mb-2">Xác minh mật khẩu mới</h2>
                                        <input
                                            type="password"
                                            placeholder="*******"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            {...register('password2', { required: true })}
                                        />
                                        {message && <p className="text-red-500 ">{message}</p>}
                                    </div>
                                    <div className="max-w-[260px] mx-auto mt-4">
                                        <button
                                            type="submit"
                                            className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-indigo-500 px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors duration-150"
                                        >
                                            Xác minh email
                                        </button>
                                    </div>
                                </form>
                                <div className="text-sm text-slate-500 mt-4">
                                    Bạn không nhận được otp?{' '}
                                    <a className="font-medium text-indigo-500 hover:text-indigo-600" href="/login">
                                        Gửi lại
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-span-7 max-sm:hidden">
                            <img src={banner_blog} className="img_banner w-full" alt="Banner Blog" />
                        </div>
                    </div>
                </section>
            </div>
        </StyleVerifyOTP>
    );
};

export default VerifyOTP;

const StyleVerifyOTP = styled('div')({
    backgroundColor: '#314775',
    padding: 0,
    '.content': {
        minHeight: '100vh',
        maxWidth: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },

    '.forgot_form': {
        color: '#333',
        maxWidth: 500,
        margin: 'auto',
        padding: '1rem',
        backgroundColor: '#fff',
    },

    '.forget': {
        color: '#376de9',
    },

    '.link_signUp': {
        color: '#376de9',
    },

    '.btn_submit': {
        backgroundColor: '#007bff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        border: 'none',
        color: '#fff',
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        '&:hover': {
            backgroundColor: '#0056b3',
        },
    },

    '.img_banner': {
        height: '90vh',
        objectFit: 'cover',
        borderRadius: '0 8px 8px 0',
    },
});
