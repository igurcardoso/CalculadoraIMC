// Cálculos
let formulario = document.getElementById("form1");

formulario.addEventListener("submit", function(event){
    event.preventDefault(); // Prevenir comportamento padrão

    let userPeso = parseFloat(document.getElementById("userPeso").value.replace(',', '.'));
    let userAltura = parseFloat(document.getElementById("userAltura").value.replace(',', '.')) / 100; // Converter altura para metros
    let resultado = parseFloat(userPeso / (userAltura * userAltura));
    
    console.log(resultado);

    let p = document.getElementById("resultadoEsperado");
    p.textContent = "Seu IMC é: " + resultado.toFixed(2);

    let p1 = document.getElementById("mensagemPeso");
    p1.textContent = getMensagemPeso(resultado, currentLanguage); // Usar a função que retorna a mensagem correta
});

function getMensagemPeso(resultado, lang) {
    if (resultado < 18.5) {
        return translations[lang].mensagens.baixoPeso;
    } else if (resultado >= 18.5 && resultado <= 24.9) {
        return translations[lang].mensagens.normal;
    } else if (resultado >= 25 && resultado <= 29.9) {
        return translations[lang].mensagens.sobrepeso;
    } else if (resultado >= 30 && resultado <= 39.9) {
        return translations[lang].mensagens.obeso;
    } else {
        return translations[lang].mensagens.muitoObeso;
    }
}

// Objeto de Traduções
let translations = {
    pt: {
        titulo: "Cálculo de IMC",
        peso: "Peso:",
        altura: "Altura:",
        calcular: "Calcular",
        limpar: "Limpar",
        idioma: "Idioma",
        mensagens: {
            baixoPeso: "Restam poucos dias de vida pra você, procure um médico",
            normal: "Seu peso está normal",
            sobrepeso: "Você está no sobrepeso",
            obeso: "Você está obeso",
            muitoObeso: "Você vai morrer"
        }
    },
    en: {
        titulo: "BMI Calculation",
        peso: "Weight:",
        altura: "Height:",
        calcular: "Calculate",
        limpar: "Clear",
        idioma: "Language",
        mensagens: {
            baixoPeso: "You have a few days left, see a doctor",
            normal: "Your weight is normal",
            sobrepeso: "You are overweight",
            obeso: "You are obese",
            muitoObeso: "You are going to die"
        }
    },
    ru: {
        titulo: "Расчет ИМТ",
        peso: "Вес:",
        altura: "Рост:",
        calcular: "Рассчитать",
        limpar: "Очистить",
        idioma: "Язык",
        mensagens: {
            baixoPeso: "У вас осталось несколько дней, обратитесь к врачу",
            normal: "Ваш вес в норме",
            sobrepeso: "У вас избыточный вес",
            obeso: "У вас ожирение",
            muitoObeso: "Вы умрете"
        }
    }
};

let currentLanguage = 'pt'; // Define o idioma padrão como português

document.getElementById('languageSwitcher').addEventListener('change', function(event) {
    currentLanguage = event.target.value; // Atualiza a variável de idioma atual
    changeLanguage(currentLanguage);
});

function changeLanguage(lang) {
    document.getElementById('titulo').textContent = translations[lang].titulo;
    document.getElementById('labelPeso').textContent = translations[lang].peso;
    document.getElementById('labelAltura').textContent = translations[lang].altura;
    document.getElementById('buttonCalcular').textContent = translations[lang].calcular;
    document.getElementById('buttonLimpar').value = translations[lang].limpar;
    document.getElementById('labelLanguage').textContent = translations[lang].idioma;
}

// Definir idioma padrão como português
changeLanguage('pt');
