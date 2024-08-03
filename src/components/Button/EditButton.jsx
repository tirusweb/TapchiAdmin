import { MdEdit } from 'react-icons/md';
import styled from 'styled-components';

const ButtonEdit = () => {
    return (
        <StyledButtonEdit>
            <button className="inline-flex items-center px-4 py-2 bg-yellow-600 transition ease-in-out delay-75 hover:bg-yellow-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110">
                <MdEdit className="h-5 w-5 mr-2" />
                Edit
            </button>
        </StyledButtonEdit>
    );
};

const StyledButtonEdit = styled.div``;

export default ButtonEdit;
