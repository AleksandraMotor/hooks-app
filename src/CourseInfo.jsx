
const CourseInfo = ({id, onClickHandler, title}) => {
    const handleOnclick = () => onClickHandler({
        id,
        type: 'REMOVE'
    });
    return (
        <div>
            <p>{title}</p>
            <button onClick={handleOnclick}>Usuń</button>
        </div>
    );
};

export default CourseInfo;