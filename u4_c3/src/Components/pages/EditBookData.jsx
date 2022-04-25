import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { Input } from "./Login";

// add style for form
export const Form = styled.form`
`;
// add style for text area
export const Textarea = styled.textarea`

`;


export const EditBookData = () => {
  // const [paramas, setParamas] = useState('');
  const { id } = useParams();

  const [formdata, setFormData] = useState({
    thumbnailUrl: '',
    longDescription: ''
  })

  const changeInput = (e) => {
    // console.log(formdata)

    setFormData((perv) => {
      // console.log(perv);
      return {
        ...perv,
        [e.target.name]: e.target.value
      }
    })

  }
  const handleUpdate = (e) => {
    e.preventDefault();
    // make a PATCH request to http://localhost:8080/books/${id} and update thubnail and long description fields
    axios.patch(`http://localhost:8080/books/${id}`, {
      ...formdata
    }).then((res) => console.log(res.data))

    // on successfull request navigate to previous page
  };



  return (
    <>
      <Form onSubmit={handleUpdate}>
        <Input
          name="thumbnailUrl"
          data-testid="update-form-thumbnail"
          placeholder="Enter updated thumbnail url"
          onChange={changeInput}
        />
        <Textarea
          data-testid="update-form-description"
          placeholder="Update long Description"
          name="longDescription"
          onChange={changeInput}
        />
        <Input dat-testid="update-form-submit" type="submit" value="Update" />
      </Form>
    </>
  );
};
