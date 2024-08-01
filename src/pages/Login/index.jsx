import { styled } from '@mui/material';
import banner_blog from '../../img/blog-la-gi.png';
import logo_blog from '../../img/blog_logo.jpg';

const Login = () => {
    return (
        <StyleLoginPage>
            <div className="content">
                <section className="my-2 mx-8 bg-white rounded-xl">
                    <div className="grid grid-cols-12 ">
                        <div className="col-span-5">
                            <form>
                                <div className="py-12 w-4/5 flex flex-col login_form">
                                    <div className="logo">
                                        <img src={logo_blog} alt="Logo" className="w-60 h-40" />
                                    </div>
                                    <h1 className="text-2xl mt-9 mb-4 font-bold">Đăng nhập Blog Admin</h1>
                                    <h2 className="text-base mb-4">
                                        Sử dụng email và password để truy cập vào tài khoản của bạn.
                                    </h2>
                                    {/* input email */}
                                    <div>
                                        <h2 className="text-base font-medium">Email</h2>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="example@email.com"
                                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                        />
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
                                        />
                                    </div>

                                    {/* Button */}
                                    <div className="flex flex-col gap-4">
                                        <div className="flex justify-end">
                                            <a href="/" className="forget font-medium">
                                                Quên mật khẩu?
                                            </a>
                                        </div>
                                        {/* Button đăng nhập */}
                                        <button
                                            type="submit"
                                            className="text-white btn_submit font-normal text-base py-2 px-5 rounded-md block w-full"
                                        >
                                            Đăng nhập
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
                        <div className="col-span-7 ">
                            <img src={banner_blog} className="h-full rounded-xl" alt="Banner Blog" />
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
    },

    '.login_form': {
        color: '#4a5569',
        maxWidth: 400,
        margin: 'auto',
    },
    '.forget': {
        color: '#376de9',
    },

    '.link_signUp': {
        color: '#376de9',
    },

    '.btn_submit': {
        backgroundColor: '#2d65c3',
        boxShadow: '0 2px 0 rgba(5, 138, 255, 0.06)',
    },
});

export default Login;
