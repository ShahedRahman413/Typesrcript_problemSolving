interface book{
    title:string,
    author:string,
    publishedYear:number
}

const isRecentBook=(book:book)=>{
    const currentYear=new Date().getFullYear();

    if(currentYear-book.publishedYear<10){
        return true;
    }
    return false;
}

const book:book={
    title: "Sample Book",
    author: "John Doe",
    publishedYear: 2022
}

console.log(isRecentBook(book));
