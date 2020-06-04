import React from "react"
import Axios from "axios";


class Archive extends React.Component {
state={
    status:""
}

handleDelete =()=>{
    console.log("Delete , ",this.props.id)
    Axios.delete("/api/book/" + this.props.id)
    .then(response =>{
        console.log(response)
        this.props.booksDeleted(this.props.id)
        if(response.data.status == "Book already deleted."){
            this.setState({status:"Book already deleted."})
        }
    })
.catch(error=>{
    console.log(error, "Archive")
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
                    <p className="delets">{this.state.status}</p>
                    {this.props.deleted ?
                    <p>Book deleted</p>: 
                    <button onClick={this.handleDelete}>delete</button>}
                </div>
            </div>
        </div>)
    }
}

export default Archive;



