import React, { useState, useEffect } from 'react';
import './assets/css/quiz.css';

export default function Quiz() {
    const inicioRespostaRodada = {
        alternativaUsuario: "",
        alternativaComputador: ""
    };
    const [respostaRodada, setRespostaRodada] = useState(inicioRespostaRodada);
    const [dadosSalvos, setDadosSalvos] = useState([]);
    useEffect(() => {
        console.log(respostaRodada);

    }, [respostaRodada]);
    useEffect(() => {
        console.log(dadosSalvos);

    }, [dadosSalvos]);
    let indexMostrado = 0;
    const perguntas = [
        {
            titulo: "1 + 1",
            indexRespostaCerta: 1,
            respostaCerta: "2",
            respostas: [
                "Olá. tudo bem como voce está? estou bem e com voce aaaa eu preciso falar mais alguns caracteres", "2", "3", "4",
            ]
        },
        {
            titulo: "2 + 2",
            indexRespostaCerta: 3,
            respostaCerta: "4",
            respostas: [
                "1", "2", "3", "4",
            ]
        },
        // {
        //     titulo: "10 + 10",
        //     indexRespostaCerta: 2,
        //     respostaCerta: "20",
        //     respostas: [
        //         "11", "12", "20", "34",
        //     ]
        // },

    ];
    const pergunta1 = perguntas[0];
    // const clicarNaResposta = (index, indexRespostaCerta) => {
    //     if (index == indexRespostaCerta) {
    //         // Resposta Certa
    //         console.log("resposta certa")
    //     }

    // }
    const clicouBtnResposta = () => {
        /* Quando a pessoa Clicar no botao da resposta */

        setDadosSalvos([...dadosSalvos, { respostaRodada }]);
        /* passar para a proxima pergunta */
    }
    const onChanceValue = (e, index, indexRespostaCerta, numeroRodada) => {
        /* Funcao teste para entender o onchange */
        console.log(e.target);
        console.log(" Index Clicado - " + index);
        console.log(" Index Certo - " + indexRespostaCerta);
        console.log("Numero rodada - " + numeroRodada);

        setRespostaRodada({
            alternativaUsuario: index,
            alternativaComputador: indexRespostaCerta
        });
    }
    return (
        <section id="section-quiz">
            <div className="container-quiz">
                <div className="box-titulo">
                    <h1>Quiz</h1>
                </div>
                <div className='container-quadro'>
                    {/* vai ter um map */}
                    {perguntas.map((pergunta, indexPai) => {
                        return (
                            <div key={indexPai}>
                                {indexPai + 1}
                                <div className='item-pergunta'>
                                    <h2 key={indexPai} className={indexPai}>{pergunta.titulo}</h2>
                                </div>
                                <div className='container-repostas'>
                                    <ul className='box-respostas'>
                                        {pergunta.respostas.map((alternativa, index) => {
                                            return (
                                                <li key={index} className={`${indexPai} | ${index}`} onChange={(e) => {
                                                    onChanceValue(e, index, pergunta.indexRespostaCerta, indexPai);

                                                }} >
                                                    <input value={alternativa} name={indexPai} type="radio" id={`${index} | ${indexPai}`} className={index == pergunta.indexRespostaCerta ? "certa" : undefined}
                                                        onClick={() => {
                                                            // clicarNaResposta(index, pergunta.indexRespostaCerta);
                                                        }}
                                                    />
                                                    <label htmlFor={`${index} | ${indexPai}`}>{alternativa}</label>
                                                </li>

                                            )
                                        })}
                                    </ul>
                                    <button className="btn-responder" onClick={clicouBtnResposta}>Reponder</button>

                                </div>
                            </div>
                        );
                    })}
                    {/* vai terminar aqui*/}
                </div>
            </div >
        </section >
    )
}