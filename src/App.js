import React, { Component } from 'react'
import PtdProductAdd from './compornent/PtdProductAdd';
import PtdProductList from './compornent/PtdProductList';

 class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      products : [
        { title: 'Pham Thanh Dat', id: 2210900007  , status:1},
        { title: 'Cabbage', id: 1, status:1},
        { title: 'Garlic', id: 2, status:0},
        { title: 'Apple', id: 3, status:0},
        { title: 'Samsung', id: 4,status:1},
      
      ]
    }
  }
  ptdHandldSubmit =(param)=>{
    console.log("App:",param);
    //them vao  mang du lieu
    let products = this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
      <div className='container boder mt-5'>
        <h1> Pham Thanh Dat-render-Data-eventform </h1>
        <hr/>
        < PtdProductList renderProducts={this.state.products}/>
        <hr/>
        <PtdProductAdd onSubmit ={this.ptdHandldSubmit} />
      
        </div>
    );
  }
}
export default App;
