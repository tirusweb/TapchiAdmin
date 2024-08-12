import styled from 'styled-components';
import banner_blog from '../../img/blog-la-gi.png';
import logo_blog from '../../img/blog_logo.jpg';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        axios
            .post(`http://tapchikhcn.uneti.edu.vn/api/user/forgot?email=${data.email}`)
            .then(() => {
                navigate('/verify-otp', { state: { email: data?.email } });
            })
            .catch((err) => console.log(err));
    };

    return (
        <StyleForgot>
            <div className="content">
                <section className="my-2 mx-8 bg-white rounded-xl box">
                    <div className="grid grid-cols-12 ">
                        <div className="col-span-5 max-sm:col-span-12">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="py-12 w-4/5 flex flex-col forgot_form">
                                    <div className="logo">
                                        <img src={logo_blog} alt="Logo" className="w-60 h-40" />
                                    </div>
                                    <h1 className="text-2xl mb-4 font-bold">Yêu cầu thay đổi mật khẩu</h1>
                                    <h2 className="text-base mb-4">
                                        Nhập email liên kết với tài khoản của bạn, chúng tôi sẽ gửi cho bạn email với
                                        hướng dẫn để cài đặt lại mật khẩu
                                    </h2>
                                    {/* input email */}
                                    <div className="mb-7">
                                        <h2 className="text-base font-medium mb-2">Email</h2>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Nhập Email"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            {...register('email', { required: 'Bạn cần nhập email' })}
                                        />
                                    </div>
                                    {/* Button */}
                                    <div className="flex flex-col gap-4">
                                        {/* Button đăng nhập */}
                                        <button
                                            type="submit"
                                            className="text-white btn_submit font-normal text-base py-2 px-5 rounded-md block w-full"
                                        >
                                            Gửi yêu cầu
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-span-7 max-sm:hidden">
                            <img src={banner_blog} className="img_banner w-full" alt="Banner Blog" />
                        </div>
                    </div>
                </section>
            </div>
        </StyleForgot>
    );
};

export default ForgotPassword;

const StyleForgot = styled('div')({
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
