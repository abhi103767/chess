import { useNavigate } from "react-router-dom"




const InputFrom = ({ socket,username, setUsername }) => {

     const navigate = useNavigate()


    const onSubmit = () => {
       
        navigate('/loading')
    }

    return <div style={{ width: '300px', height: "200px", margin: 'auto', marginTop: "50px" }}>
        <input placeholder="Please Enter Your Name." style={{ height: "40px" }} onChange={(e) => setUsername(e.target.value)} ></input>
        <button style={{ margin: "10px", cursor: "pointer", height: "40px" }} onClick={
            () =>  {onSubmit()}
            }>Play the Game </button>
    </div>


}

export default InputFrom