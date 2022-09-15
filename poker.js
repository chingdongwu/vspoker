const data = [
    ['1', "./梅花/1.PNG"],
    ['2', "./稜形/1.PNG"],
    ['3', "./愛心/1.PNG"],
    ['4', "./黑桃/1.PNG"],
    ['5', "./梅花/2.PNG"],
    ['6', "./稜形/2.PNG"],
    ['7', "./愛心/2.PNG"],
    ['8', "./黑桃/2.PNG"],
    ['9', "./梅花/3.PNG"],
    ['10', "./稜形/3.PNG"],
    ['11', "./愛心/3.PNG"],
    ['12', "./黑桃/3.PNG"],
    ['13', "./梅花/4.PNG"],
    ['14', "./稜形/4.PNG"],
    ['15', "./愛心/4.PNG"],
    ['16', "./黑桃/4.PNG"],
    ['17', "./梅花/5.PNG"],
    ['18', "./稜形/5.PNG"],
    ['19', "./愛心/5.PNG"],
    ['20', "./黑桃/5.PNG"],
    ['21', "./梅花/6.PNG"],
    ['22', "./稜形/6.PNG"],
    ['23', "./愛心/6.PNG"],
    ['24', "./黑桃/6.PNG"],
    ['25', "./梅花/7.PNG"],
    ['26', "./稜形/7.PNG"],
    ['27', "./愛心/7.PNG"],
    ['28', "./黑桃/7.PNG"],
    ['29', "./梅花/8.PNG"],
    ['30', "./稜形/8.PNG"],
    ['31', "./愛心/8.PNG"],
    ['32', "./黑桃/8.PNG"],
    ['33', "./梅花/9.PNG"],
    ['34', "./稜形/9.PNG"],
    ['35', "./愛心/9.PNG"],
    ['36', "./黑桃/9.PNG"],
    ['37', "./梅花/10.PNG"],
    ['38', "./稜形/10.PNG"],
    ['39', "./愛心/10.PNG"],
    ['40', "./黑桃/10.PNG"],
    ['41', "./梅花/11.PNG"],
    ['42', "./稜形/11.PNG"],
    ['43', "./愛心/11.PNG"],
    ['44', "./黑桃/11.PNG"],
    ['45', "./梅花/12.PNG"],
    ['46', "./稜形/12.PNG"],
    ['47', "./愛心/12.PNG"],
    ['48', "./黑桃/12.PNG"],
    ['49', "./梅花/13.PNG"],
    ['50', "./稜形/13.PNG"],
    ['51', "./愛心/13.PNG"],
    ['52', "./黑桃/13.PNG"],
    ['53', "./黑桃/14.PNG"],
]

// console.log(data[0][1], typeof (data[0][1]));


x = (data[52][1])
console.log(x);
// document.write(Image(x))


// document.write(`'<img src="${x}"'`);

const elementE1 = document.querySelector("#analytics");
console.log(elementE1);

const comE1 = document.querySelector("#com1");
console.log(comE1);

const player1 = document.querySelector("#player");
console.log(player1);

const final = document.querySelector("#text3");
console.log(final);

const king = document.querySelector("#king");
console.log(king);

function analytics() {
    const data1 = []
    let numA = Math.floor((Math.random() * 53));
    let numB = Math.floor((Math.random() * 53));
    // console.log(numA, numB);
    if (numA != numB) {
        data1.push(numA)
        data1.push(numB)
    }
    if (data1.length == 2) {
        console.log(numA, numB, data1);
        let pic = (data[data1[0]][1]);
        console.log(pic);
        comE1.src = `${pic}`;
        let ply = (data[data1[1]][1]);
        console.log(ply);
        player1.src = `${ply}`

        if (data1[0] > data1[1]) {
            final.innerText = ('您跑錯棚了?!')
            final.style.color = 'green';
        }
        else {
            final.innerText = ('賭聖');
            final.style.color = 'blue';
            let kingpic = ['./ king.jpg']
            king.src = `${kingpic[0]}`
        }




    }

}


