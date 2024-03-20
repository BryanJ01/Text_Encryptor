// Función para encriptar texto
function encryptText(text) {
    try {
        // Verificar si el texto contiene números, símbolos o letras mayúsculas
        if (/[\d~`!#$%\^&*+=\-\[\]\\'/{}|\\"<>\?()0123456789]/.test(text) || /[A-Z]/.test(text)) {
            alert("El texto ingresado contiene caracteres no permitidos. Por favor, usa solo letras minúsculas y sin acentos.");
            return null;
        }

        // Reemplazar cada letra según las reglas de encriptación
        text = text.replace(/e/g, "enter");
        text = text.replace(/i/g, "imes");
        text = text.replace(/a/g, "ai");
        text = text.replace(/o/g, "ober");
        text = text.replace(/u/g, "ufat");
        return text;
    } catch (error) {
        alert("Ha ocurrido un error al encriptar el texto.");
    }
}

// Función para desencriptar texto
function decryptText(text) {
    try {
        // Reemplazar cada código encriptado según las reglas de desencriptación
        text = text.replace(/enter/g, "e");
        text = text.replace(/imes/g, "i");
        text = text.replace(/ai/g, "a");
        text = text.replace(/ober/g, "o");
        text = text.replace(/ufat/g, "u");
        return text;
    } catch (error) {
        alert("Ha ocurrido un error al desencriptar el texto.");
    }
}

// Función para ocultar el marcador de posición cuando se ingresa texto
function hidePlaceholder() {
    var textarea = document.getElementById("text-input");
    textarea.placeholder = "";
}

// Función para copiar el resultado al portapapeles
function copyText() {
    try {
        var resultTextarea = document.getElementById("result");
        resultTextarea.select();
        document.execCommand("copy");
        alert("El texto se ha copiado al portapapeles.");
    } catch (error) {
        alert("Ha ocurrido un error al intentar copiar el texto.");
    }
}

// Función para limpiar los campos de entrada y resultado
function clearFields() {
    var textInput = document.getElementById("text-input");
    var resultTextarea = document.getElementById("result");
    textInput.value = "";
    resultTextarea.value = "";
}

// Función principal
document.addEventListener("DOMContentLoaded", function() {
    var encryptButton = document.getElementById("encryptButton");
    var decryptButton = document.getElementById("decryptButton");
    var resultTextarea = document.getElementById("result");

    // Encriptar texto al hacer clic en el botón "Encriptar"
    encryptButton.addEventListener("click", function() {
        var inputText = document.getElementById("text-input").value;
        var encryptedText = encryptText(inputText);
        if (encryptedText) {
            resultTextarea.value = encryptedText;
            alert("El texto se ha encriptado con éxito.");
        }
    });

    // Desencriptar texto al hacer clic en el botón "Desencriptar"
    decryptButton.addEventListener("click", function() {
        var inputText = document.getElementById("text-input").value;
        var decryptedText = decryptText(inputText);
        if (decryptedText) {
            resultTextarea.value = decryptedText;
            alert("El texto se ha desencriptado con éxito.");
        }
    });

    // Copiar resultado al hacer clic en el botón "Copiar"
    var copyButton = document.getElementById("copyButton");
    copyButton.addEventListener("click", function() {
        copyText();
    });
});
