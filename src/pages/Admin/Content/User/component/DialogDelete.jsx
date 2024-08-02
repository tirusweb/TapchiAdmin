import { DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

const DialogDelete = () => {
    return (
        <>
            <DialogTitle id="responsive-dialog-title" className="flex flex-col items-center justify-center">
                <div className="mx-auto mb-2 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-yellow-100 sm:mx-0 sm:h-10 sm:w-10">
                    <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <svg
                            class="h-6 w-6 text-red-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                            />
                        </svg>
                    </div>
                </div>
                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">
                    Xóa tài khoản
                </h3>
            </DialogTitle>
            <DialogContent sx={{ paddingBottom: 1 }}>
                <DialogContentText>
                    Bạn có chắc chắn muốn xóa tài khoản này không ? Tất cả dữ liệu của bạn sẽ bị xóa vĩnh viễn. Hành
                    động này không thể hoàn tác !
                </DialogContentText>
            </DialogContent>

            <DialogActions>
                <div class=" px-4 pb-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                        type="submit"
                        class="inline-flex w-full justify-center rounded-md bg-red-600 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    >
                        Xóa
                    </button>
                    <button
                        type="button"
                        class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset sm:mt-0 sm:w-auto"
                    >
                        Thoát
                    </button>
                </div>
            </DialogActions>
        </>
    );
};

export default DialogDelete;
