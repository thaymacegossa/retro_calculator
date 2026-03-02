const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

//buttons
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;
        
        //command
        if (value === 'C') {
            display.innerText = '0';
        }
        
        //delete
        else if (value === '⌫') {
            // Se só tem 1 dígito ou deu Erro, volta pra 0
            if (display.innerText.length === 1 || display.innerText === 'Error') {
                display.innerText = '0';
            } else {
                // A função .slice(0, -1) corta a última letra do texto
                display.innerText = display.innerText.slice(0, -1);
            }
        }
        
        //smart parentheses and expression
        else if (value === '( )') {
            const abertos = (display.innerText.match(/\(/g) || []).length;
            const fechados = (display.innerText.match(/\)/g) || []).length;
            const ultimo = display.innerText.slice(-1);

            if (abertos > fechados && ultimo !== '(' && ultimo !== '+' && ultimo !== '-' && ultimo !== 'x' && ultimo !== '÷') {
                display.innerText += ')';
            } else {
                if (display.innerText === '0') {
                    display.innerText = '(';
                } else {
                    display.innerText += '(';
                }
            }
        }
        
        //operations
        else if (value === '=') {
            try {
                let account = display.innerText
                    .replace(/x/g, '*')    
                    .replace(/÷/g, '/')    
                    .replace(/,/g, '.')    
                    .replace(/%/g, '/100'); 

                let result = eval(account);

                display.innerText = result.toString().replace('.', ',');
                
            } catch (error) {
                display.innerText = "Error";
                setTimeout(() => { display.innerText = '0'; }, 1500);
            }
        }
        
        else {
            if (display.innerText === '0') {
                display.innerText = value;
            } else {
                display.innerText += value;
            }
        }
    });
});