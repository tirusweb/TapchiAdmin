import ButtonCreate from '+/components/Button/CreateButton';
import StyledSetting from './Styled.Setting';

const SettingDashboard = () => {
    return (
        <StyledSetting>
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Website Setting</h2>
                {/* Button thêm account */}
                <div>
                    <ButtonCreate name={'Set Web Setting'} />
                </div>
            </div>

            <div className="flex flex-col justify-between mt-4 container mx-auto px-4 sm:px-8 relative">
                {/* Table */}
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-3 overflow-x-auto">
                    <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        name
                                    </th>
                                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                                        value
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">Title</td>
                                    <td className="px-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex">online news</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">Description</td>
                                    <td className="px-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex">online news</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">Key words</td>
                                    <td className="px-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex">online news</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">Logo</td>
                                    <td className="px-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex">online news</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">Icon</td>
                                    <td className="px-5 border-b border-gray-200 bg-white text-sm">
                                        <div className="flex">online news</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </StyledSetting>
    );
};

export default SettingDashboard;
