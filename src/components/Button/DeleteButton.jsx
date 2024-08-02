import { RiDeleteBin6Line } from 'react-icons/ri';
import styled from 'styled-components';

const ButtonDelete = () => {
    return (
        <StyledButtonDelete>
            <button className="inline-flex items-center px-4 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110">
                <RiDeleteBin6Line className="h-5 w-5 mr-2" />
                Delete
            </button>
        </StyledButtonDelete>
    );
};

const StyledButtonDelete = styled.div``;

export default ButtonDelete;
