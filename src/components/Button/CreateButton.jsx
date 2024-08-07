import styled from 'styled-components';

const ButtonCreate = (props) => {
    const { name } = props;
    return (
        <StyledButtonCrteate>
            <button className="button">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.25rem"
                    height="1.25rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                >
                    <path d="M12 19v-7m0 0V5m0 7H5m7 0h7"></path>
                </svg>
                {name}
            </button>
        </StyledButtonCrteate>
    );
};

const StyledButtonCrteate = styled.div`
    .button {
        cursor: pointer;
        font-size: 1rem;
        line-height: 1rem;
        padding: 0.525rem 0.9rem;
        color: rgb(242 242 242);
        background-color: rgb(79 70 229);
        background: #000;
        font-weight: 600;
        border-radius: 0.5rem;
        border-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        transition: all 0.35s linear;
    }

    .button:hover {
        box-shadow: inset 0 5px 25px 0 #af40ff, inset 0 10px 15px 0px #5b42f3, inset 0 5px 25px 0px #00ddeb;
    }
`;

export default ButtonCreate;
