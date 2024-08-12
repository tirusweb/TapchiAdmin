import React, { useState } from 'react';
import CreateFile from './EditFile/CreateFile';
import UpdateFile from './EditFile/UpdateFile';

const File = ({ onBack }) => {
    const [files, setFiles] = useState([
        {
            id: 1,
            name: 'Nghiên cứu tổng quan về bộ xúc tác tạo khí giàu hydro lắp trên động cơ xăng',
            path: './public/upload/2024-05-17-22-38-55-1715960335636.pdf',
        },
        {
            id: 2,
            name: 'Các yếu tố ảnh hưởng đến động lực làm việc của người lao động tại các ngân hàng thương mại trên địa bàn thành phố Nam Định',
            path: './public/upload/2024-05-17-22-38-55-17159603356325.pdf',
        },
    ]);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
    const [currentFile, setCurrentFile] = useState(null);

    const handleCreate = (newFile) => {
        setFiles([...files, newFile]);
        setIsCreateModalOpen(false);
    };

    const handleUpdate = (updatedFile) => {
        setFiles(files.map(file => file.id === updatedFile.id ? updatedFile : file));
        setIsUpdateModalOpen(false);
        setCurrentFile(null);
    };

    const handleDelete = (id) => {
        setFiles(files.filter(file => file.id !== id));
    };

    return (
        <div>
            <div className="mt-0 flex items-center justify-start">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                </svg>
                <button onClick={onBack} className="mb-4 pl-1 pt-4 rounded">
                    Back
                </button>
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-start">
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
                            d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z"
                        />
                    </svg>

                    <h2 className="text-1xl ml-1 font-bold uppercase">File</h2>
                </div>
                <button
                    onClick={() => setIsCreateModalOpen(true)}
                    className="bg-green-500 text-xs hover:bg-green-600 text-white font-normal py-2 px-4 rounded"
                >
                    CREATE
                </button>
            </div>
            <table className="min-w-full mt-3 bg-white">
                <thead>
                    <tr>
                        <th className="text-blue-500 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">#</th>
                        <th className="text-blue-500 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">Tên</th>
                        <th className="text-blue-500 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">Đường dẫn</th>
                        <th className="text-blue-500 px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold uppercase tracking-wider">Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {files.map((file, index) => (
                        <tr className="odd:bg-gray-100" key={file.id}>
                            <td className="border-none px-4 py-2 text-gray-600 text-center">{index + 1}</td>
                            <td className="border-none px-4 py-2 text-gray-600">{file.name}</td>
                            <td className="border-none px-4 py-2 text-gray-600">{file.path}</td>
                            <td className="border-none px-4 py-2 text-gray-600 flex items-center gap-2">
                                <button
                                    onClick={() => {
                                        setCurrentFile(file);
                                        setIsUpdateModalOpen(true);
                                    }}
                                    className="bg-blue-400 font-normal shadow-xl px-4 py-2 text-xs hover:bg-blue-500 text-white rounded uppercase"
                                >
                                    Update
                                </button>
                                <button
                                    onClick={() => handleDelete(file.id)}
                                    className="bg-red-400 text-xs shadow-xl ml-2 hover:bg-red-500 px-4 py-2 text-white font-normal rounded uppercase"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Create File Modal */}
            {isCreateModalOpen && (
                <CreateFile
                    onSave={handleCreate}
                    onClose={() => setIsCreateModalOpen(false)}
                />
            )}

            {/* Update File Modal */}
            {isUpdateModalOpen && currentFile && (
                <UpdateFile
                    file={currentFile}
                    onSave={handleUpdate}
                    onClose={() => setIsUpdateModalOpen(false)}
                />
            )}
        </div>
    );
};

export default File;
