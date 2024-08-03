import { DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { BsFillMenuButtonWideFill } from 'react-icons/bs';

const DialogCreateMenu = () => {
    return (
        <>
            <form>
                <DialogTitle id="responsive-dialog-title" className="flex flex-col items-center justify-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                        <BsFillMenuButtonWideFill aria-hidden="true" className="h-6 w-6 text-green-400" />
                    </div>
                    <h1 className="font-semibold">Tạo menu mới</h1>
                </DialogTitle>
                <DialogContent>
                    <div className="mt-2 text-left">
                        <h2 className="mb-2">Name</h2>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="abcxyz"
                            className="flex h-10 w-full rounded-md border mb-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                        <h2 className="mb-2">Url</h2>
                        <input
                            id="url"
                            name="url"
                            type="file"
                            className="flex h-10 w-full rounded-md border mb-2 border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                        <h2 className="mb-2">Parent ID</h2>
                        <select
                            id="category_id"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                            <option value="">Chọn loại sản phẩm</option>
                            <option value="">Tập tin</option>
                            <option value="">Home</option>
                        </select>
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
                        <button className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                            Thoát
                        </button>
                    </div>
                </DialogActions>
            </form>
        </>
    );
};

export default DialogCreateMenu;
