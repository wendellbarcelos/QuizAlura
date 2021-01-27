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

function ResultadoWidget() {
    return (
        <Widget>
            <Widget.Header>
                Resultado
            </Widget.Header>

            <Widget.Content>
                Você acertou X questões, parabéns!
            </Widget.Content>
        </Widget>
    );
}

function QuestionWidget({
    question,
    totalQuestions,
    questionIndex,
    onSubmit,
}) {
    const questionId = `question__${questionIndex}`;
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

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        onSubmit();
                    }}
                >
                    {question.alternatives.map((alternative, alternativeIndex) => {
                        const alternativeId = `alternative__${alternativeIndex}`;
                        return (
                            <Widget.Topic
                                as="label"
                                htmlFor={alternativeId}
                            >
                                <input
                                    style={{ display: 'none' }}
                                    id={alternativeId}
                                    name={questionId}
                                    type="radio"
                                />
                                {alternative}
                            </Widget.Topic>
                        );
                    })}

                    <Button type="submit">CONFIRMAR</Button>
                </form>
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
    const totalQuestions = db.questions.length;
    const [currentQuestion, setCurrentQuestion] = React.useState(0);
    const questionIndex = currentQuestion;
    const question = db.questions[questionIndex];

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
        if(nextQuestion < totalQuestions) {
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
                        />
                    )}

                    {screenState === screenStates.LOADING && <LoadingWidget />}

                    {screenState === screenStates.RESULT && <ResultadoWidget />}
                    <Footer />
                </QuizContainer>
                <GitHubCorner projectUrl="https://github.com/wendellbarcelos" />
            </QuizBackground>
        </div >
    );
}
