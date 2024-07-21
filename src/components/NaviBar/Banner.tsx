import './Banner.css';

const Banner = () => {
    const buttons = ["Home", "Extracurriculars", "Press", "Award", "More"];
    const renderButtons = () => {
        return buttons.map((buttonText, index) => (
            <button key={index} className="nav-button">
                {buttonText}
            </button>
        ));
    };
    return (
        <div className="banner">
            <div className="username">ChongDa Zhang</div>
            {renderButtons()}

        </div>
    );
};

export default Banner;
