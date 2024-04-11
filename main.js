document.getElementById("puluCixarBtn").addEventListener("click", puluCixart);

    function puluCixart() {
    const miqdar = parseFloat(document.getElementById("miqdar").value);
    const sekilDiv = document.getElementById("sekilDiv");

    const vahidler = [500, 200, 100, 50, 20, 10, 5, 1];
    const vahidSekilleri = [
        "500.jpg", "200.jpg", "100.jpg", "50.jpg", "20.jpg", "10.jpg", "5.jpg", "1.jpg"
    ];
    let pulMiqdari = miqdar;
    let netice = "";
    
    for (let i = 0; i < vahidler.length; i++) {
        const vahid = vahidler[i];
        const vahidsekli = vahidSekilleri[i];
        const eded = Math.floor(pulMiqdari / vahid);
        if (eded > 0) {
            netice += '<div class="pul-deste">';
            for (let j = 0; j < eded; j++) {
                netice += `<img src="${vahidsekli}" alt="${vahid} AZN"> `;
            }
            netice += '</div>';
            pulMiqdari -= eded * vahid;
        }
        if (pulMiqdari === 0) {
            break;
        }
    }

    sekilDiv.innerHTML = netice;
    
}


