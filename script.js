const visor = document.querySelector('.visor');
const botoes = document.querySelectorAll('.button');

//button logic
botoes.forEach(button => {

//button click
    button.addEventListener('click', () => {
        
        const value = button.innerText;
        
//commands
        if (value === 'C') {
            visor.innerText = '0';
        }
        
        else if (value === '=') {
            try {
                let account = visor.innerText
                    .replace('X', '*')
                    .replace('÷', '/')
                    .replace(',', '.');

                let result = eval(account);

                visor.innerText = result.toString().replace('.', ',');
                
            } catch (error) {
                visor.innerText = "Error";
                setTimeout(() => { visor.innerText = '0'; }, 1500);
            }
        }
        
        else {
            if (visor.innerText === '0') {
                visor.innerText = value;
            } else {
                visor.innerText += value;
            }
        }
        
    });
});