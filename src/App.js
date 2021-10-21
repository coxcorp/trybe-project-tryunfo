import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

const blankState = {
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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...blankState,
      hasTrunfo: false,
      cardList: [],
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
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
        hasTrunfo,
        isSaveButtonDisabled,
      } = this.state;
      const minLimit = 0;
      const maxLimit = 90;
      const totalLimit = 210;
      if (cardName === ''
       || cardDescription === ''
       || hasTrunfo === ''
       || isSaveButtonDisabled === ''
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

  // Requisito 06
  onSaveButtonClick = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      cardList,
    } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    };

    this.setState({
      ...blankState,
      cardList: [...cardList, newCard],
    }, () => {
      if (cardTrunfo) this.setState({ hasTrunfo: true });
    });
  }

  render() {
    const { cardList } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
        <Card { ...this.state } />
        <Form
          { ...this.state }
          onInputChange={ this.onInputChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <div>
          {cardList.map((card) => <Card key={ card.cardName } { ...card } />) }
        </div>
      </div>
    );
  }
}

export default App;
