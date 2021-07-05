import React,{Component} from 'react';
import classes from './App.module.css';
import ProductData1 from './Utils/ProductData';
import ProductDetails from './ProductDetails/ProductDetails';
import ProductPreview from './ProductPreview/ProductPreview';
import Topbar from './Topbar/TopBar';

class App extends Component{

  state = {
    ProductData: ProductData1,
    currentPreviewImagePos: 0,
    currentPreviewImage: 'PTgQlim.png',
    currentSelectedFeature: 0
  }

  onColorOptionClick = (pos) =>{
    this.setState({currentPreviewImagePos: pos}); 
  }

  onFeatureItemClick = (pos) => {
    this.setState({currentSelectedFeature: pos});
  }

  shouldComponentUpdate(nextProps, nextState){
    // console.log("Next state=> ",nextState);
    // console.log("Previous state=> ",this.state);
    console.log('Inside shouldComponentUpdate');
    if(nextState.currentPreviewImagePos===this.state.currentPreviewImagePos && nextState.currentSelectedFeature===this.state.currentSelectedFeature)
    {
      return false;
    }

    return true;
  }

  render(){
    console.log('Rendering AppJs');

    return (
      <div className="App">
        
        <Topbar />
  
        <div className={classes.MainContainer}>
  
          <div className={classes.ProductPreview}>
              <ProductPreview currentPreviewImage={this.state.ProductData.colorOptions[this.state.currentPreviewImagePos].imageUrl} currentSelectedFeature={this.state.currentSelectedFeature} />
          </div>
  
          <div className={classes.ProductData}>
              <ProductDetails data={this.state.ProductData} onColorOptionClick={this.onColorOptionClick} currentPreviewImagePos={this.state.currentPreviewImagePos} onFeatureItemClick={this.onFeatureItemClick} currentSelectedFeature={this.state.currentSelectedFeature} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
