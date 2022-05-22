import { Form, Button, Card } from 'react-bootstrap'
import { useState } from "react";

export const Translate = () => {
  const [input, setInput] = useState([]);
  const [translated, setTranslated] = useState([]);
  const { Configuration, OpenAIApi } = require("openai");

  const handleTranslateForm = (evt) => {
    evt.preventDefault();
    const promptData = evt.target.elements["inputPhrase"].value
    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI,
    });
    const openai = new OpenAIApi(configuration);
    openai.createCompletion("text-davinci-002", {
      prompt: `Translate this into 1. French, 2. Spanish, 3. Japanese, and 4. Chinese: ${promptData}`,
      temperature: 0.3,
      max_tokens: 100,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    })
    .then((response) => {
      if (response) {
        let translatedData = response.data.choices[0].text
        setTranslated(translated => [translatedData, ...translated])
      }
      if (promptData) {
        setInput(input => [promptData, ...input])
      }
    })
  }

  const renderTranslations = () => {
    if (translated.length === 0 || !translated) {
      return 
    }
    return translated.map((translatedPhrase, index) => {
      return (
        <Card className='space-between' key={index}>
          <Card.Header as="h5">{input[index]}</Card.Header>
          <Card.Body>
            <Card.Text>{translatedPhrase} </Card.Text>
          </Card.Body>
        </Card>
      )
    })
  };


  return (
    <div className="formStyles">
      <Form onSubmit={ handleTranslateForm } >
        <Form.Group className="mb-3">
          <Form.Control name='inputPhrase' placeholder="Enter phrase here" as="textarea" />
        </Form.Group>
        <Button variant="outline-primary" size="sm" type="submit"> Translate </Button>
        <br></br>
        { renderTranslations() }
      </Form>
    </div>
  )
}
export default Translate;