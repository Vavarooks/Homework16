import React from "react"
import axios from "axios"
import Archive from "./Archive"

class SavedBooks extends React.Component {
    state= {
        search:"",
        booklist:[],
    }
    componentDidMount=()=>{
        var bookname= this.state.search
        var booklist = []
        console.log("Bookname", bookname)
        axios.get(`/api/all`)
        .then(response=> {
            console.log("Response", response)
            var booksresponse= response.data
            for(let i = 0; i < booksresponse.length; i++){
                let record= {
                   title: booksresponse[i].title,
                   author: booksresponse[i].author,
                   synopsis: booksresponse[i].synopsis,
                   id: booksresponse[i].id,
                   deleted: false
                }
                booklist.push(record)
            }
            this.setState({booklist:booklist})
            console.log(this.state.booklist)
        })
    }


booksDeleted=(id)=>{
var books=this.state.booklist
for(let i = 0; i < books.length; i ++){
    if(books[i].id==id){
        books[i].deleted= true
    }
}
this.setState({
    booklist:books
})

}

    render() {
        var booklist = this.state.booklist
        return (<div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Google Book Archive</h1>
                    <p className="lead">Find the Books You haved read!</p>
                    
                </div>
            </div>
            {booklist.map((book, index)=> 
                <Archive
                id={book.id}
                title={book.title}
                author={book.author}
                synopsis={book.synopsis}
                deleted={book.deleted}
                booksDeleted={this.booksDeleted} 
                key={index}/>
            )}
        </div>)
    }
}

export default SavedBooks;