import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';
import AlternativesForm from '../src/components/AlternativeForm';
import QuizContainer from '../src/components/QuizContainer';
import { func } from 'prop-types';

function LoadingWidget() {
    return (
        <Widget>
            <Widget.Header>
                Carregando...
            </Widget.Header>

            <Widget.Content>
                [Desafio do Loading]
            </Widget.Content>
        </Widget>
    );
}

function ResultadoWidget({ results }) {
    return (
        <Widget>
            <Widget.Header>
                Resultado
            </Widget.Header>

            <Widget.Content>
                <p>
                    Você acertou
                    {' '}
                    {results.reduce((somatoriaAtual, resultAtual) => {
                        const isAcerto = resultAtual === true;
                        if (isAcerto) {
                            return somatoriaAtual + 1;
                        }
                        return somatoriaAtual;
                    }, 0)}
                    {' '}
                    perguntas
                </p>
                <ul>
                    {results.map((result, index) => (
                        <li key={`result__${result}`}>
                            # {index + 1} {' '} Resultado: {' '}
                            {result === true ? 'Acertou' : 'Errou'}
                        </li>
                    ))}
                </ul>
            </Widget.Content>
        </Widget>
    );
}

function QuestionWidget({
    question,
    totalQuestions,
    questionIndex,
    onSubmit,
    addResult,
}) {
    const [selectedAlternative, setSelectedAlternative] = React.useState(undefined);
    const [isQuestionsSubmited, setIsQuestionsSubmited] = React.useState(false);
    const questionId = `question__${questionIndex}`;
    const isCorrect = selectedAlternative === question.answer;
    const hasAlternativeSelected = selectedAlternative !== undefined;

    return (
        <Widget>
            <Widget.Header>
                <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
            </Widget.Header>

            <img
                alt="Descrição"
                style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'cover',
                }}
                src={question.image}
            />

            <Widget.Content>
                <h2>{question.title}</h2>
                <p>{question.description}</p>

                <AlternativesForm
                    onSubmit={(e) => {
                        e.preventDefault();
                        setIsQuestionsSubmited(true);
                        setTimeout(() => {
                            addResult(isCorrect);
                            onSubmit();
                            setIsQuestionsSubmited(false);
                            setSelectedAlternative(undefined);
                        }, 3 * 1000);
                    }}
                >
                    {question.alternatives.map((alternative, alternativeIndex) => {
                        const alternativeId = `alternative__${alternativeIndex}`;
                        const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
                        const isSelected = selectedAlternative === alternativeIndex;
                        return (
                            <Widget.Topic
                                as="label"
                                key={alternativeId}
                                htmlFor={alternativeId}
                                data-selected={isSelected}
                                data-status={isQuestionsSubmited && alternativeStatus}
                            >
                                <input
                                    style={{ display: 'none' }}
                                    id={alternativeId}
                                    name={questionId}
                                    onChange={() => setSelectedAlternative(alternativeIndex)}
                                    type="radio"
                                />
                                {alternative}
                            </Widget.Topic>
                        );
                    })}

                    <Button type="submit" disabled={!hasAlternativeSelected}>CONFIRMAR</Button>
                    {isQuestionsSubmited && isCorrect && <p>Você acertou!</p>}
                    {isQuestionsSubmited && !isCorrect && <p>Você errou!</p>}
                </AlternativesForm>
            </Widget.Content>
        </Widget>
    );
}

const screenStates = {
    QUIZ: 'QUIZ',
    LOADING: 'LOADING',
    RESULT: 'RESULT',
};

export default function QuizPage() {
    const [screenState, setScreenState] = React.useState(screenStates.LOADING);
    const [results, setResults] = React.useState([]);
    const totalQuestions = db.questions.length;
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const questionIndex = currentQuestion;
    const question = db.questions[questionIndex];

    function addResult(result) {
        setResults([
            ...results,
            result,
        ]);
    }

    // [React chama de: Efeitos || Effects]
    // React.useEffect
    // atualizado === willUpdate
    // morre === willUnmount
    React.useEffect(() => {
        // fetch() ...
        setTimeout(() => {
            setScreenState(screenStates.QUIZ);
        }, 1 * 1000);
        // nasce === didMount
    }, []);

    function handleSubmitQuiz() {
        const nextQuestion = questionIndex + 1;
        if (nextQuestion < totalQuestions) {
            setCurrentQuestion(nextQuestion);
        } else {
            setScreenState(screenStates.RESULT)
        }
    }

    return (
        <div>
            <QuizBackground backgroundImage={db.bg}>
                <QuizContainer>
                    <QuizLogo />

                    {screenState === screenStates.QUIZ && (
                        <QuestionWidget
                            question={question}
                            questionIndex={questionIndex}
                            totalQuestions={totalQuestions}
                            onSubmit={handleSubmitQuiz}
                            addResult={addResult}
                        />
                    )}

                    {screenState === screenStates.LOADING && <LoadingWidget />}

                    {screenState === screenStates.RESULT && <ResultadoWidget results={results} />}
                    <Footer />
                </QuizContainer>
                <GitHubCorner projectUrl="https://github.com/wendellbarcelos" />
            </QuizBackground>
        </div >
    );
}
