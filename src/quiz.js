import React, { useState } from 'react';
import './assets/css/quiz.css';

export default function Quiz() {

    const perguntas = [
        {
            titulo: "1 + 1",
            indexRespostaCerta: 1,
            respostaCerta: "2",
            respostas: [
                "1", "2", "3", "4",
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
        {
            titulo: "10 + 10",
            indexRespostaCerta: 2,
            respostaCerta: "20",
            respostas: [
                "11", "12", "20", "34",
            ]
        },

    ];
    const inicioResposta = {
        respostaCerta: 0,
        respostaErrada: 0
    }
    const [resposta, setResposta] = useState(inicioResposta);
    const clicarNaResposta = (index, indexRespostaCerta) => {
        if (index == indexRespostaCerta) {
            // Resposta Certa
            console.log("resposta certa")
        }

    }
    // console.log(perguntas);

    return (
        <section id="section-quiz">
            <div className="container-quiz">
                <div className="box-titulo">
                    <h1>Quiz</h1>
                </div>
                <div className='container-quadro'>
                    {/* vai ter um map */}
                    {perguntas.map((pergunta, index) => {
                        return (
                            <div key={index}>
                                <div className='item-pergunta'>
                                    <h2 key={index} className={index}>{pergunta.titulo}</h2>
                                </div>
                                <div className='container-repostas'>
                                    <div className='item-resposta'>
                                        <ul>
                                            {pergunta.respostas.map((resposta, index) => {
                                                return (
                                                    <li key={index} className={index == pergunta.indexRespostaCerta ? "certa" : undefined}
                                                        onClick={() => {
                                                            clicarNaResposta(index, pergunta.indexRespostaCerta)
                                                        }}>
                                                        {resposta}
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
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