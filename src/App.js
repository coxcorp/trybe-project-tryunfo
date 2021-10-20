import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: 0,
      cardAttr2: 0,
      cardAttr3: 0,
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value }, () => {
      // Requisito 05
      const {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
      } = this.state;
      const minLimit = 0;
      const maxLimit = 90;
      const totalLimit = 210;
      if (cardName === ''
       || cardDescription === ''
       || Number(cardAttr1) < minLimit
       || Number(cardAttr1) > maxLimit
       || Number(cardAttr2) < minLimit
       || Number(cardAttr2) > maxLimit
       || Number(cardAttr3) < minLimit
       || Number(cardAttr3) > maxLimit
       || (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) > totalLimit)
       || cardImage === '') {
        this.setState({ isSaveButtonDisabled: true });
      } else {
        this.setState({ isSaveButtonDisabled: false });
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form { ...this.state } onInputChange={ this.onInputChange } />
        <Card { ...this.state } />
      </div>
    );
  }
}

export default App;
