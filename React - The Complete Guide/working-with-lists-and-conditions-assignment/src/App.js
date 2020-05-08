import React, { Component } from "react";
import "./App.css";
import Validation from "./Validation/Validation";
import Char from "./Char/Char";

class App extends Component {
  constructor() {
    super();
    this.state = { phraseInputValue: "My phrase" };
  }

  handleCharClick = key => {
    const { phraseInputValue } = this.state;

    const tmpPhrase = phraseInputValue.split("");
    tmpPhrase.splice(key, 1);
    const newPhrase = tmpPhrase.join("");

    this.setState({
      phraseInputValue: newPhrase
    });
  };

  handlePhraseChange = e => {
    this.setState({ phraseInputValue: e.target.value });
  };

  render = () => {
    const { phraseInputValue } = this.state;
    const chars = phraseInputValue
      .split("")
      .map((v, i) => (
        <Char key={i} value={v} onClick={() => this.handleCharClick(i)} />
      ));

    return (
      <div>
        <label>
          Enter some phrase:
          <input
            type="text"
            value={phraseInputValue}
            onChange={this.handlePhraseChange}
          />
          <p>Phrase length: {phraseInputValue.length}</p>
          <Validation textLength={phraseInputValue.length} />
          {chars}
        </label>
      </div>
    );
  };
}

export default App;
