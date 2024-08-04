const HomeDashboard = () => {
    return (
        <>
            <div class="w-full md:w-4/4 p-7">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div class="from-teal-500 bg-gradient-to-br via-white-500 to-teal-700 text-white p-3 rounded">
                        <div className=" flex justify-between align-center">
                            <div className="flex  ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                                    />
                                </svg>

                                <div className="font-semibol">Thể loại</div>
                            </div>
                            <div class="text-sm  rounded-full bg-teal-600 shadow-lg pt-1 pb-1 pl-2 pr-2 ">5</div>
                        </div>
                        <div className="border-b mt-2 ml-0 mr-0 border-solid border-gray-400"></div>
                    </div>
                    <div class=" text-white bg-gradient-to-br from-yellow-400 via-white-500 to-yellow-600 p-3 rounded">
                        <div className=" flex justify-between align-center">
                            <div className="flex  ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                                    />
                                </svg>

                                <div className="font-semibol">Người Dùng</div>
                            </div>
                            <div class="text-sm  rounded-full bg-yellow-500 shadow-lg pt-1 pb-1 pl-2 pr-2 ">2</div>
                        </div>
                        <div className="border-b mt-2 ml-0 mr-0 border-solid border-gray-400"></div>
                    </div>
                    <div class="h-auto text-white bg-gradient-to-br from-pink-400 via-white-500 to-pink-600 p-3 rounded">
                        <div className=" flex justify-between align-center">
                            <div className="flex  ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                                    />
                                </svg>

                                <div className="font-semibol">Bài Đăng</div>
                            </div>
                            <div class="text-sm  rounded-full bg-pink-600 shadow-lg pt-1 pb-1 pl-2 pr-2 ">93</div>
                        </div>
                        <div className="border-b mt-2 ml-0 mr-0 border-solid border-gray-400"></div>

                        <div className="mt-4 flex">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-4 "
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                                />
                            </svg>
                            <div className=" text-xs font-semibol ml-1">Lượt xem</div>
                            <div class="text-xs ml-1 rounded-full bg-pink-600 shadow-lg pt-1 pb-1 pl-2 pr-2 ">9888</div>
                        </div>
                    </div>
                    <div class="h-auto text-white bg-gradient-to-br from-blue-400 via-white-500 to-pink-600 p-3 rounded">
                        <div className=" flex justify-between align-center">
                            <div className="flex  ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                                    />
                                </svg>

                                <div className="ml-1 font-semibol">Bình Luận</div>
                            </div>
                            <div class="text-sm  rounded-full bg-pink-400 shadow-lg pt-1 pb-1 pl-2 pr-2 ">93</div>
                        </div>
                        <div className="border-b mt-2 ml-0 mr-0 border-solid border-gray-400"></div>

                        <div className="mt-4 flex justify-between">
                            <div className="flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                                    />
                                </svg>

                                <div className=" text-xs font-semibol ml-1">Ẩn</div>
                            </div>
                            <div className="flex">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                                    />
                                </svg>

                                <div className="text-xs font-semibol ml-1">Thích</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <div class="bg-white p-4 rounded shadow-md mb-6">
                            <div class="font-semibold mb-2">Bài viết có lượt xem nhiều nhất</div>
                            <table class="min-w-full">
                                <thead>
                                    <tr className="">
                                        <th className="w-[20px]">#</th>
                                        <th className="text-left ml-2 w-[200px]">Bài đăng</th>
                                        <th className="text-left">Lượt xem</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="mt-2">
                                        <td className="text-center">1</td>
                                        <td className="text-left ">Tạp chí KHCN Số 41</td>
                                        <td className=" font-semibold  text-white text-left">
                                            <div className="w-full text-left flex align-left justify-start ">
                                                <p className="bg-purple-400 rounded text-left w-auto pl-1 pr-1 h-full">
                                                    991
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="mt-2">
                                        <td className="text-center">1</td>
                                        <td className="text-left ">Tạp chí KHCN Số 41</td>
                                        <td className=" font-semibold  text-white text-left">
                                            <div className="w-full text-left flex align-left justify-start ">
                                                <p className="bg-purple-400 rounded text-left w-auto pl-1 pr-1 h-full">
                                                    991
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="mt-2">
                                        <td className="text-center">1</td>
                                        <td className="text-left ">Tạp chí KHCN Số 41</td>
                                        <td className=" font-semibold  text-white text-left">
                                            <div className="w-full text-left flex align-left justify-start ">
                                                <p className="bg-purple-400 rounded text-left w-auto pl-1 pr-1 h-full">
                                                    991
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div>
                        <div class="bg-white p-4 rounded shadow-md mb-4">
                            <div class="font-semibold mb-2">Bài viết được bình luận nhiều nhất</div>
                            <table class="min-w-full">
                                <thead>
                                    <tr>
                                        <th className="w-[20px]">#</th>
                                        <th className="text-left ml-2 w-[180px]">Bài đăng</th>
                                        <th className="text-left">Bình Luận</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="mt-2">
                                        <td className="text-center">1</td>
                                        <td className="text-left ">Tạp chí KHCN Số 41</td>
                                        <td className=" font-semibold  text-white text-left">
                                            <div className="w-full text-left flex align-left justify-start ">
                                                <p className="bg-green-400 rounded text-left w-auto pl-1 pr-1 h-full">
                                                    91
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="mt-2">
                                        <td className="text-center">1</td>
                                        <td className="text-left ">Tạp chí KHCN Số 41</td>
                                        <td className=" font-semibold  text-white text-left">
                                            <div className="w-full text-left flex align-left justify-start ">
                                                <p className="bg-green-400 rounded text-left w-auto pl-1 pr-1 h-full">
                                                    91
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr className="mt-2">
                                        <td className="text-center">1</td>
                                        <td className="text-left ">Tạp chí KHCN Số 41</td>
                                        <td className=" font-semibold  text-white text-left">
                                            <div className="w-full text-left flex align-left justify-start ">
                                                <p className="bg-green-400 rounded text-left w-auto pl-1 pr-1 h-full">
                                                    91
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div>
                        <div className="bg-white p-4 rounded shadow-md mb-4">
                            <div className="font-semibold mb-2">Bình Luận</div>
                            <table className="min-w-full">
                                <thead>
                                    <tr>
                                        <th className="text-left ">#</th>
                                        <th className="text-left ">Người dùng</th>
                                        <th className="text-left ">Bình luận</th>
                                        <th className="text-left ">Trạng Thái</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <tr>
                                        <td>1</td>
                                        <td>Tạp chí NCKH Số 11</td>
                                        <td>0</td>
                                    </tr> */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeDashboard;
