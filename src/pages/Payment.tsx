function Payment(){
    return(
        <>
        <div style={{color:'white'}}>
            <p>Choose payment method</p>
            <select>
                <option value='card'>Card</option>
                <option value='transfer'>Bank Transfer</option>
                <option value='crypto'>Crytocurrency and Blockchain</option>
            </select>
            <button style={{padding:'13px'}}>ok</button>
        </div>
        </>
    )
}

export default Payment;