const nums = [3, 8, 2, 6, 7];  // Primeiro array de números
const nums2 = [1, 2, 3, 4, 5]; // Segundo array de números
let max = nums[0]  // Variável para armazenar o maior número
let min = nums[0]  // Variável para armazenar o menor número
let grid = []  // Para armazenar combinações de soma
let receiver = [] // Para armazenar números duplicados encontrados entre os arrays
let target = 8  // O valor alvo para a busca binária
let count = 0  // Contador para soma total
let a = 0, b = 0, c = 0; // Variáveis auxiliares

// Função para encontrar o maior e o menor número no array nums
function findMaxMin(){
    console.log("Iniciando busca do maior e menor número...");
    for(let i = 0; i < nums.length; i++){
        console.log(`Verificando valor: ${nums[i]}`);
        if(nums[i] < min) {
            min = nums[i];
            console.log(`Novo valor mínimo encontrado: ${min}`);
        }
        if(nums[i] > max) {
            max = nums[i];
            console.log(`Novo valor máximo encontrado: ${max}`);
        }
    }
    console.log(`Maior número: ${max}\nMenor número: ${min}`);
}

// Função para encontrar combinações de soma entre os dois arrays que resultam em um valor alvo
function finSum(){
    console.log("Iniciando a busca por combinações que somam ao valor alvo...");
    for(let i = 0; i < nums.length; i++){
        console.log(`Indice I (nums): ${nums[i]}`);
        for(let j = 0; j < nums2.length; j++){
            console.log(`Indice J (nums2): ${nums2[j]}`);
            if(nums[i] + nums2[j] === target){
                grid.push([nums[i], nums2[j]]);
                console.log(`Combinação encontrada: ${nums[i]} + ${nums2[j]} = ${target}`);
            }
        }
    }
    console.table(grid);
}

// Função para calcular a soma total dos valores nos dois arrays
function all() {
    console.log("Calculando soma total dos dois arrays...");
    for(let i = 0; i < nums.length; i++){
        count = count + nums[i];
        console.log(`Soma atual após nums[${i}]: ${count}`);
    }
    console.log(`Soma total de nums: ${count}`);
    for(let i = 0; i < nums2.length; i++){
        count = count + nums2[i];
        console.log(`Soma atual após nums2[${i}]: ${count}`);
    }
    console.log(`Soma total dos dois arrays: ${count}`);
}

// Função para calcular a média dos dois arrays
function average() {
    console.log("Calculando médias...");
    for(let i = 0; i < nums.length; i++ ){
        a = a + nums[i];
    }
    console.log(`Soma do primeiro array: ${a}`);
    console.log(`Média do primeiro array: ${a / nums.length}`);

    for(let i = 0; i < nums2.length; i++){
        b = b + nums2[i];
    }
    console.log(`Soma do segundo array: ${b}`);
    console.log(`Média do segundo array: ${b / nums2.length}`);

    console.log(`Soma das médias dos dois arrays: ${a / nums.length + b / nums2.length}`);
    console.log(`Média total dos dois arrays: ${(a + b) / (nums.length + nums2.length)}`);
}

// Função para encontrar números duplicados entre os dois arrays
function duplicates(){
    console.log("Buscando números duplicados...");
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums2.length; j++){
            if(nums[i] === nums2[j]){
                receiver.push(nums[i]);
                console.log(`Número duplicado encontrado: ${nums[i]}`);
            }
        }
    }
    console.table(receiver);
}

// Função para somar cada elemento de `nums` com todos os elementos de `nums2` e armazenar em `grid`
function oneMoreAll(){
    console.log("Somando cada elemento de nums com todos os elementos de nums2...");
    for(let i = 0; i < nums.length; i++){
        receiver = [];
        for(let j = 0; j < nums2.length; j++){
            receiver.push(nums[i] + nums2[j]);
            console.log(`Soma de nums[${i}] e nums2[${j}]: ${nums[i]} + ${nums2[j]} = ${nums[i] + nums2[j]}`);
        }
        grid.push(receiver);
        console.log(`Resultado das somas para nums[${i}]:`, receiver);
    }
    console.table(grid);
}

// Função para encontrar índices de elementos duplicados nos arrays
function index(){
    console.log("Buscando índices de números duplicados...");
    for(let i = 0; i < nums.length; i++){
        for(let j = 0; j < nums2.length; j++){
            if(nums[i] === nums2[j]){
                receiver.push(`Índice ${i} número ${nums[i]}`);
                console.log(`Número duplicado encontrado no índice ${i}: ${nums[i]}`);
            }
        }
    }
    console.log("Índices encontrados: ", receiver);
}

//#region bubble sort and search binary

// Função de busca binária
function binarySerach(array, target) {
    let left = 0;
    let right = array.length - 1;
    console.log(`Iniciando a busca binária para o valor ${target}...`);

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        console.log(`Esquerda: ${left}, Direita: ${right}, Meio: ${mid}, Valor no meio: ${array[mid]}`);

        if (array[mid] === target) {
            console.log(`Valor ${target} encontrado em ${mid}.`);
            return console.log(array[mid]);
        }

        if (array[mid] < target) {
            console.log(`Valor ${target} é maior que ${array[mid]}. Movendo a esquerda para ${mid + 1}.`);
            left = mid + 1;
        } else {
            console.log(`Valor ${target} é menor que ${array[mid]}. Movendo a direita para ${mid - 1}.`);
            right = mid - 1;
        }
    }

    console.log(`Valor ${target} não encontrado.`);
    return -1;
}

// Função para ordenar o array e depois rodar a busca binária
function ordenatetobinarysearch(array, target, rodar) {
    console.log("Array original:", array);

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                console.log(`Trocando elementos: ${array[j]} e ${array[j + 1]}`);
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
        console.log(`Estado do array após a iteração ${i + 1}:`, array);
    }

    console.log("Array ordenado:", array);

    if (rodar) {
        console.log("Iniciando a busca binária após ordenação...");
        binarySerach(array, target);
    }

    return array;
}
//#endregion
