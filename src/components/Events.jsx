const Events = () => {

    // aksi belirtilmedikçe react değişkenleri static kabul eder => DOM manipülasyonunu azaltmak sebebiyle
    let info = 'EVENTS';

    const handleClick = () => {
        alert('Btn Clicked!');
    }

    const handleClear = (text) => {
        alert(text);
    }

    const handleChange = () => {
        info = 'HOOKS';
        console.log(info);
    }
    return (
        <div className="container text-center mt-4">
            <div className="display-4 text-danger m-4" >{info}</div>
            <button className="btn btn-warning" onClick={handleClick} >
                Click
            </button>

            <button className="btn btn-dark" onClick={() => handleClear('Clear Btn Pressed')} >
                Clear
            </button>

            <button className="btn btn-danger" onClick={handleChange} >
                Change
            </button>
        </div>
    );
}

export default Events;

// event function param varsa doğrudan trigger olmaması için arrow func. içinde çağrılabilir