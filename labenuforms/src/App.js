import React from "react";
import './App.css';
import FristStep from "./components/FristStep";
import LastStep from "./components/LastStep";
import SecondStep from "./components/SecondStep";
import ThirdStep from "./components/ThirdStep";

export default class App extends React.Component {

  state = {
    step: 1
  };
  goToNextStep = () => {
    this.setState({ step: this.state.step + 1 })
  };

  render() {


    const renderizaEtapa = () => {
      switch (this.state.step) {
        case 1:
          return <FristStep />;
        case 2:
          return <SecondStep />;
        case 3:
          return <ThirdStep />;
        case 4:
          return <LastStep />;
      }
    };


    return (


      <div className="App" >

        { renderizaEtapa()}
        {this.state.step != 4 && (
          < button onClick={this.goToNextStep}> Próxima Etapa</button >
        )}
      </div >
    );
  }
}



