import "../Assets/CSS/button.css"

function CustomButton({ name = 'Default button', bgColor = 'blue', cr = 'white'}){

    return(
        <div>
            <button 
            style={{
                color :'black',
                backgroundColor: 'greenyellow',
                fontsize: '20px',
                boxShadow: '2px 2px 3px',
                borderRadius: '10px',
                padding:'2%'
            }}
            >Submit button</button>
        </div>
    )
}
export default CustomButton