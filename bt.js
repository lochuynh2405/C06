
function main() {

    const books = [
        {
            id: 1,
            name: "Luật tâm thức",
            price: 220000,
            provider: "Fahasha",
        },
        {
            id: 2,
            name: "Chiến binh cầu vồng",
            price: 140000,
            provider: "Fahasha",
        },
        {
            id: 3,
            name: "Nghệ thuật tập trung",
            price: 90000,
            provider: "Tuổi trẻ",
        },
        {
            id: 4,
            name: "Bye Béo",
            price: 305000,
            provider: "Kmin Books",
        },
        {
            id: 5,
            name: "Sát thủ bán hàng",
            price: 180000,
            provider: "Fahasha",
        },
        {
            id: 6,
            name: "Hoàng tử bé",
            price: 50000,
            provider: "Kmin Books",
        },
        {
            id: 7,
            name: "Tâm lý học tội phạm",
            price: 400000,
            provider: "Kmin Books",
        },
        {
            id: 8,
            name: "Hiểu về trái tim",
            price: 130000,
            provider: "Tuổi trẻ"
        },
    ];

    

    const result = countBooksOfPublisher(books, "Kmin Books");
    const result1 = getAvaeragePrice(books);
    const result2 = findMaxPrice(books,);

    console.log(findMaxPrice(books));

}

function countBooksOfPublisher(books, publisher){
    let bookPublishers = new Array();
    for(let i = 0; i <= books.length - 1; i++){
        if(books[i].provider == publisher){
            bookPublishers.push(books[i]);
        }
    }
    return bookPublishers;
}

function getAvaeragePrice(books){
    let total = 0;
    for(let i = 0; i <= books.length - 1; i++){
        total += books[i].price;
    }
    return total / books.length;
}

function findMaxPrice(books){
    let bookRich = {
        price: 0
    };

    for(let i = 0; i <= books.length - 1; i++){
        if(bookRich.price < books[i].price){
            bookRich = books[i];
        }
    }
    return bookRich.id;
}
    

main();