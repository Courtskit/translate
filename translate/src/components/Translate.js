import { Form, Button, Card } from 'react-bootstrap';
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
      prompt: `Translate this ${promptData} 1. French, 2. Spanish, 3. Japanese, and 4. Chinese: ${promptData}`,
      temperature: 0,
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
    <div className="form-styles">
      <h1 className='translate'>translate</h1>
      <Form onSubmit={ handleTranslateForm } >
        <Form.Group className="mb-3">
          <Form.Control name='inputPhrase' placeholder="Enter English phrase here" as="textarea" />
          <Form.Text>1. French, 2. Spanish, 3. Japanese, and 4. Chinese </Form.Text>
          <br/>
          <Button variant="outline-primary" size="sm" type="submit"> Translate </Button>
          <br/>
        </Form.Group>
        { renderTranslations() }
      </Form>
    </div>
  )
}

export default Translate;