import { InputGroup, Input } from "reactstrap";


const FormLastName = () => {

    return(

        <InputGroup className="m-5">
                <span className="input-group-text"> Nom</span>
                <Input type="text" className="col-8"></Input>
            </InputGroup>
    )
}

export default FormLastName ;