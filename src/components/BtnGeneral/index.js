const BtnGeneral = () => {


    const pressing = ()=>{

        console.log("press on")
    }

    return ( 
    <>
        <button onClick={pressing} style={{width: 80, height:40, background:"red", color: 'white' }} >
            Press Start    
        </button>          
    </>
     );
}
 
export default BtnGeneral;