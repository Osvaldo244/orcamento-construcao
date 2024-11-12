function calcularOrcamento() {
    // Obter os valores dos campos
    const comprimento = parseFloat(document.getElementById('comprimento').value);
    const largura = parseFloat(document.getElementById('largura').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const tipoBloco = parseFloat(document.getElementById('tipo-bloco').value);
    const precoCimento = parseFloat(document.getElementById('preco-cimento').value);

    // Preço do bloco com base no tipo escolhido
    let precoBloco;
    if (tipoBloco === 15) {
        precoBloco = 250;  // Bloco 15cm custa 250 Kz
    } else if (tipoBloco === 20) {
        precoBloco = 350;  // Bloco 20cm custa 350 Kz
    }

    // Cálculos:
    const perimetro = 2 * (comprimento + largura);  // Perímetro do terreno
    const areaMuro = perimetro * altura;  // Área do muro (perímetro * altura)

    // Cálculos para o número de blocos na horizontal e na vertical
    const blocosPorMetroHorizontal = 1 / 0.15; // 1 metro dividido pelo comprimento do bloco de 15 cm
    const blocosPorMetroVertical = altura / 0.15; // Altura dividida pela altura do bloco de 15 cm

    // Número total de blocos
    const numeroTotalBlocos = blocosPorMetroHorizontal * blocosPorMetroVertical * perimetro;

    // Cálculo do orçamento
    const orcamentoBloco = numeroTotalBlocos * precoBloco;
    const orcamentoCimento = areaMuro * 0.2 * precoCimento; // Cálculo para cimento (supondo 0.2 sacos por m²)
    const totalCusto = orcamentoBloco + orcamentoCimento;

    // Exibir resultados
    document.getElementById('orcamento-bloco').innerText = `Custo com Blocos: ${orcamentoBloco.toFixed(2)} Kz`;
    document.getElementById('orcamento-cimento').innerText = `Custo com Cimento: ${orcamentoCimento.toFixed(2)} Kz`;
    document.getElementById('total-custo').innerText = `Custo Total: ${totalCusto.toFixed(2)} Kz`;

    // Mostrar a seção de resultado
    document.getElementById('resultado').style.display = 'block';
}
