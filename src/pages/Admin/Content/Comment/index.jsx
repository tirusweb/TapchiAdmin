import ButtonCreate from '+/components/Button/CreateButton';
import ButtonDelete from '+/components/Button/DeleteButton';
import ButtonEdit from '+/components/Button/EditButton';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import StyledCommentDashboard from './Styled.Comment';

const CommentDashboard = () => {
    return (
        <StyledCommentDashboard>
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Manage Comment</h2>
                {/* Button thêm account */}
                <div>
                    <ButtonCreate name={'New Comment'} />
                </div>
            </div>
            <div className="bg-lime-700 mt-6 py-2 flex justify-around items-center rounded-2xl">
                <h2 className="text-xl text-white font-semibold">Danh sách Comment</h2>

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
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-3 overflow-x-auto">
                    <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        #
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        user id
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        post id
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        comment
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        status
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        setting
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"></th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-5 border-b border-gray-200 bg-white text-sm">1</td>
                                    <td className="px-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex">Tệp tin</div>
                                    </td>
                                    <td className="px-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-600 whitespace-no-wrap">
                                            http://localhost/tckhcn-uneti.vn/jhdkshfjhd
                                        </p>
                                    </td>
                                    <td className="px-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">main menu</p>
                                    </td>
                                    <td className="px-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">main menu</p>
                                    </td>
                                    <td className="px-5 border-b border-gray-200 bg-white text-sm">
                                        <p className="text-gray-900 whitespace-no-wrap">main menu</p>
                                    </td>
                                    <td className="px-5 border-b border-gray-200 bg-white text-sm">
                                        <span>
                                            <ButtonEdit />
                                        </span>
                                    </td>
                                    <td className="px-5 py-2 border-b border-gray-200 bg-white text-sm text-left">
                                        <span>
                                            <ButtonDelete />
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Phân trang */}
                {/* <div className="flex justify-end mr-10 mb-6">
                    <SimplePagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        handleNextPage={handleNextPage}
                        handlePrevPage={handlePrevPage}
                    />
                </div> */}
            </div>
        </StyledCommentDashboard>
    );
};

export default CommentDashboard;
