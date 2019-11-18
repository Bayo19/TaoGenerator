// Get local json Data

let getTao = () => {
    fetch('chap.json')
        .then(res => res.json())
        .then(data => {
            let chapLength = data.length;
            let randomChap = [Math.floor(Math.random() * chapLength)];
            let output = '';
            let output2 = '';

            for (i = 0; i < chapLength; i += 1) {
                var newChapDisplay = data[randomChap].chap.chapterNum;
                var newText = data[randomChap].chap.verse;
            }
            // console.log(newText);
            output += `
             <p>${newChapDisplay}</p>`

            output2 += `<p>${newText}</p>`

            document.getElementById('output1').innerHTML = output;
            document.getElementById('output2').innerHTML = output2
        })
}

// Event Listener here because of arrow function scoping
document.getElementById('newChptr').addEventListener('click', getTao);