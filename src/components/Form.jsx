import React from 'react';

class Form extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     nome: '',
  //     descricao: '',
  //     attr01: '',
  //     attr02: '',
  //     attr03: '',
  //     imagem: '',
  //     raridade: '',
  //     trunfo: '',
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  // }

  // handleChange(event) {
  //   const { value, name } = event.target;
  //   this.setState({ [name]: value });
  //   console.log(this);
  // }

  render() {
    return (
      <section>
        <form>
          <input type="text" data-testid="name-input" />
          <input type="textarea" data-testid="description-input" />
          <input type="number" data-testid="attr1-input" />
          <input type="number" data-testid="attr2-input" />
          <input type="number" data-testid="attr3-input" />
          <input type="text" data-testid="image-input" />
          <select data-testid="rare-input">
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
          <input type="checkbox" data-testid="trunfo-input" />
          <button type="submit" data-testid="save-button">Salvar</button>
        </form>
      </section>
    );
  }
}

export default Form;
