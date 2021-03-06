import React from "react"
import Axios from "axios";


class Bookitem extends React.Component {
state={
    status:""
}
saveBook=() =>{
    let newBook = {
        id: this.props.id,
        title: this.props.title,
        author: this.props.author,
        synopsis: this.props.synopsis,

    }
    Axios.post("/api/book", newBook)
    .then(response =>{
        console.log(response)
        this.props.booksSaved(this.props.id)
        if(response.data.status == "Book already saved."){
            this.setState({status:"Book already saved."})
        }
    })
.catch(error=>{
    console.log(error, "Bookitem")
})
}

    render() {
        return (<div>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.author}</h6>
                    <p className="card-text">{this.props.synopsis}</p>
                    <a href="#" className="card-link">Card link</a>
                    <a href="#" className="card-link">Another link</a>
                    <p className="saves">{this.state.status}</p>
                    {this.props.saved ?
                    <p>Book saved</p>: 
                    <button onClick={this.saveBook}>Save</button>}
                </div>
            </div>
        </div>)
    }
}

export default Bookitem;
