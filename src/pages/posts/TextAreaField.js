import { useState } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/esm/Button";

export const TextAreaLabel = styled.div`
    border: none;
    display: flex;
    color: #6c757d;
    gap: 10px;
    height:   
`

export const TextAreaField = styled.textarea`
    border: 1px solid #ced4da;
    outline: none;
    transition: box-shadow 0.2s ease-in-out;
    &:focus {
        box-shadow: 0px 0px 5px 2px rgba(206, 212, 218, 0.5);
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    gap: 5px;
`

function TextArea({Icon, label, name, onSubmit}) {

  const [showTextArea, setShowTextArea] = useState(false);
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value)
  }
  
  const handleCancel = () => {
    setShowTextArea(false);
  }; 

  const handleLabelClick = () => {
    setShowTextArea(true)
  }

  const onSubmitClick = () => {
    onSubmit(value);
    setValue("")
    setShowTextArea(false);
  }

  return (
    <div style={{padding: "0px"}}>
      <TextAreaLabel onClick={handleLabelClick}>
        {Icon ? <Icon /> : null}
        <p>{label}</p>
      </TextAreaLabel>
      {showTextArea && (
        <div>
          <TextAreaField
            name={name}
            cols="100"
            rows="5"
            value = {value}
            onChange = {handleChange}
          />
          <ButtonContainer>
            <Button variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="secondary" onClick={onSubmitClick}>
              Submit
            </Button>
        </ButtonContainer>
        </div>
      )}
    </div>
  );
}

export default TextArea;
