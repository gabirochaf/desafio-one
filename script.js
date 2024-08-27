const textInput = document.querySelector(".container_esquerdo_input");
const textOutput = document.querySelector(".container_direito_output");

const infos = document.getElementById("infos");
const output = document.getElementById("output");
const copiar = document.getElementById("copiar");


function btnEncriptar() {
    const textoEncriptado = encriptar(textInput.value);
    textOutput.value = textoEncriptado;
    textInput.value = "";

    infos.style.display = "none";
    output.style.display = "block";
    copiar.style.display = "block";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;

    document.querySelector(".");
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textInput.value);
    textOutput.value = textoDesencriptado;
    textInput.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function btnCopiar() {
    var textoCopiado = document.querySelector(".container_direito_output");
    textoCopiado.select();
    document.execCommand("copy");
    alert("Texto copiado!");
}