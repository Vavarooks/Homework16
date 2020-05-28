import React from "react"
import axios from "axios"
import Bookitem from "./Bookitem"

class Body extends React.Component {
    state= {
        search:"",
        booklist:[],
    }
    press=()=>{
        var bookname= this.state.search
        var booklist = []
        console.log("Bookname", bookname)
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookname}`)
        .then(response=> {
            console.log("Response", response)
            var booksresponse= response.data.items
            for(let i = 0; i < booksresponse.length; i++){
                let record= {
                   title: booksresponse[i].volumeInfo.title,
                   author: booksresponse[i].volumeInfo.authors[0],
                   synopsis: booksresponse[i].volumeInfo.description,
                   id: booksresponse[i].id,
                   saved: false
                }
                booklist.push(record)
            }
            this.setState({booklist:booklist})
            console.log(this.state.booklist)
        })
    }

    handleChange=(event)=>{
        const name= event.target.name
        const value= event.target.value
        this.setState(
            {
                [name]:value
            }
        )
    }
booksSaved=(id)=>{
var books=this.state.booklist
for(let i = 0; i < books.length; i ++){
    if(books[i].id==id){
        books[i].saved= true
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
                    <h1 className="display-4">Google Book Search</h1>
                    <p className="lead">Find the Books You want to read!</p>
                    <input id="search" name="search" onChange={this.handleChange}></input>
                    <button onClick={this.press}>Search</button>
                </div>
            </div>
            {booklist.map((book, index)=> 
                <Bookitem
                id={book.id}
                title={book.title}
                author={book.author}
                synopsis={book.synopsis}
                saved={book.saved}
                booksSaved={this.booksSaved} 
                key={index}/>
            )}
        </div>)
    }
}

export default Body;