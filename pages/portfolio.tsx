const generateboxs = (numBox = 10) => {
    const elements = [];
    for (let index = 0; index < numBox; index++) {
        elements.push(
            <div
                key={index}
                style={{
                    height: 50,
                    width: 50,
                    backgroundColor: '#FFFFFF',
                    marginBottom: 6
                }}
            >{index + 1}</div>
        );
    }
    return elements;
}

const Portfolio = () => {
    return (
        <>
            {generateboxs(5)}
        </>
    )
};

export default Portfolio;