import React, { Component } from 'react'

 class PtdProductAdd extends Component {
    constructor(props){
        super(props);
        this.state = {
            id :0,
            title:'',
            status:0
        }
    }
    ptdHandleChange = (event)=>{
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]:value
        })
    }
    // submit form
    ptdHandleSubmit = (ev)=>{
        ev.preventdefault();
        this.props.onSubmit(this.state);
    }
  render() {
    return (
      <div>
        <h2> Them moi san pham</h2>
        <form className='cod-mb-6'>
        <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon1">
    ID
  </span>
  <input
    type="text"
    className="form-control"
    id='id'
    name='id'
    value={this.state.id}
    onChange={this.ptdHandleChange}
  />
</div>


       
        <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon2">
    Title
  </span>
  <input
    type="text"
    className="form-control"
    name='title'
    value={this.state.title}
    onChange={this.ptdHandleChange}
  />
</div>

<div>
        <div className="input-group mb-3">
  <span className="input-group-text" id="basic-addon3">
    Status
  </span>
  <input
    type="text"
    className="form-control"
    name='status'
    value={this.state.status}
    onChange={this.ptdHandleChange}
  />
</div>
        </div>
        <button className='btn btn-success' onClick={this.ptdHandleSubmit}> Ghi lai</button>
        </form>
      </div>
     
    )
  }
}
export default PtdProductAdd;
