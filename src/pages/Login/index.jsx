import { styled } from '@mui/material';
import banner_blog from '../../img/blog-la-gi.png';
import logo_blog from '../../img/blog_logo.jpg';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { axiosLogin } from '+/reduxToolkit/slides/loginSilde';
import { useNavigate } from 'react-router-dom';
import useEnhancedEffect from '@mui/material/utils/useEnhancedEffect';
import { useState } from 'react';
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [firstError, setFirstError] = useState(null);

    const { loading, error, accessToken } = useSelector((state) => state.loginReducer || {});

    const onSubmit = async (data) => {
        await dispatch(axiosLogin(data)).unwrap();
    };

    useEnhancedEffect(() => {
        if (!loading && !error && accessToken) {
            navigate('/');
        }
    }, [loading, error, accessToken, navigate]);

    const onError = (errorList) => {
        const fields = ['username', 'password'];
        for (const field of fields) {
            if (errorList[field]) {
                setFirstError(errorList[field].message);
                return;
            }
        }
        setFirstError(null);
    };
    return (
        <StyleLoginPage>
            <div className="content">
                <section className="my-2 mx-8 bg-white rounded-xl">
                    <div className="grid grid-cols-12 ">
                        <div className="col-span-5 max-sm:col-span-12">
                            <form onSubmit={handleSubmit(onSubmit, onError)}>
                                <div className="py-12 w-4/5 flex flex-col login_form">
                                    <div className="logo">
                                        <img src={logo_blog} alt="Logo" className="w-60 h-40" />
                                    </div>
                                    <h1 className="text-2xl mt-9 mb-4 font-bold">Đăng nhập Blog Admin</h1>
                                    <h2 className="text-base mb-4">
                                        Sử dụng username và password để truy cập vào tài khoản của bạn.
                                    </h2>
                                    {/* input username */}
                                    <div>
                                        <h2 className="text-base font-medium">Tên đăng nhập</h2>
                                        <input
                                            id="username"
                                            name="username"
                                            type="username"
                                            placeholder="abcxyz"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            {...register('username', { required: 'Bạn chưa nhập username !' })}
                                        />
                                        {errors.username && firstError === errors.username.message && (
                                            <p className="text-red-500 text-xs">{errors.username.message}</p>
                                        )}
                                    </div>
                                    {/* input password  */}
                                    <div>
                                        <h2 className="text-base font-medium">Mật khẩu</h2>
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            placeholder="********"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                            {...register('password', { required: 'Bạn chưa nhập password !' })}
                                        />
                                        {errors.password && firstError === errors.password.message && (
                                            <p className="text-red-500 text-xs">{errors.password.message}</p>
                                        )}
                                    </div>
                                    {error && <p className="text-red-500 text-xs">{error}</p>}
                                    {/* Button */}
                                    <div className="flex flex-col gap-4">
                                        <div className="flex justify-end">
                                            <a href="/forgot-password" className="forget font-medium">
                                                Quên mật khẩu?
                                            </a>
                                        </div>
                                        {/* Button đăng nhập */}
                                        <button
                                            type="submit"
                                            className="text-white btn_submit font-normal text-base py-2 px-5 rounded-md block w-full"
                                        >
                                            {loading ? 'Loading in ...' : 'Đăng nhập'}
                                        </button>

                                        <span className="text-sm">
                                            Bạn chưa có tài khoản?
                                            <a href="/sign_up" className="link_signUp text-base font-medium">
                                                Đăng ký ngay
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div className="col-span-7 max-sm:hidden">
                            <img src={banner_blog} className="h-full w-full rounded-xl" alt="Banner Blog" />
                        </div>
                    </div>
                </section>
            </div>
        </StyleLoginPage>
    );
};

const StyleLoginPage = styled('div')({
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

    '.login_form': {
        color: '#4a5569',
        margin: 'auto',
        maxWidth: 500,
    },
    '.forget': {
        color: '#376de9',
        textDecoration: 'none', // Loại bỏ gạch chân
        '&:hover': {
            textDecoration: 'underline', // Gạch chân khi hover
        },
    },

    '.link_signUp': {
        color: '#376de9',
    },

    '.btn_submit': {
        backgroundColor: '#2d65c3',
        color: '#fff',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        '&:hover': {
            backgroundColor: '#1a4b8b',
        },
        '&:disabled': {
            backgroundColor: '#8a9ab6',
        },
    },
});

export default Login;
